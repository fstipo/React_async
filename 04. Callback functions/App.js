import React from 'react';
import { fetchData } from './component/Api';
import './App.css';

console.log(1);
console.log(2);

fetchData((err, data) => {
  console.log('Callback is fired');
  if (err) {
    console.log(err);
  } else if (data) {
    console.log(data);
  }
});

console.log(3);
console.log(4);

function App() {
  return (
    <>
      <div className="App my-3 display-2">Async Code</div>
    </>
  );
}

export default App;
