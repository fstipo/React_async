import React from 'react';
import { fetchData } from './component/Api';
import './App.css';

fetchData((err, data) => {
  console.log('Callback is fired');
  if (err) {
    console.log(err);
  } else if (data) {
    console.log(data);
  }
});

function App() {
  return (
    <>
      <div className="App my-3 display-2">Async Code</div>
    </>
  );
}

export default App;
