import './App.css';

function Card(props) {
  console.log(props);
  
  return (
    <div>
      <h1>{props.PropName}</h1>
    </div>
  );
}

function App() {
  const arr = ['one', 'two', 'three'];
  return (
    <div>
      {arr.map((v) => (
        <Card PropName={v} key={v} />
      ))}
    </div>
  );
}


export default App;
