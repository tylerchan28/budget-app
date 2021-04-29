import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { editExpense, removeExpense } from "../actions/expenses"; 

const EditExpensePage = (props) => {
    return (
        <div>
            <ExpenseForm 
                expense={props.expense} // populates form when editing, different from expense variables below
                onSubmit={(expense) => { 
                    //dispatch action to edit expense
                    //redirect to dashboard
                    props.dispatch(editExpense(props.expense.id, expense)) // since expense={props.expense}
                    //  as the prop.expense changes, expense acts as the updater
                    props.history.push("/");
                    console.log("updated", expense);
                }}
            />
            <button onClick={() => {
                props.dispatch(removeExpense({ id: props.expense.id }));
                props.history.push("/");

            }}>Remove</button>
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)  
    }
}


export default connect(mapStateToProps)(EditExpensePage);

// set up mapStateToProps when you need more than dispatch()