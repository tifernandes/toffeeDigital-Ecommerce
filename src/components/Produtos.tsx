import React, { useEffect, useState } from 'react';
import styles from'../styles/components/Produtos.module.css';
import prds from '../dumDB/produtos'
import Link from 'next/link'
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useRouter } from 'next/router';
import { Input } from "@/components/ui/input"

const Produtos = () => {

  const router = useRouter();
  const { i } = router.query; 
  const [productCount, setProductCount] = useState(8);
  const [initialProducts, setInitialProducts] = useState([]);
  const [hasMoreProducts, setHasMoreProducts] = useState([]);

  useEffect(() => {
    const queryId = i || (typeof window !== 'undefined' && window.location.search.split('=')[1]);
    let newPrds

    if(queryId != null){
      newPrds = prds.filter((i) => i.categoria.includes(queryId));
    }else{
      newPrds = prds;
    }

    console.log(prds)

    setInitialProducts(newPrds.slice(0, productCount));
    setHasMoreProducts(newPrds.length > productCount);
  }, [productCount])

  const filterProducts = (event: ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value?.toLowerCase() || '';
    console.log(query);

    if(query == ''){
      setHasMoreProducts(true);
      setInitialProducts(prds.slice(0, productCount));
      return;
    }

    const filtered = prds.filter((i) =>
      i.Id?.toLowerCase().includes(query) || i.produto?.toLowerCase().includes(query)
    );

    setInitialProducts(filtered);
    setHasMoreProducts(false);
  };
  
  return (
    <div className={styles.container}>
      <a className={styles.catalogo} href="https://drive.google.com/drive/folders/1W8OrQW2SaWFxaayOYQVQmyIWZ33fuV_m" target="_blank" rel="noopener noreferrer">
        <Alert severity="warning">
          Conheça nosso catálogo digital. <strong>Clique Aqui !</strong>
        </Alert>
      </a>
      <div className={styles.produtosTitle}>
        <h2>PRODUTOS</h2>
      </div>
      <div className='w-full mb-8'>
        <Input placeholder="Pesquise pelo nome ou código do produto" onChangeCapture={filterProducts}/>
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