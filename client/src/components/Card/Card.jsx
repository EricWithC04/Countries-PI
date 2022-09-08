import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ img, name, continent, id }) => {
    return (
        <div className="card">
            <Link to={`/Home/Country/${id}`}>
                <img src={img} alt="flag" />
            </Link>
            <h4>{name}</h4>
            <h6>{continent}</h6>
        </div>
    )
}

export default Card;