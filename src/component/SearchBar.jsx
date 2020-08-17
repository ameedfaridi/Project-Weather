import React, { Component } from "react";

class SearchBar extends Component {
  getValue = (e) => {
    e.preventDefault();
    if (this.props.btnClicked) {
      return this.props.btnClicked(e);
    }
  };

  render() {
    return (
      <div className="input-field">
        <form onSubmit={(e) => this.getValue(e)}>
          <input
            name="search"
            autoComplete="off"
            type="text"
            className="input"
            placeholder="Search City..."
          />
          <button className="input-btn">Search</button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
