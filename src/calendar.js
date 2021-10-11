import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment';
import 'react-big-calendar/lib/sass/styles.scss';
import axios from 'axios';

const localizer = momentLocalizer(moment);

const orgAdd = {
  ongrid: 'https://api.motorsportreg.com/rest/calendars/organization/06277C99-00C9-23EB-FD08FE5275BCC0C5.json',
  speedsf: 'https://api.motorsportreg.com/rest/calendars/organization/072A885E-AD68-6F64-E88C19E4D0D21DFB.json',
  hod: 'https://api.motorsportreg.com/rest/calendars/organization/38E4A131-AB02-6D17-AB34547979B28DE5.json'
}

//data example
let data = [
  {
  title: 'test',
  start: new Date(2021, 9, 10),
  end: new Date(2021, 9, 13),
  },

]


class TrackCalendar extends React.Component {
  state = {
    data: {}
  }

  componentDidMount() {
    console.log('hello')
    axios.get(orgAdd.ongrid)
    .then(res => {
      this.setState({
        data: {        
            title: res.data.response.events[0].name,
            start: new Date(2021, 9, 10),
            end: new Date(2021, 9, 10),
        }
      });
      console.log(this.state.data);
    })
  }

  render() {
    return (
        <div>
          <Calendar
            localizer={localizer}
            events={this.state.data}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 700 }}
            views={['month']}
          />
        </div>
    )
  }
}


export default TrackCalendar;
