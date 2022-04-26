import './App.css';
import Converter from './components/Converter/Converter';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Header />
        <Converter />
      </div>
    </div>
  );
}

export default App;
