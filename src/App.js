import logo from './logo.svg';
import './App.css';
import Card from './components/card/card';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Card text='hello world' />
      </header>
    </div>
  );
}

export default App;
