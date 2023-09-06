import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/app.css';
import Head from 'next/head'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <div className="whatsAppFloat">
        <a href="https://wa.me/message/6FZ3YWIMM7XWF1" target="_blank" rel="noopener noreferrer">
          <p><WhatsAppIcon /></p>
        </a>
      </div>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default MyApp;