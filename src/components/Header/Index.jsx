import React from 'react';
import TopStrip from './TopStrip';
import MainHeader from './MainHeader';
import Navigation from './Navigation';

const Header = () => {
  return (
    <>
        <TopStrip/>
        <MainHeader/>
        <Navigation/>
    </>
  );
};

export default Header;