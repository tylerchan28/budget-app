import moment from "moment";
// Get visible expenses

export default (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const createdAtMoment = moment(expense.createdAt)
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, "day") : true; // if no start date, return true so don't filter anything out
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, "day") : true;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch; //if all are true, sort
    }).sort((a,b) => {
        if (sortBy === "date") { //most recent expenses first
            return a.createdAt < b.createdAt ? 1 : -1; 
            //ex. [500, 600 (more recent)]
            //true, b comes first
            //if result is negative (-1), [a,b]
            //if result is positive (1), [b,a]
        } else if (sortBy === "amount") { //most expensive first
            return a.amount < b.amount ? 1 : -1
            //ex. [4.50, 3.50]
            //false, return -1 and  a comes before b
        }
    })
}

// only returns expenses that match the text filter
//is the start date before the createdAt && the end date after the createdAt?
    // return if both are true (as well as textMatch) and sort them