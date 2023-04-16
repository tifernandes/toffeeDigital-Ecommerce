import React from 'react';
import styles from'../styles/components/Footer.module.css';
import Image from 'next/image'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Produtos = () => {
  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <div className={styles.footer}>
          <div className={styles.logo}>
            <Image className={styles.logoImg} src="/logoFooter.png" width={177} height={85}/>
            <div className={styles.socialMedia}>
              <p><WhatsAppIcon /></p>
              <p><FacebookIcon /></p>
              <p><InstagramIcon /></p>
            </div>
          </div>
          <div className={styles.end}>
            <h1>ENDEREÇO</h1>
            <p>Rua Leonídio Porcionato, 58 São Paulo – SP CEP: 03280-040</p>
          </div>
          <div className={styles.telef}>
            <h1>TELEFONE</h1>
            <p>(11) 2717-3954 / (11) 2211-8387 / (11) 97626-4166</p>
          </div>
          <div className={styles.mail}>
            <h1>E-MAIL</h1>
            <p>desenvolvimento.gardini@gmail.com</p>
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