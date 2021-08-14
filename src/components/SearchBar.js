import React, { Component } from 'react';

class SearchBar extends Component {
    state = { term: ''  };

    onSubmitHandel = (e) => {
        e.preventDefault();
        this.props.onSearchSubmit(this.state.term)
    }

    render() { 
        return ( 
        <div className="ui segment">
            <form onSubmit={this.onSubmitHandel} className="ui form">
                <div className="field"> 
                    <label>Image search</label>
                    <input type="text" value={this.state.term} onChange={e => this.setState({
                        term: e.target.value
                    })}/>
                </div>
            </form>
        </div> );
    }
}
 
export default SearchBar;