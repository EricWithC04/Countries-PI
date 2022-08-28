import React from "react";

const Card = ({ img, name, capital }) => {
    return (
        <div className="card">
            <img src="#" alt="flag" />
            <h4>{name}</h4>
            <h6>{capital}</h6>
        </div>
    )
}