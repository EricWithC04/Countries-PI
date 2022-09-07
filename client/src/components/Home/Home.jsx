import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../NavBar/NavBar.jsx";
import Filters from "../Filters/Filters.jsx";
import Card from "../Card/Card.jsx";
import Paginated from "../Paginated/Paginated.jsx";
import { getCountries } from "../../redux/actions/index.js";
import { Link } from "react-router-dom";
/* import "./Home.css"; */

const Home = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCountries())
    }, [dispatch])

    const allCountries = useSelector(state => state.countries);
    console.log(allCountries)
    
    /* const [pageCountries, setPageCountries] = useState([]); */
    const [actualPage, setActualPage] = useState(1);
    const [countriesPerPage, setCountriesPerPage] = useState(9)
    /* let paged = [];
    for (let i = 0; i < allCountries.length; i+25) {
        let page = allCountries.splice(i, i+15)
        paged.push(page)
        setPages([...pages, allCountries.splice(0, 25)])
    }
    console.log(pages) */
    const lastCountry = actualPage * countriesPerPage;
    const firstCountry = lastCountry - countriesPerPage;
    const paginated = (pageNumber) => {
        setActualPage(pageNumber);
    }
    const currentPage = allCountries.slice(firstCountry, lastCountry);

    return (
        <div className="home">
            <Link to="/Home/COL">
                <h1>Bienvenido a mi PI de Countries!</h1>
            </Link>
            <NavBar></NavBar>
            <Filters></Filters>
            <Paginated 
                countriesPerPage={countriesPerPage}
                allCountries={allCountries.length}
                paginated={paginated}
            />
            <div className="countries-container">
                {
                    currentPage && currentPage.length ? currentPage.map(pais => {
                        return (
                            <Card
                                img={pais.img}
                                name={pais.name}
                                continent={pais.continent}
                            />
                        )
                    }) : <div>Cargando paises...</div>
                }
            </div>
        </div>
    )
}

export default Home;