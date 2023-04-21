import React, { Component } from "react";

class ShowCard extends Component {

  render() {
    return (
        <div className="product">
          <img src={this.props.image} alt="" width={100} height={100}/>
          <h3>{this.props.name}</h3>
          <p>{this.props.des}</p>
          <p>{this.props.price}</p>
        </div>
    );
  }
}

export default ShowCard;