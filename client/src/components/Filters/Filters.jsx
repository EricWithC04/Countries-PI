import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { sortName, sortPopulation } from "../../redux/actions";

const Filters = ({ setPage }) => {

    const dispatch = useDispatch();

    const handleOrderName = (e) => {
        e.preventDefault();
        dispatch(sortName(e.target.value));
        setPage(1);
    }

    const handleOrderPopulation = (e) => {
        e.preventDefault();
        dispatch(sortPopulation(e.target.value));
        setPage(1);
    }

    return (
        <div>
            <select onChange={(e) => handleOrderName(e)}>
                <option value="ascendente">A-Z</option>
                <option value="descendente">Z-A</option>
            </select>
            <select onChange={(e) => handleOrderPopulation(e)}>
                <option value="ascendente">Menor-Mayor</option>
                <option value="descendente">Mayor-Menor</option>
            </select>
        </div>
    )
}

export default Filters;