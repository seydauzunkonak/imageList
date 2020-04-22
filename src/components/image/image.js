import React, { Component } from "react";

class image extends Component {
  constructor(props) {
    super(props);
    // ReactRef tanımlama
    this.myRef = React.createRef();
    this.state = {
      spanCount: 1,
    };
    this.myRef = React.createRef();
  }
  componentDidMount() {
    this.myRef.current.addEventListener("load", () => {
      const spanCount = Math.round(this.myRef.current.clientHeight / 5) + 1;
      this.setState({
        spanCount,
      });
    });
  }
  render() {
    const { image } = this.props;
    return (
      <img
        style={{
          gridRowEnd: `span ${this.state.spanCount}`,
        }}
        ref={this.myRef}
        alt={image.description}
        src={image.urls.small}
      />
    );
  }
}
export default image;
