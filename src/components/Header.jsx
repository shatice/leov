/***** COMPONENTS *****/
import Titles from './Titles';
import Nav from './Nav';

const Header = () =>  {
  return (
    <header className="header">
      <Titles headerTitle title='Leonie Violain' subtitle='Director' />
      <Nav />
    </header>
  ); 
}

export default Header;