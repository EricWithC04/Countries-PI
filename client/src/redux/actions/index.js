export function getCountries() {
    return async function (dispatch) {
        const allCountries = fetch("http://localhost:3001/countries")
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

/* export function getCountryDetail() {
    
}

export function getCountries() {
    
} */