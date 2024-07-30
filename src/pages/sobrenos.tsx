import React from 'react';
import styles from '../styles/sobrenos.module.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { IMaskInput } from 'react-imask';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Head from 'next/head'
import Image from 'next/image';
import sobrenosBanner from '../public/sobrenosBanner.svg'
import sobrenosBannerMB from '../public/sobrenosBannerMB.svg'

const SobreNos = () => {
  return (
    <div className={styles.container}>
      <Head>
          <title>The King of Boxes - Sobre Nós</title>
      </Head>
      <div className={styles.bannerContainer}>
        <Image className={styles.banner} src={sobrenosBanner} quality={100}/>
        <Image className={styles.bannerMB} src={sobrenosBannerMB} quality={100}/>
      </div>
      <div className={styles.subContainer}>
        <div className={styles.infoContato}>
          <h1>A <strong>The King of Boxes</strong> é uma empresa 100% nacional fabricante e especializada em expositores para colecionáveis e caixas para organização.</h1>

          <p>Nós produzimos produtos para colecionadores exigentes. Tais produtos são cuidadosamente projetados e fabricados, além de serem feitos com materiais de altíssima qualidade.</p>

          <p>Temos nossa própria ferramentaria e injeção de plásticos para a fabricação dos nossos produtos, onde podemos acompanhar cada passo desde a produção até a sua entrega. Contamos com mais de 40 anos de Know-How nestes seguimentos.</p>

          <p>Nossos produtos são:</p>

          <ul>
              <li>Expositores/cases para Action Figures</li>
              <li>Expositores/cases para Funko pop</li>
              <li>Expositores/cases para miniaturas de carros escala 1:64</li>
              <li>Expositores/cases para miniaturas de carros escala 1:43</li>
              <li>Expositores/cases para miniaturas de carros escala 1:32</li>
              <li>Expositores/cases para miniaturas de carros escala 1:24</li>
              <li>Expositores/cases para miniaturas de carros escala 1:18</li>
              <li>Expositores/cases para Dioramas e cenários</li>
              <li>Acessórios para dioramas;</li>
              <li>Maletas para o colecionismo e organização</li>
              <li>Caixas plásticas</li>
              <li>Entre outros</li>
          </ul>

          <p>Nosso objetivo é agregar no mundo do colecionismo e fazer com que o mesmo cresça cada vez mais.</p>

          <p>Estamos abertos para novas parcerias. Nós trabalhamos somente com vendas no atacado.</p>

          <p>Visite também:</p>

          <p>Instagram: <a href="https://www.instagram.com/thekingofboxes_">@thekingofboxes_</a></p>

          <p>Continue nos acompanhando para saber sempre das novidades, novos produtos, parcerias e mais.</p>

          <p>Mantenha as suas coleções sempre organizadas e protegidas com a <strong>The King of Boxes</strong>.</p>

          <p><strong>De colecionador para colecionador!</strong></p>

          <p><strong>Missão:</strong> Executar nossos serviços com excelência, de forma a atender as expectativas e gerando satisfação dos nossos clientes.</p>

          <p><strong>Visão:</strong> Ser referência em qualidade e comprometimento para nossos clientes e fornecedores.</p>

          <p><strong>Valores:</strong></p>

          <ul>
              <li>Respeito às pessoas;</li>
              <li>Confiança e qualidade no serviço prestado;</li>
              <li>Integridade comercial</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SobreNos;