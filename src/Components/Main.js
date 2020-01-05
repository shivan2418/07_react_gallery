import React from 'react';
import DefaultSearch from './DefaultSearch';
import Results from './Results';
import apiKey from '../config';
import terms from '../searchTerms';

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
    }
    // Searchbar callback, redirect the the browser
    handleSubmit = (e) => {
        e.preventDefault();
        let query = this.query.value;
        this.props.history.push(query);
    }

    fetch_pics_from_api(query) {
        // fetches a picture from the api and saves the imagies for that query in state.
        try {
            let search_query = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey.public}&text=${query}&per_page=24&page=1&format=json&nojsoncallback=1'`;

            fetch(search_query)
                .then(response => response.json())
                .then((responseData) => {
                    let current_state = this.state;
                    current_state[query] = responseData.photos.photo
                    current_state.loading = false;
                    this.setState(current_state);
                    return true;
                })
                .catch(error => { 
                    console.log(error);
                    return false; });
        }
        catch (error) {
            console.log(`Non network error: ${error}`);
            return false;
        }
    }

    componentDidMount() {
        terms.forEach(term => { this.fetch_pics_from_api(term) });
    }

    render() {
        // extract the search query from the props
        let query = this.props.match.params.query;
        // if there pics are not provided, then downloaded them now.
        if (typeof (this.state[query]) == 'undefined') {

            this.setState( (state) => {
                state["loading"]=true;
            });
            this.fetch_pics_from_api(query);
        }
        const pictures = this.state[query];

        return (
            <div className='container'>
                <div>
                    {/* Searchbar */}
                    <div>
                        <form className='search-form' onSubmit={this.handleSubmit}>
                            <input type="text" placeholder="Query" ref={(input) => this.query = input} />
                            <button type="submit">Go!</button>
                        </form>
                    </div>

                    {/* Defaut Search Terms */}
                    <DefaultSearch terms={terms} />
                    {/* Search results */}
                    <div>
                        {(this.state.loading) ? <h1>Loading...</h1>
                            :
                            <div>
                                <h4>Showing results for {query}</h4>
                                <Results pics={pictures} />
                            </div>
                        }
                    </div>
                </div>
            </div>
        );
    };
}


export default Main;