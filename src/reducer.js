export const initialState = {
    user:null,
    homeFields:null,
};
export const actionTypes = {
    SET_USER: "SET_USER",
    SET_HOME_FIELDS: "SET_HOME_FIELDS"
};
const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                ...state, user:action.user,
            };
        case actionTypes.SET_HOME_FIELDS:
            return {
                ...state, homeFields:action.homeFields,
            };
        default:
            return state;
    }
}
export default reducer;