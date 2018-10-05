import React, { Component } from "react";
import MyButton from "../utils/MyButton";
import { Zoom } from "react-reveal";

class Pricing extends Component {
  state = {
    prices: [100, 150, 250],
    position: ["Balcony", "Medium", "Star"],
    description: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, rem!",
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, deleniti.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, voluptates."
    ],
    link: ["https://google.com", "https://yahoo.com", "https://duckduckgo.com"],
    delay: [500, 0, 500]
  };

  showBoxes = () =>
    this.state.prices.map((box, i) => (
      <Zoom key={i} delay={this.state.delay[i]}>
        <div className="pricing_item">
          <div className="pricing_inner_wrapper">
            <div className="pricing_title">
              <span>${this.state.prices[i]}</span>
              <span>{this.state.position[i]}</span>
            </div>
            <div className="pricing_description">
              {this.state.description[i]}
            </div>
            <div className="pricing_buttons">
              <MyButton
                bck="#FFA800"
                color="#FFFFFF"
                link={this.state.link[i]}
                text="Buy Now"
              />
            </div>
          </div>
        </div>
      </Zoom>
    ));

  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>
          <div className="pricing_wrapper">{this.showBoxes()}</div>
        </div>
      </div>
    );
  }
}

export default Pricing;
