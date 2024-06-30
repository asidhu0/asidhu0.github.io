import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar'; // Make sure the path is correct
import HomePage from './HomePage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <HomePage />
      </header>
    </div>
  );
}

export default App;
