import React from "react";
import { connect } from "react-redux";
import { DateRangePicker } from "react-dates";
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate} from "../actions/filters";


class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null,
    }
    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    }
    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }))
    }
    render() {
        return (
            <div>
                <input 
                    type="text" 
                    value={this.props.filters.text} // controlled input, controlled by javascript
                    onChange={(e) => {
                        this.props.dispatch(setTextFilter(e.target.value))
                    //on each keystroke, changes text filter to input value
                    }}
                />
                <select 
                    value={this.props.filters.sortBy} 
                    onChange={(e) => {
                        if (e.target.value === "date") {
                            this.props.dispatch(sortByDate());
                        } else if (e.target.value === "amount") {
                            this.props.dispatch(sortByAmount());
                        }
                    }}
                >
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    startDateId="start"
                    endDate={this.props.filters.endDate}
                    endDateId="end"
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={(() => false)}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

// allows user to write to the store through props.dispatch
// connect function allows us to use prop.dispatch rather than store.dispatch
    // react-redux injects dispatch method into props
export default connect(mapStateToProps)(ExpenseListFilters);