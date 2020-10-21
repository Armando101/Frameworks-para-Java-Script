import React from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';

import '../assets/styles/App.scss';

const Home = ({ myList, trends, originals }) => {
  return (
    <>
      <Search />

      {myList.map((key, index) => {
        return (
          myList.length > 0 && (
            // eslint-disable-next-line react/no-array-index-key
            <Categories key={index} title={key}>
              <Carousel>
                {myList.map((item) => (
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  <CarouselItem key={item.id} {...item} />
                ))}
              </Carousel>
            </Categories>
          )
        );
      })}
    </>
  );
};

// export default Home;
// export default connect(props, actions)(Home);
const mapStateToProps = (state) => {
  return {
    myLsit: state.myLsit,
    trends: state.trends,
    originals: state.originals,
  };
};
export default connect(mapStateToProps, null)(Home);
