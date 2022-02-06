import logo from './logo.svg';
import './App.css';
import Deck from './components/Deck/Deck'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Deck />
        
      </header>
    </div>
  );
}

export default App;
