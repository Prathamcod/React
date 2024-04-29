// eslint-disable-next-line no-unused-vars
import React from "react";
import "../components/Card.css"

const Card = (props) => {
    return (
        <div className="PricePop">
            <h1>Amozon</h1>

            <div className="cardItem1">
                <div className="subcard">

                </div>

                <div className="ProductInf">
                    <div className="ProductHeading">
                        <h1 className="ProductName">
                            {props.ProName}
                        </h1>

                    </div>

                    <div className="Price">{props.price}</div>
                </div>
                <button className="Decrement">-</button> <h1>{props.items}</h1> <button className="Increment">+</button>

            </div>

            {/* <div className="cardItem1">
                <div className="subcard">

                </div>

                <div className="ProductInf">
                    <div className="ProductHeading">
                        <h1 className="ProductName">
                            T-Shirt
                        </h1>

                    </div>

                    <div className="Price">$110</div>
                </div>
                <button className="Decrement">-</button> <h1>2</h1> <button className="Increment">+</button>

            </div>

            <div className="cardItem1">
                <div className="subcard">

                </div>

                <div className="ProductInf">
                    <div className="ProductHeading">
                        <h1 className="ProductName">
                            T-Shirt
                        </h1>

                    </div>

                    <div className="Price">$110</div>
                </div>
                <button className="Decrement">-</button> <h1>2</h1> <button className="Increment">+</button>

            </div> */}


        </div>

    )
};

export default Card;
