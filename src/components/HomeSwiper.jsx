import datas from '../moviesDatas';

import { BrowserRouter as Router, Link } from 'react-router-dom';

/***** COMPONENTS *****/
import Titles from '../components/Titles';

/***** SWIPER *****/
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';

SwiperCore.use([ Navigation, Pagination ]);

const HomeSwiper = () =>  {
  return (
    <Swiper pagination={ true } navigation={ true }>
      { datas.map(( data ) => {       
        return (
          <SwiperSlide id={ data.id } key={ data.id } >
            <video autoPlay="autoplay" loop="loop" className="movieVideo">
              <source src={ data.homeVideoUrl } type="video/mp4"/>
            </video>
            <Router>
              <Link to="/movie:id" className="movieLink">
                <Titles title={ data.homeTitle } titleSubtitle={ data.homeTitleSubtitle } subtitle={ data.homeSubtitle}/>
              </Link>
            </Router>
          </SwiperSlide>
        ) 
      }) }
    </Swiper>
  ); 
}

export default HomeSwiper;