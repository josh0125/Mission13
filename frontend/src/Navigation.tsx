import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <Link to="/" className="navbar-brand p-3">
        Joel Hilton's Movie Collection
      </Link>
      <div className="" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/podcast">
              My Podcasts
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/movieList">
              Movie Collection
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
