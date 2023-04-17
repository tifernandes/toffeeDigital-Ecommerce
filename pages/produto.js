import React, { useEffect, useState } from 'react';
import styles from '../styles/produto.module.css';
import Image from 'next/image'
import Head from 'next/head'
import { useRouter } from 'next/router';
import produtos from '../dumDB/produtos'

const Produto = () => {

  const router = useRouter();
  const { i } = router.query; 
  const queryId = i || (typeof window !== 'undefined' && window.location.search.split('=')[1]);
  const [produto, setProdutos] = useState([]);

  useEffect(() => {
    setProdutos(produtos.filter((item) => item.Id == queryId)[0]); 
  }, [])


  return (
    <div className={styles.container}>
      <Head>
          <title>The King of Boxes - {produto.produto}</title>
      </Head>
      <div className={styles.imgPrd}>
        <Image 
        className={styles.logoImg} 
        src="/produtos/TKB-0003.png" 
        layout='responsive'
        width={1000}
        height={1000}/>
      </div>
      <div className={styles.descPrd}>
        <div className={styles.infPrd}>
          <h1>{produto.produto}</h1>
          <p>Ref.: {produto.Id}</p>
          <p>{produto.descricao}</p>
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