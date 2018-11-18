import React, { Component } from 'react';
import './Search.scss';

class Search extends Component {
 
  render() {
    return (
      <div className="search">
        <input type="search" onChange={this.props.change}></input><button>Cancel</button>
      </div>
    )
  }
}

export default Search;
