import data from './MovieDataSample.json';

const mds = data.MovieDataSample;

function MovieList() {
  return (
    <>
      <div>
        <h3>Movie Listing</h3>
        <table></table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Year</th>
            <th>Director</th>
          </tr>
        </thead>
        <tbody>
          {mds.map((m) => (
            <tr>
              <td>{m.Title}</td>
              <td>{m.Year}</td>
              <td>{m.Director}</td>
            </tr>
          ))}
        </tbody>
      </div>
    </>
  );
}

export default MovieList;
