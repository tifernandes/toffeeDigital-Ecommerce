import React from 'react';
import styles from '../styles/index.module.css';
import Image from 'next/image';
import Produtos from '../components/Produtos';
import Head from 'next/head'

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
          <title>The King of Boxes - Início</title>
      </Head>
      <div className={styles.slide}>
        <div className={styles.slide1}></div>
        {/* <Image className={styles.logoImg} src="/slide2.jpg" fill/> */}
      </div>
      <div className={styles.subContainer}>
        <div className={styles.categorias}>
          <div className={styles.ctHeader}>
            <h2>LINHA DE PRODUTOS</h2>
          </div>
          <div className={styles.cts}>
            <div>
              <Image className={styles.logoImg} src="/acessorios.png" width={328} height={314}/>
            </div>
            <div>
              <Image className={styles.logoImg} src="/expositores.png" width={328} height={314}/>
            </div>
            <div>
              <Image className={styles.logoImg} src="/organizacao.png" width={328} height={314}/>
            </div>
          </div>
        </div>
        <Produtos />
      </div>
    </div>
  );
};

export default Home;