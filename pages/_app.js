import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/app.css';
import Head from 'next/head'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Script from 'next/script'

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>

      <noscript dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GOOGLE_TAGMANAGER}"
      height="0" width="0" style="display:none;visibility:hidden"></iframe>`}}></noscript>

        <Script strategy="afterInteractive" id="gtag" dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GOOGLE_TAGMANAGER}');`
        }}></Script>

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