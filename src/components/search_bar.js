/**
 * Created by maciejdo on 12.11.2018.
 */
import React, { Component } from 'react';

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = { term: '' };
    }

    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="col-xs-2 col-sm-4 col-md-4 col-lg-4" >
                    <h4 className="you-tube-api" >YouTube Api</h4>
                </div>
                <a className="navbar-brand">
                    <img
                        alt="React YouTube Ninja"
                        src="images/ninja.png"
                        className="ninja-brand" />
                </a>
                <div className="col-xs-7 col-sm-4 col-md-4 col-lg-4">
                    <input
                        value={this.state.term}
                        onChange={event => this.onInputChange(event.target.value)}
                        placeholder="Search"
                        className="form-control search-input" />
                </div>
            </nav>
        );
    }

    onInputChange(term) {
        this.setState({ term });
        this.props.onSearchTermChange(term);
    }

    // TEN SAM ZAPIS CO onChange={event => this.setState({ term: event.target.value })}
    // onInputChange(eventObject) {
    //     console.log(event.target.value);
    // }
}

export default SearchBar;
