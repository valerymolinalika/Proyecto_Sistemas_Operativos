import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Proyecto ambiente computacion distribuida
        </p>
        <a
          className="App-link"
          href="http://192.168.56.102/compose"
          target="_blank"
          rel="noreferrer"
        >
          Ir al compose
        </a>
      	<p>---------------------------------------------------</p>
        <a
          className="App-lin"
          href="http://192.168.56.102/apache"
          target="_blank"
          rel="noreferrer"
        >
          Ir al apache
        </a>
      </header>
    </div>
  );
}

export default App;
