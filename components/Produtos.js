import React, { useState } from 'react';
import styles from'../styles/components/Produtos.module.css';
import produtos from '../dumDB/produtos'
import Link from 'next/link'
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useRouter } from 'next/router';

const Produtos = () => {

  const router = useRouter();
  const { i } = router.query; 
  const queryId = i || (typeof window !== 'undefined' && window.location.search.split('=')[1]);
  console.log('queryId')
  console.log(queryId)

  const [productCount, setProductCount] = useState(8);

  const initialProducts = produtos.slice(0, productCount);
  const hasMoreProducts = produtos.length > productCount;
  
  return (
    <div className={styles.container}>
      <a className={styles.catalogo} href="https://drive.google.com/file/d/1usl_YdWWDoGmcJ_VSChIYE8RSkM5iXQW/view?usp=sharing" target="_blank" rel="noopener noreferrer">
        <Alert severity="warning">
          Conheça nosso catálogo digital. <strong>Clique Aqui !</strong>
        </Alert>
      </a>
      <div className={styles.produtosTitle}>
        <h2>PRODUTOS</h2>
      </div>
      <div className={styles.produtos}>
        {initialProducts.map((prd) => {
          return (
            <Link key={prd.Id} href={'/produto?i=' + prd.Id}>
              <div className={styles.produto}>
                <div className={styles.prdImg}>
                  {prd.imgs && 
                    <LazyLoadImage
                    effect="blur"
                    className={styles.logoImg} 
                    src={'/produtos/' + prd.Id + '/' + prd.imgs[0]} 
                    width={'100%'}
                    height={'100%'}/>
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