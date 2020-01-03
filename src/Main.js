import React from 'react';
import DefaultSearch from './DefaultSearch';
import Results from './Results';
import apiKey from './config';
import terms from './searchTerms';

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }
    // Searchbar callback
    handleSubmit = (e) => {
        e.preventDefault();
        let query = this.query.value;
        console.log(`redirecting to ${query}`);
        this.props.history.push(query);
    }

    fetch_pics_from_api(query) {

        try {
            let search_query = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey.public}&text=${query}&per_page=24&page=1&format=json&nojsoncallback=1'`;
            fetch(search_query)
                .then(response => response.json())
                .then((responseData) => {
                    let current_state = this.state;
                    current_state[query] = responseData.photos.photo
                    this.setState(current_state);
                })
                .catch(error => { console.log(error) });
        }
        catch (error) {
            console.log(`Non network error: ${error}`)
        }
    }

    componentDidMount() {
        terms.map(term => { this.fetch_pics_from_api(term) });
        console.log('component did mount');
        console.log(this.props.match);
    }

    render() {
        console.log(this.state);
        console.log('rendering...');

        // extract the search query from the props
        let query = this.props.match.params.query;

        // if there pics are not provided, then downloaded them now.
        if (typeof (this.state[query]) == 'undefined') {
            console.log(`Fetch images for ${query}`)
            this.fetch_pics_from_api(query);
        } else {
            console.log(`${query} is not undefined`);

        }

        const pictures = this.state[query];
        //pictures.map(p => {console.log(p.id)});
        console.log(`now showing ${query}  and ${pictures}`);

        return (
            <div className='container'>
                <div>
                    {/* Searchbar */}
                    <div className='searchbar'>
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" placeholder="Query" ref={(input) => this.query = input} />
                            <button type="submit">Go!</button>
                        </form>
                    </div>

                    {/* Defaut Search Terms */}
                    <DefaultSearch terms={terms} />


                    {/* Search results */}
                    <h4>{query}</h4>
                    <Results pics={pictures} />
                </div>
            </div>
        );
    };
}


export default Main;