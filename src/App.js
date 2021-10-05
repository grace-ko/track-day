import React from 'react';
import axios from 'axios';
import Calendar from './calendar';

const orgID = {
  ongrid: '06277C99-00C9-23EB-FD08FE5275BCC0C5',
  speedsf: '072A885E-AD68-6F64-E88C19E4D0D21DFB',
  hod: '38E4A131-AB02-6D17-AB34547979B28DE5'
}


class App extends React.Component {

  componentDidMount() {
    for (const prop in orgID) {
      axios.get(`https://api.motorsportreg.com/rest/calendars/organization/${orgID[prop]}.json`)
        .then(res => {
          console.log(res.data.response.events)
        })
    }
  }



  render() {
    return (

      <Calendar />
    )
  }
}

export default App;
