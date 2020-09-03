import React from 'react';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import useInitialState from '../hooks/useInitialState';

import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initalState';

const Home = () => {
  const initialState = useInitialState(API);

  const keys = Object.keys(initialState);

  return initialState.length === 0 ? (
    <h1>Loading...</h1>
  ) : (
    <>
      <Search />

      {keys.map((key, index) => {
        return (
          initialState[key].length > 0 && (
            // eslint-disable-next-line react/no-array-index-key
            <Categories key={index} title={key}>
              <Carousel>
                {initialState[key].map((item) => (
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

export default Home;
