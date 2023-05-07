import logo from './logo.svg';
import './App.css';

import DoubbleButton from './components/DoubbleButton';
import ReactStars from './components/ReactStars';
import data from './data.json';

function App() {
  console.log(data);
  return (
    <div className="App">
      <ReactStars totalStars={5} />
    </div>
  );
}

export default App;
