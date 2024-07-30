import React from 'react';
import styles from'../styles/components/Footer.module.css';
import Image from 'next/image'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';

const Produtos = () => {
  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <div className={styles.footer}>
          <div className={styles.logo}>
            <Image alt='logo footer' className={styles.logoImg} src="/logoFooter.png" width={177} height={85}/>
            <div className={styles.socialMedia}>
            <a href="https://wa.me/message/6FZ3YWIMM7XWF1" target="_blank" rel="noopener noreferrer">
              <p><WhatsAppIcon /></p>
            </a>
            <a href="https://www.instagram.com/thekingofboxes_/" target="_blank" rel="noopener noreferrer">
              <p><InstagramIcon /></p>
            </a>
            </div>
          </div>
          <div className={styles.end}>
            <h1>ENDEREÇO</h1>
            <p>Rua Leonídio Porcionato, 58 - São Paulo</p>
            <p>CEP: 03280-040</p>
          </div>
          <div className={styles.telef}>
            <h1>TELEFONE</h1>
            <p>(11) 2717-3954 </p>
          </div>
          <div className={styles.mail}>
            <h1>E-MAIL</h1>
            <p>contato@thekingofboxes.com.br</p>
          </div>
        </div>
        <div className={styles.copy}>
          <p>Developed by devtoffee</p>
        </div>
      </div>
    </div>
  );
};

export default Produtos;