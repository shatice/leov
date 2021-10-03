import { BrowserRouter as Router, Link } from 'react-router-dom';

/***** COMPONENTS *****/
import Titles from './Titles';
import Nav from './Nav';

const Header = () =>  {
  return (
    <header className="header">
      <Router>
        <Link to="/">
          <Titles headerTitle title='Leonie Violain' subtitle='Director' />
        </Link>
      </Router>
      <Nav />
    </header>
  ); 
}

export default Header;