import React from 'react';
import DefaultSearch from './DefaultSearch';
import Results from './Results';

class Main extends React.Component {

    // Searchbar callback
    handleSubmit = (e) => {
        e.preventDefault();
        let query = this.query.value;
        console.log(`redirecting to ${query}`);
        this.props.history.push(query);
    }

    render() {

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
                    {/* Defaut Search Queries */}
                    <DefaultSearch />
                    {/* Search results */}
                    <Results query={this.props.match.params.query} />
                </div>
            </div>
        );
    };
}


export default Main;