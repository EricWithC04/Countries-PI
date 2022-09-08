import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCountryDetail } from "../../redux/actions/index.js";

const CountryDetail = () => {

    const { idParams } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCountryDetail(idParams))
    }, [dispatch])

    const detail = useSelector(state => state.countryDetail)

    return (
        <div>
            {
                detail ? <div>
                    <img src={detail.img} alt="flag" />
                    <h2>{detail.name}</h2>
                    <p>{detail.continent}</p>
                    <p>{detail.capital}</p>
                    <p>{detail.subregion}</p>
                    <p>{detail.area}</p>
                    <p>{detail.population}</p>
                </div> : 
                <div>Detalles no encontrados</div>
            }
        </div>
    )
}

export default CountryDetail;