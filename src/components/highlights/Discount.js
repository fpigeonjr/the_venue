import React, { Component } from "react";
import { Slide, Fade } from "react-reveal";

class Discount extends Component {
  state = {
    discountStart: 0,
    discountEnd: 30
  };

  percentage = () => {
    if (this.state.discountStart < this.state.discountEnd) {
      this.setState({
        discountStart: this.state.discountStart + 1
      });
    }
  };

  componentDidUpdate() {
    setTimeout(() => {
      this.percentage();
    }, 30);
  }

  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade onReveal={() => this.percentage()}>
            <div className="discount_porcentage">
              <span>{this.state.discountStart}%</span>
              <span>OFF</span>
            </div>
          </Fade>

          <Slide right>
            <div className="discount_description">
              <h3>Purchase tickets before 12 November</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi natus in nihil dolorem voluptatibus totam labore
                commodi eius dolore animi aperiam recusandae, sint tempora dolor
                a nesciunt facilis, iste cum.
              </p>
              <div className="button">
                <button>Click Me</button>
              </div>
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}

export default Discount;