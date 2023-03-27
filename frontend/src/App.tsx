import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import TopBanner from './Podcast';
import MovieList from './Movies';

function GoButton() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <label>{count}</label>
      <button onClick={() => setCount(count + 1)} type="button">
        GO Button
      </button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopBanner saying="oneName"></TopBanner>
        <MovieList></MovieList>
      </header>
    </div>
  );
}

export default App;
