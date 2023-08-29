const initialState = {
    categories: [],
    error: null,
}

export const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_CATEGORIES_SUCCESS':
            return {
                ...state,
                categories: action.payload,
            };

        case 'GET_CATEGORIES_ERROR':
            return {
                ...state,
                categories: action.error,
            };
            
        default: 
            return state;    
    }
}