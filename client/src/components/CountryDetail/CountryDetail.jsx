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
    console.log(detail)

    return (
        <div>
            Aqui van a ir los detalles del country
        </div>
    )
}

export default CountryDetail;