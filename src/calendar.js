import data from './data';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment';
import 'react-big-calendar/lib/sass/styles.scss';
const localizer = momentLocalizer(moment);

let MyCalendar = props => (
  <div>
    <Calendar
      localizer={localizer}
      events={data}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 700 }}
      views={['month']}
    />
  </div>
)

export default MyCalendar;
