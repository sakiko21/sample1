import logo from './logo.svg';
import './App.css';

import DoubbleButton from './components/DoubbleButton';
import ReactStars from './components/ReactStars';
import data from './data.json';

function App() {
  console.log(data);
  return (

    <div className="App">
      <h1>書評</h1>
      <div className="book-list">
        {data.map(book => (
        <div className="book-item" key={book.id}>
          <h3>{book.name}</h3>
          <ReactStars totalStars={5} count={book.evaluation}/>
        </div>
        ))};
      </div>
    </div>
  );
}

export default App;
