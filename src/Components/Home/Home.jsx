import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Home extends Component {
  productClick = () =>
    this.props.history.push({
      pathname: "/products",
      state: {
        originPage: "home"
      }
    });

  aboutClick = () =>
    this.props.history.push({
      pathname: "/about",
      state: {
        originPage: "home"
      }
    });

  render() {
    return (
      <div>
        <h2>Home</h2>
        <button onClick={this.productClick}>Products</button>
        <button onClick={this.aboutClick}>About</button>
        <Link
          to={{
            pathname: "/products",
            state: {
              originPage: "home"
            }
          }}
        >
          Products
        </Link>
      </div>
    );
  }
}

export default Home;
