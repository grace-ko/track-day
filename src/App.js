import React from 'react';
import Calendar from './calendar';
import Header from './Header';


class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Calendar />
      </div>
    )
  }
}

export default App;
