// Expenses Reducer
const expensesReducerDefaultState = [];
export default (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case "ADD_EXPENSE":
            return [
                ...state,
                action.expense 
                //use spread to keep all values and ADD ON an EXPENSE 
            ];
        case "REMOVE_EXPENSE":
            return state.filter(({ id }) => id !== action.id)
            //using the k/v id to see if it is equal to the action id 
            //if ===, condition is false and not passed into array
        case "EDIT_EXPENSE":
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates //overriding original value with the updates value
                    };
                } else {
                    return expense; //no change to expenses if no id match
                };
            });
        case "SET_EXPENSES":
            return action.expenses;
        default:
            return state;
    }
};
