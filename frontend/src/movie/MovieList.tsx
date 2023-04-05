import { useEffect, useState } from 'react';
import { Movie } from '../types/movie';

function MovieList() {
  // make the Variable into a state
  const [listOfMovies, setListOfMovies] = useState<Movie[]>([]);

  // Use Effect makes it so it doesn't keep pulling from the API
  useEffect(() => {
    // This will fetch the data from the API
    const fetchMovie = async () => {
      const rsp = await fetch('https://localhost:4000/movie');
      const temp = await rsp.json();
      setListOfMovies(temp);
    };
    fetchMovie();
  }, []);

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
              <th>Lent To</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {listOfMovies.map((m) => (
              <tr key={m.movieID}>
                <td>{m.title}</td>
                <td>{m.year}</td>
                <td>{m.director}</td>
                <td>{m.rating}</td>
                <td>{m.category}</td>
                <td>{m.edited}</td>
                <td>{m.lentTo}</td>
                <td>{m.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default MovieList;
