export default (state = {}, action) => { // provide default state
    switch (action.type) {
        case "LOGIN":
            return {
                uid: action.uid
            }
        case "LOGOUT":
            return {};
        default:
            return state;
    }
};