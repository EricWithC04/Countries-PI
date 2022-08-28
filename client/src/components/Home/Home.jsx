import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../NavBar/NavBar.jsx";
import Filters from "../Filters/Filters.jsx";
import { getCountries } from "../../redux/actions/index.js";

const Home = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCountries())
    }, [dispatch])

    const allCountries = useSelector(state => state.countries);

    return (
        <div className="home">
            <h1>Bienvenido a mi PI de Countries!</h1>
            <NavBar></NavBar>
            <Filters></Filters>
        </div>
    )
}

export default Home;