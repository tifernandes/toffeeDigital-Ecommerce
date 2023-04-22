import React, { useState } from 'react';
import styles from'../styles/components/Produtos.module.css';
import Image from 'next/image'
import produtos from '../dumDB/produtos'
import Link from 'next/link'
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

const Produtos = () => {

  const [productCount, setProductCount] = useState(8);

  const initialProducts = produtos.slice(0, productCount);
  const hasMoreProducts = produtos.length > productCount;
  
  return (
    <div className={styles.container}>
      <a className={styles.catalogo} href="https://drive.google.com/file/d/1usl_YdWWDoGmcJ_VSChIYE8RSkM5iXQW/view?usp=sharing" target="_blank" rel="noopener noreferrer">
        <Alert severity="info">Conheça nosso catálogo digital. Clique aqui!</Alert>
      </a>
      <div className={styles.produtosTitle}>
        <h2>PRODUTOS</h2>
      </div>
      <div className={styles.produtos}>
        {initialProducts.map((prd) => {
          return (
            <Link href={'/produto?i=' + prd.Id}>
              <div className={styles.produto}>
                <div className={styles.prdImg}>
                  {prd.imgs && 
                    <Image 
                    className={styles.logoImg} 
                    src={'/produtos/' + prd.Id + '/' + prd.imgs[0]} 
                    layout='responsive'
                    width={1000}
                    height={1000}/>
                  }
                </div>
                <div className={styles.prdDesc}>
                  <h3>{prd.produto}</h3>
                  <p>{prd.Id}</p>
                </div>
              </div>
            </Link>
        )})}
      </div>
      {hasMoreProducts && (
      <div className={styles.verMais}>
        <Button variant="contained" onClick={() => setProductCount(productCount + 8)}>
          Ver mais
        </Button>
      </div>
      )}
    </div>
  );
};

export default Produtos;