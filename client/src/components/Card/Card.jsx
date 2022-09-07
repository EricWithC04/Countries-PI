import React from "react";
import "./Card.css";

const Card = ({ img, name, continent }) => {
    return (
        <div className="card">
            <img src={img} alt="flag" />
            <h4>{name}</h4>
            <h6>{continent}</h6>
        </div>
    )
}

export default Card;