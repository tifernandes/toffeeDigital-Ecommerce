import React from 'react';
import styles from '../styles/index.module.css';
import Image from 'next/image';
import Produtos from '../components/Produtos';
import Head from 'next/head'
import Link from 'next/link'

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
          <title>The King of Boxes - Início</title>
      </Head>
      <div className={styles.slide}>
        <div className={styles.slide1}>
          <div className={styles.slideTxt}>
            <h1>Produtos inovadores e de excelente qualidade</h1>
            <h3>Somos uma empresa 100% nacional, fabricante e especializada em expositores para colecionáveis</h3>
          </div>
        </div>
        {/* <Image className={styles.logoImg} src="/slide2.jpg" fill/> */}
      </div>
      <div className={styles.subContainer}>
        <div className={styles.categorias}>
          <div className={styles.ctHeader}>
            <h2>LINHA DE PRODUTOS</h2>
          </div>
          <div className={styles.cts}>
            <Link href={'/produtos?ct=Acessorios'}>
              <Image className={styles.logoImg} src="/acessorios.png" width={328} height={314}/>
            </Link>
            <Link href={'/produtos?ct=Expositor'}>
              <Image className={styles.logoImg} src="/expositores.png" width={328} height={314}/>
            </Link>
            {/* <Link href={'/produtos?ct=organizacao'}>
              <Image className={styles.logoImg} src="/organizacao.png" width={328} height={314}/>
            </Link> */}
          </div>
        </div>
        <Produtos />
      </div>
    </div>
  );
};

export default Home;