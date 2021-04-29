// import moment from "moment"
    // this mock moment will call itself, creates a stack trace error
const moment = jest.requireActual("moment");
    // grabs original version of moment and syncs with mock version
export default (timestamp = 0) => {
    return moment(timestamp);
}

// force moment to start at a specific point in time if the point in time isn't provided