import './App.css';

function App() {
  console.log(1);
  console.log(2);
  console.log(3);
  setTimeout(() => console.log('callback'), 2000);
  console.log(4);
  console.log(5);
  return (
    <>
      <div className="App my-3 display-2"></div>
    </>
  );
}

export default App;
