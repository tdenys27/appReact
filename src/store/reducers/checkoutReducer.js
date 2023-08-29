const initialState = {
    order: [],
    error: null,
}

export const newPostsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SEND_ORDER_SUCCESS':
            return state = undefined;
        case 'SEND_ORDER_ERROR':
            return { ...state, error: action.error };
        default:
            return state;
    }
}