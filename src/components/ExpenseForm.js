import React from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import 'react-dates/initialize';
import "react-dates/lib/css/_datepicker.css";

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            description: props.expense ? props.expense.description : "",
            note: props.expense ? props.expense.note : "",
            amount: props.expense ? (props.expense.amount / 100).toString() : "",
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: ""
        } // if props.expense exists, populate input values w/ them
            // if not, set to these values
    
    }

    onDescriptionChange = (e) => { // changes this.state.description whenever value is updated
        const description = e.target.value;
        this.setState(() => ({ description }))
    }
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }))
    }
    onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }))
        } // !amount allows for deletion of amount, now empty value can be set
    }
    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }))
        } //if no createdAt, do nothing
    }
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }))
    }
    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({ error: "Please provide description and amount" }))
        } else {
            this.setState(() => ({ error: "" }))
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            }) // this is the onSubmit function from AddExpensePage
        } // form onSubmit handles the error, props.onsubmit passes in parameters to add an expense

    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}t</p>}
                <form onSubmit={this.onSubmit}> 
                    <input
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description} // creates read only input, so make onChange
                        onChange={this.onDescriptionChange} // without onChange, cannot write text into input
                    />
                    <input
                        type="text"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <textarea
                        placeholder="Add a note for your expense (optional)"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    >
                    </textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}

// autoFocus automatically puts cursor on form/can type right when get on page