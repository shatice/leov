import { BrowserRouter as Router, Link } from 'react-router-dom';

const Nav = () =>  {
  return (
    <nav className="navigation">
      <Router>
        <Link to="/contact">
          <p>Contact</p>
        </Link>
      </Router>
    </nav>
  ); 
}

export default Nav;