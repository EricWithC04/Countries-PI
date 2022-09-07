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
            {
                detail ? <div>
                    Aqui van a ir los detalles del country
                </div> : 
                <div>Detalles no encontrados</div>
            }
        </div>
    )
}

export default CountryDetail;