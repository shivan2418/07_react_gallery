import React from 'react';
import SearchBar from './SearchBar';
import DefaultSearch from './DefaultSearch';
import Results from './Results';

class Main extends React.Component {


    handleSubmit = (e) => {
        e.preventDefault();
        let query = this.query.value;
        console.log(`redirecting to ${query}`);
        this.props.history.push(query);
    }

    render() {

        console.log(this.props);

        return (
            <div>
                <div className='searchbar'>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="Query" ref={(input) => this.query = input} />
                        <button type="submit">Go!</button>
                    </form>
                </div>
                <DefaultSearch />
                <Results query={this.props.match.params.query} />
            </div>
        );
    };
}


export default Main;