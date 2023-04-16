import React from 'react';
import styles from '../styles/produto.module.css';
import Image from 'next/image'
import Head from 'next/head'

const Produto = () => {
  return (
    <div className={styles.container}>
      <Head>
          <title>The King of Boxes - Produto</title>
      </Head>
      <div className={styles.imgPrd}>
        <Image className={styles.logoImg} src="/produtos/TKB-0003.png" fill/>
      </div>
      <div className={styles.descPrd}>
        <div className={styles.infPrd}>
          <h1>Nome Produto</h1>
          <p>Ref.: TKB-12345</p>
          <div className={styles.divsorPrd}></div>
        </div>
        <div className={styles.contactPrd}>
          <h1>ENTRE EM CONTATO CONOSCO</h1>
          <div className={styles.btsPrd}>
            <button>WhatsApp</button>
            <button>E-Mail</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Produto;