import React from 'react';
import { fetchData } from './component/Api';
import './App.css';

const data = fetchData();
function App() {
  return (
    <>
      <div className="App my-3 display-2">Async Code</div>
    </>
  );
}

export default App;
