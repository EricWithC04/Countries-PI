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
                countryDetail: action.payload
            }
        default: return state;
    }
}

export default rootReducer;