import React, { Component } from "react";
import SearchBar from "./searchBar/searchBar";
import axios from "axios";
import ImageList from "./image/imageList";
import "./app.css";

class App extends Component {
  state = {
    images: [],
  };
  //search fonksiyonu oluşturuldu
  onSearchImage = async (search) => {
    const result = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: search,
      },
      headers: {
        //kim olduğumuzu anlaması için key gönderme
        Authorization: "Client-ID Qpy8g9pgEDsPUuK8TM_LdsCYkohQG0bxN5JWFxxlMlQ",
      },
    });

    this.setState({
      images: result.data.results,
    });
  };
  render() {
    return (
      <div className="app-container">
        <SearchBar onSearchImage={this.onSearchImage} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}
export default App;
