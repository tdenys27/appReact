export const newPostsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SEND_COUPON_SUCCESS':
            return state = undefined;
        case 'SEND_COUPON_ERROR':
            return { ...state, error: action.error };
        default:
            return state;
    }
 }