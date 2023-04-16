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
        <Image className={styles.logoImg} src="/slide1.jpg" width={1440} height={448}/>
      </div>
      <div className={styles.categorias}>
        <div className={styles.ctHeader}>
          <h2>LINHA DE PRODUTOS</h2>
        </div>
        <div className={styles.cts}>
          <div>
            <Image className={styles.logoImg} src="/acessorios.png" width={328} height={314}/>
          </div>
          <div>
            <Image className={styles.logoImg} src="/caixas.png" width={328} height={314}/>
          </div>
          <div>
            <Image className={styles.logoImg} src="/expositores.png" width={328} height={314}/>
          </div>
        </div>
      </div>
      <Produtos />
    </div>
  );
};

export default Home;