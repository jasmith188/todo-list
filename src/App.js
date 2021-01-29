import './App.css';
import RandomQuote from './RandomQuote';

function App() {
  return (
    <div className="App">
      <h1>Todo App</h1>
      <RandomQuote />
     
      <br />
      <form action="">
        <input placeholder="A New Task" type="text" />
      </form>
    </div>
  );
}

export default App;
