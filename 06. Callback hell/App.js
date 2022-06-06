import React from 'react';
import { fetchData } from './component/Api';
import './App.css';

fetchData('https://jsonplaceholder.typicode.com/todos/1', (err, data) => {
  console.log('Callback 1. is fired');
  console.log(data);
  fetchData('https://jsonplaceholder.typicode.com/todos/2', (err, data) => {
    console.log('Callback 2. is fired');
    console.log(data);
    fetchData('https://jsonplaceholder.typicode.com/todos/3', (err, data) => {
      console.log('Callback 3. is fired');
      console.log(data);
    });
  });
});

function App() {
  return (
    <>
      <div className="App my-3 display-2">Async Code</div>
    </>
  );
}

export default App;
