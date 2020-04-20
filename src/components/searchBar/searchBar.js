import React, { Component } from "react";
import "./searchBar.css";
class SearchBar extends Component {
  state = {
    search: "",
  };

  //inputa verilen değeri alma
  inputChanged(event) {
    this.setState({
      search: event.target.value,
    });
  }
  searchImage() {
    console.log("search image clicked");
  }

  render() {
    return (
      <div className="search-bar-container ui input">
        <input
          type="text"
          placeholder="Ara"
          //value attribute tanımlama
          value={this.state.search}
          onChange={this.inputChanged.bind(this)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              this.searchImage();
            }
          }}
        />
        <button className="ui icon button" onClick={this.searchImage}>
          <i className="search icon"></i>
        </button>
      </div>
    );
  }
}
export default SearchBar;
