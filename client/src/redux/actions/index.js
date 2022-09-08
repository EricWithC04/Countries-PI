export function getCountries() {
    return async function (dispatch) {
        const allCountries = await fetch("http://localhost:3001/countries")
            .then(response => response.json())
            .then(paises => paises.map(pais => {
                return {
                    id: pais.id,
                    name: pais.name,
                    img: pais.image,
                    continent: pais.continent,
                    capital: pais.capital,
                    subregion: pais.subregion,
                    area: pais.area,
                    population: pais.population
                }
            }))
        dispatch({
            type: "GET_COUNTRIES",
            payload: allCountries
        })
    }
}

export function getCountryDetail(id) {
    return async function (dispatch) {
        dispatch({
            type: "GET_COUNTRY_DETAIL",
            payload: id
        })
    }
}

export function sortName(value) {
    return async function (dispatch) {
        dispatch({
            type: "ORDER_NAME",
            payload: value
        })
    }
}

export function sortPopulation(value) {
    return async function (dispatch) {
        dispatch({
            type: "ORDER_POPULATION",
            payload: value
        })
    }
}