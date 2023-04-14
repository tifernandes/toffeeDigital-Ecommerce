import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/app.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default MyApp;