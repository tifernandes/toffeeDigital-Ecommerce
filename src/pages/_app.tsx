import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TopBar from '../components/TopBar';
import '../styles/app.css';
import Head from 'next/head';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Script from 'next/script';
import { AppProps } from 'next/app';
import { GA_ADS_ID, GA4_ID, trackLeadConversion } from '@/lib/gtag';
import { WHATSAPP_URL } from '@/lib/site';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>

      {/* Google Tag Manager (mantido — container via env) */}
      <noscript dangerouslySetInnerHTML={{
        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GOOGLE_TAGMANAGER}"
        height="0" width="0" style="display:none;visibility:hidden"></iframe>`
      }}></noscript>

      <Script strategy="afterInteractive" id="gtm" dangerouslySetInnerHTML={{
        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GOOGLE_TAGMANAGER}');`
      }}></Script>

      {/* Google Ads + GA4 (gtag.js) — carregado uma única vez, configurando os dois IDs */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ADS_ID}`}
      />
      <Script id="gtag-config" strategy="afterInteractive" dangerouslySetInnerHTML={{
        __html: `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_ADS_ID}');
        gtag('config', '${GA4_ID}');`
      }}></Script>

      <div className="whatsAppFloat">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackLeadConversion()}
        >
          <p><WhatsAppIcon /></p>
        </a>
      </div>
      <TopBar />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default MyApp;
