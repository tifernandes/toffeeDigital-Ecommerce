import React, { useEffect, useState } from 'react';
import styles from '../styles/produto.module.css';
import Head from 'next/head'
import { useRouter } from 'next/router';
import produtos from '../dumDB/produtos'
import Button from '@mui/material/Button';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import ButtonGroup from '@mui/material/ButtonGroup';
import Link from 'next/link'

const Produto = () => {

  const router = useRouter();
  const { i } = router.query; 
  const queryId = i || (typeof window !== 'undefined' && window.location.search.split('=')[1]);
  const [produto, setProdutos] = useState([]);
  const [produtoMedidas, setProdutosMedidas] = useState([]);
  const [produtoCores, setProdutosCores] = useState([]);
  const wppPrdUrl = `https://api.whatsapp.com/send/?phone=551127173954&text=Olá, Gostaria de falar com um atendente para tirar dúvidas sobre o produto: ${produto.produto}, Ref.: ${produto.Id}.`;

  useEffect(() => {
    setProdutos(produtos.filter((item) => item.Id == queryId)[0]); 
    medidasHandler(produtos.filter((item) => item.Id == queryId)[0].medidas);
    coresHandler(produtos.filter((item) => item.Id == queryId)[0].cores);
  }, [queryId])

  const coresHandler = (cores) => {
    let coresPrd = Array.isArray(cores) ? `${cores.join(', ')}` : cores
    setProdutosCores(coresPrd);
  }

  const medidasHandler = (prdMedidas) => {
    console.log('ti')
    console.log(prdMedidas)
    console.log(typeof prdMedidas === 'object')
    console.log(Array.isArray(prdMedidas))
    if(typeof prdMedidas === 'object' && !Array.isArray(prdMedidas)) {
      console.log('É obj sem array')
      prdMedidas = objectToString(prdMedidas);
      setProdutosMedidas(prdMedidas);
    }else if(Array.isArray(prdMedidas)){
      console.log('É array')
      prdMedidas = arrayToString(prdMedidas);
      setProdutosMedidas(prdMedidas);
    }else{
      setProdutosMedidas(prdMedidas);
    }
  }

  function objectToString(obj) {
    let result = '';
    for (const key in obj) {
      if (Object.hasOwnProperty.call(obj, key)) {
        const value = obj[key];
        if (typeof value === 'object') {
          result += ` ${key}: ${objectToString(value)}. `;
        } else {
          result += `${key}: ${value}, `;
        }
      }
    }
    return result.slice(0, -2);
  }

  function arrayToString(array) {
    let medidasString = '';
    for (const medida of array) {
      for (const key in medida) {
        if (Object.hasOwnProperty.call(medida, key)) {
          medidasString += ` ${key}: ${medida[key]},\n`;
        }
      }
    }

    return medidasString.slice(0, -2);
  }

  return (
    <div className={styles.container}>
      <Head>
          <title>The King of Boxes - {produto.produto}</title>
      </Head>
      <div className={styles.imgPrd}>
        {produto.imgs && 
          <LazyLoadImage
          wrapperClassName={styles.centerImg}
          className={styles.logoImg} 
          effect="blur"
          src={'/produtos/' + produto.Id + '/' + produto.imgs[0]} 
          width={'100%'}
          height={'100%'}/>
        }
      </div>
      <div className={styles.descPrd}>
        <div className={styles.infPrd}>
          <h1>{produto.produto}</h1>
          <p>Ref.: {produto.Id}</p>
          <p>{produto.descricao}</p>

          <br />

          <h3>Cores</h3>
          <p>{produtoCores}</p>

          <br />

          <h3>Medidas</h3>
          <p>{produtoMedidas}</p>

          <br />
          {produto.variacao && 
          <>
            <h3>Variação</h3>
            <ButtonGroup variant="outlined" aria-label="outlined button group" style={{margin: '5px'}}>
              {produto.variacao.map(v => {
                return (
                  <Link href={'/produto?i=' + v} key={v} style={{marginRight: '5px'}}>
                      <Button>{v}</Button>
                  </Link>
              )})}
            </ButtonGroup>
          </>
          }
          <div className={styles.divsorPrd}></div>
        </div>
        <div className={styles.contactPrd}>
          <h1>ENTRE EM CONTATO CONOSCO</h1>
          <div className={styles.btsPrd}>
          <a href={wppPrdUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="contained" startIcon={<WhatsAppIcon />}>
              Whatsapp
            </Button>
          </a>
          <a href="mailto:contato@thekingofboxes.com.br" target="_blank" rel="noopener noreferrer">
            <Button variant="contained" startIcon={<EmailIcon />}>
              E-Mail
            </Button>
          </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Produto;