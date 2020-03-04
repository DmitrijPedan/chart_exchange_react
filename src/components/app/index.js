import React from 'react';
import './app.css';
import Chart from '../chart'
import FormSetDates from '../formSetDates';

function App() {
  return (
    <div className="App">
      <FormSetDates />
      <Chart />
    </div>
  );
}

export default App;
