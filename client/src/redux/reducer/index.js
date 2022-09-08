const initialState = {
    countries: [],
    countryDetail: {},
    currentPage: 0
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case "GET_COUNTRIES":
            return {
                ...state,
                countries: action.payload
            }
        case "GET_COUNTRY_DETAIL":
            return {
                ...state,
                countryDetail: state.countries.find(pais => pais.id === action.payload)
            }
        case "ORDER_NAME":
            const orderName = action.payload === "ascendente" ? state.countries.sort((a, b) => {
                if (a.name > b.name) return 1;
                if (a.name < b.name) return -1;
                return 0;
            }) : state.countries.sort((a, b) => {
                if (a.name < b.name) return 1;
                if (a.name > b.name) return -1;
                return 0;
            })
            return {
                ...state,
                countries: orderName
            }
        case "ORDER_POPULATION":
            const orderPopulation = action.payload === "ascendente" ? state.countries.sort((a, b) => {
                return a.population-b.population
            }) : state.countries.sort((a, b) => {
                return b.population-a.population
            })
            return {
                ...state,
                countries: orderPopulation
            }
        default: return state;
    }
}

export default rootReducer;