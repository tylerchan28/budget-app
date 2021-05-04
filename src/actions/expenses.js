import uuid from "uuid";
import database from "../firebase/firebase";
// ADD_EXPENSE
export const addExpense = (expense) => ({
    type: "ADD_EXPENSE",
    expense
});

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => { // use dispatch as an argument so can be used inside
        const { 
            description = "", 
            note = "", 
            amount = 0, 
            createdAt = 0
        } = expenseData; // creating default values if none are passed
        const expense = { description, note, amount, createdAt }
        
        return database.ref("expenses").push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        })
    }
}

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
    type:"REMOVE_EXPENSE",
    id
}) // { id } gets id value current object, assigns to id variable in function

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
    type: "EDIT_EXPENSE",
    id,
    updates
})

// export const startAddExpense = ({ description="", note="", amount=0, createdAt=0 } = expenseData) => {
//     return (dispatch) => { // use dispatch as an argument so can be used inside
//         const expense = { description, note, amount, createdAt }
//         database.ref("expenses").push(expense).then((ref) => {
//             dispatch(addExpense({
//                 id: ref.key,
//                 ...expense
//             }));
//         })
//     }
// }
