import axios from 'axios';
import dateFormat from 'dateformat';
const orgID = {
  ongrid: '06277C99-00C9-23EB-FD08FE5275BCC0C5',
  speedsf: '072A885E-AD68-6F64-E88C19E4D0D21DFB',
  hod: '38E4A131-AB02-6D17-AB34547979B28DE5'
}
//const data = [];
let events = [];
for (const prop in orgID) {
  axios.get(`https://api.motorsportreg.com/rest/calendars/organization/${orgID[prop]}.json`)
    .then(res => {
      events.push(res);
    })
    //  console.log(res.data.response.events.length)


  //  data.push({id: 1, title: 'test', allDay: true, start: new Date(2021, 9, 4),
    //  end: new Date(2021, 10, 10),})


}
console.log(events)

let data = [{id: 0,
  title: 'All Day Event very long title',
  allDay: true,
  start: new Date(2021, 9, 4),
  end: new Date(2021, 10, 10),}]

  console.log('date', data[0].end)


export default data;
