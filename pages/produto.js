import React, { useEffect, useState } from 'react';
import styles from '../styles/produto.module.css';
import Image from 'next/image'
import Head from 'next/head'
import { useRouter } from 'next/router';
import produtos from '../dumDB/produtos'
import Button from '@mui/material/Button';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';

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
        {produto.imgs && 
          <Image 
          className={styles.logoImg} 
          src={'/produtos/' + produto.Id + '/' + produto.imgs[0]} 
          layout='responsive'
          width={1000}
          height={1000}/>
        }
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
          <a href="https://api.whatsapp.com/send/?phone=5511955813703&text=" target="_blank" rel="noopener noreferrer">
            <Button variant="contained" startIcon={<WhatsAppIcon />}>
              Whatsapp
            </Button>
          </a>
          <a href="mailto:atendimento@plastifesta.com.br" target="_blank" rel="noopener noreferrer">
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