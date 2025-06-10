import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselBanner from '../components/Carousel';
import Header from '../components/Header';
import Menu from '../components/Menu';
import BookBottom from '../components/BookBottom';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className='bg-dark' style={{
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'Ancizar Serif, serif',

    }}>
      <Header onSearch={setSearchTerm} />
      <CarouselBanner />
      <Menu searchTerm={searchTerm} />
      <BookBottom />
    </div>
  );
};

export default Home;