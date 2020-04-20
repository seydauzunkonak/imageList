import React, { Component } from "react";
import SearchBar from "./searchBar/searchBar";
import "./app.css";

class App extends Component {
  //search fonksiyonu oluşturuldu
  onSearchImage(search) {
    console.log("App : " + search);
  }
  render() {
    return (
      <div className="app-container">
        <SearchBar onSearchImage={this.onSearchImage} />
      </div>
    );
  }
}
export default App;
