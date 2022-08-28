export function getCountries() {
    return async function (dispatch) {
        const allCountries = await fetch("http://localhost:3001/countries")
            .then(response => response.json())
            .then(paises => paises.map(pais => {
                return {
                    id: pais.id,
                    name: pais.name,
                    img: pais.image,
                    continent: pais.continent
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
        const thisCountry = await fetch(`http://localhost:3001/countries?name=${id}`)
            .then(response => response.json());
        dispatch({
            type: "GET_COUNTRY_DETAIL",
            payload: thisCountry
        });
    }
}
/*
export function getCountries() {
    
} */