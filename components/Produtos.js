import React from 'react';
import styles from'../styles/components/Produtos.module.css';
import Image from 'next/image'
import produtos from '../dumDB/produtos'
import Link from 'next/link'

const Produtos = () => {
  
  return (
    <div className={styles.container}>
      <div className={styles.produtosTitle}>
        <h2>PRODUTOS</h2>
      </div>
      <div className={styles.produtos}>
        {produtos.map((prd) => {
          return (
            <Link href={'/produto?i=' + prd.Id}>
              <div className={styles.produto}>
                <div className={styles.prdImg}>
                  <Image className={styles.logoImg} src="/produtos/TKB-0003.png" width={244} height={244}/>
                </div>
                <div className={styles.prdDesc}>
                  <h3>{prd.produto}</h3>
                  <p>{prd.Id}</p>
                </div>
              </div>
            </Link>
        )})}
      </div>
    </div>
  );
};

export default Produtos;