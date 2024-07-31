import React, { useEffect, useState, ChangeEvent } from 'react';
import styles from '../styles/components/Produtos.module.css';
import prds from '../dumDB/produtos';
import Link from 'next/link';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useRouter } from 'next/router';
import { Input } from '@/components/ui/input';
import { AspectRatio } from "@/components/ui/aspect-ratio";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface Product {
  Id: string;
  produto: string;
  categoria: string[];
  imgs?: string[];
}

const Produtos: React.FC = () => {
  const router = useRouter();
  const { i } = router.query; 
  const [productCount, setProductCount] = useState(12);
  const [initialProducts, setInitialProducts] = useState<Product[]>([]);
  const [hasMoreProducts, setHasMoreProducts] = useState(false);

  useEffect(() => {
    const queryId = i || (typeof window !== 'undefined' && window.location.search.split('=')[1]);
    let newPrds: Product[];

    if (queryId != null) {
      newPrds = prds.filter((product: Product) => product.categoria.includes(queryId as string));
    } else {
      newPrds = prds;
    }

    setInitialProducts(newPrds.slice(0, productCount));
    setHasMoreProducts(newPrds.length > productCount);
  }, [i, productCount]);

  const filterProducts = (event: ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value?.toLowerCase() || '';

    if (query === '') {
      setHasMoreProducts(true);
      setInitialProducts(prds.slice(0, productCount));
      return;
    }

    const filtered = prds.filter((product: Product) =>
      product.Id?.toLowerCase().includes(query) || product.produto?.toLowerCase().includes(query)
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
      <div className="w-full mb-8 flex items-center justify-center">
        <Input className="w-[90%] sm:w-full" placeholder="Pesquise pelo nome ou código do produto" onChangeCapture={filterProducts} />
      </div>
      <div className={styles.produtos}>
        {initialProducts.map((prd) => (
          <Link key={prd.Id} href={'/produto?i=' + prd.Id}>
            <Card className='max-h-[500px] h-full'>
              <CardHeader>
                <CardTitle>{prd.produto}</CardTitle>
                <CardDescription>{prd.categoria.map((i) => {
                  return(
                    <>{i} </>
                  )
                })}</CardDescription>
              </CardHeader>
              <CardContent>
              <div className="w-full relative">
                <AspectRatio ratio={2 / 2}>
                  {prd.imgs && 
                    <LazyLoadImage
                      effect="blur"
                      className="w-full h-full object-cover absolute top-0 left-0"
                      src={'/produtos/' + prd.Id + '/' + prd.imgs[0]}
                      width={'100%'}
                      height={'100%'}
                    />
                  }
                </AspectRatio>
                <p className='text-slate-400 text-sm'>{prd.Id}</p>
                </div>
              </CardContent>
            </Card>
            {/* <div className={styles.produto}>
              <div className={styles.prdImg}>
                {prd.imgs && 
                  <LazyLoadImage
                    effect="blur"
                    className={styles.logoImg}
                    src={'/produtos/' + prd.Id + '/' + prd.imgs[0]}
                    width={'100%'}
                    height={'100%'}
                  />
                }
              </div>
              <div className={styles.prdDesc}>
                <h3>{prd.produto}</h3>
                <p>{prd.Id}</p>
              </div>
            </div> */}
          </Link>
        ))}
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
