import moment from 'moment';
import { csrfFetch } from "./crsf";

const GET_EVENTS = 'events/getAllEvents'
const populateEvents = (events) => {
    return {
      type: GET_EVENTS,
      events
    }
  }

export const normalizeDate = (date) => {
    const newDate = new Date(date)
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const weekDay = days[moment(newDate).day()];
    const month = months[moment(newDate).month()];
    const dayOfMonth = moment(newDate).format('DD');
    const time = moment(newDate).format('HH:mm');
    return `${weekDay}, ${month} ${dayOfMonth} at ${time}`
}

export const getEvents = () => async (dispatch) => {
    const response = await csrfFetch('/events')
    if (response.ok){
      const data = await response.json();
    dispatch(populateEvents(data));
    return data
    };
  };
