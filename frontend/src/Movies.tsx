import { useState } from 'react';
import data from './MovieData.json';

const md = data.MovieData;

function MovieList() {
  const [listOfMovies, setListOfMovies] = useState(md);

  //const addMovie = () => {
  //  setListOfMovies([...md]);
  //};

  return (
    <>
      <div className="container mt-5">
        <h1>Movie Collection</h1>
        <table className="table table-dark table-bordered pt-5">
          <thead>
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Category</th>
              <th>Edited</th>
            </tr>
          </thead>
          <tbody>
            {listOfMovies.map((m) => (
              <tr>
                <td>{m.Title}</td>
                <td>{m.Year}</td>
                <td>{m.Director}</td>
                <td>{m.Rating}</td>
                <td>{m.Category}</td>
                <td>{m.Edited}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default MovieList;
