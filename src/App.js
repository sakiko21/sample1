import logo from './logo.svg';
import './App.css';

import DoubbleButton from './components/DoubbleButton';
import ReactStars from './components/ReactStars';
import data from './data.json';
import CountButton from './components/countButton';
import TextField from './components/TextField'
import StopWatch from './components/StopWatch';
import './components/StopWatch.css'
import WindowSize from './components/WindowSize'

function App() {
  return (
    <div className="App">
       <WindowSize />  
    </div>
  );
}

export default App;
