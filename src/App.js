import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/***** COMPONENTS *****/
import Home from './routes/Home';
import Movie from './routes/Movie';
import Contact from './routes/Contact';
import Header from './components/Header';

/***** SWIPER *****/
import 'swiper/swiper.scss';
import "swiper/components/pagination/pagination.scss"
import "swiper/components/navigation/navigation.scss"

/***** STYLES *****/
import './styles/styles.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={ Home }/>
          <Route exact path="/movie" component={ Movie }/>
          <Route exact path="/contact" component={ Contact }/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
