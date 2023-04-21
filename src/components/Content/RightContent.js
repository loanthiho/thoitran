import React, { Component } from 'react';
import ShowCard from './ShowCard/ShowCard.js';
import { Data } from './Data.js';
class RightContent extends Component {
    render() {
        console.log(getData());
        const products = getData();
        return (
            <div>
                <div id="right-content">
                    <h2>Product : </h2>
                    <div id="products">
                        {
                            products.map(key =>
                                <ShowCard
                                    price={key.oldprice}
                                    name={key.name}
                                    des={key.des}
                                    image={key.image} />)
                        }
                        <div style={{ clear: 'both' }} />
                    </div>
                    <div style={{ clear: 'both' }} />
                </div>
                <div style={{ clear: 'both' }} />
            </div>
        );
    }
}

export default RightContent;			