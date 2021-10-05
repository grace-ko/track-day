import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment';
import 'react-big-calendar/lib/sass/styles.scss';

const localizer = momentLocalizer(moment);

const MyCalendar = props => (
  <div>
    <Calendar
      localizer={localizer}
      //events={myEventsList}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
  </div>
)

export default MyCalendar;
