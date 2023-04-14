import React from 'react';
import styles from'../styles/components/Produtos.module.css';
import Image from 'next/image'

const Produtos = () => {
  return (
    <div className={styles.container}>
      <div className={styles.produtosTitle}>
        <h2>PRODUTOS</h2>
      </div>
      <div className={styles.produtos}>
        <div className={styles.produto}>
          <div className={styles.prdImg}>
            <Image className={styles.logoImg} src="/produtos/TKB-0003.png" width={244} height={244}/>
          </div>
          <div className={styles.prdDesc}>
            <h3>Nome produto</h3>
            <p>Ref.: TKB-12345</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Produtos;