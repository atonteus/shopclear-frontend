import logo from './assets/shopclear.svg';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <a
          className="about-link"
          href="https://fractalbases.com/sources/shopclear/"
          target="_blank"
          rel="noopener noreferrer"
        >
          About
        </a>
      </header>
    </div>
  );
}

export default App;
