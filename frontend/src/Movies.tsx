import { useState } from 'react';
import data from './MovieData.json';

// Create a variable with the JSON data
const md = data.MovieData;

function MovieList() {
  // make the Variable into a state but since we aren't creating a new one yet, the set isn't being used yet
  const [listOfMovies, setListOfMovies] = useState(md);

  //const addMovie = () => {
  //  setListOfMovies([...md]);
  //};

  // Return the HTML by mapping through the JSON file into a table
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
