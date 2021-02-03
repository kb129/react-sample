import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './App.css';

const ItemList = (props) => {
  return (
    <p className="item-list">{props.message}</p>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <RedButton />
      </header>
      <div id="paras"></div>
    </div>
  );
}

function RedButton() {
  function addSentence(e) {
    ReactDOM.render(
      <ItemList message="test" />,
      document.getElementById("paras")
    );
  }

  return (
    <button onClick={addSentence}>Red</button>
  );
}

export default App;
