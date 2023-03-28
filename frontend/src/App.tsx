//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Podcast from './Podcast';
import MovieList from './Movies';
import Home from './Home';
import Navigation from './Navigation';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation></Navigation>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/podcast" Component={Podcast} />
          <Route path="/movieList" Component={MovieList} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
