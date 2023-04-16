import React from 'react';
import styles from '../styles/contato.module.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { IMaskInput } from 'react-imask';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Head from 'next/head'

const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="(00) 00000-0000"
      definitions={{
        '#': /[1-9]/,
      }}
    />
  );
});

const Contato = () => {
  return (
    <div className={styles.container}>
      <Head>
          <title>The King of Boxes - Contato</title>
      </Head>
      <div className={styles.infoContato}>
        <div className={styles.local}>
          <h1>ONDE ESTAMOS</h1>
          <br/>
          <p>Escritório: Rua Leonídio Porcionato, 58<br/>
          São Paulo – SP CEP: 03280-040<br/>
          Fábrica: Rua Herwis, 407 – Vila Ema<br/>
          São Paulo – SP CEP: 03279-000<br/>
          E-mail: desenvolvimento.gardini@gmail.com<br/>
          Telefone: (11) 2717-3954 / (11) 2211-8387<br/>
          WhatsApp: (11) 97626-4166<br/>
          Horário de Funcionamento:<br/>
          segunda a quinta das 7:00 às 17:00sexta das 7:00 às 16:00</p>
          <br/>
          <br/>
          <h1>SOCIAL</h1>
          <br/>
          <div className={styles.socialMedia}>
            <p><WhatsAppIcon /></p>
            <p><FacebookIcon /></p>
            <p><InstagramIcon /></p>
          </div>
        </div>
        <div className={styles.formulario}>
          <h1>CONTATO</h1>
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { mt: 1, mb: 1, width: '100%' },
            }}
            noValidate
            autoComplete="off"
          >
            <div className={styles.fieldsForm}>
              <TextField label="Nome" id="outlined-size-normal" />
              <TextField label="E-Mail" id="outlined-size-normal" />
              <TextField
                label="Celular"
                name="textmask"
                id="formatted-text-mask-input"
                InputProps={{
                  inputComponent: TextMaskCustom,
                }}
              />
              <TextField
                id="outlined-multiline-static"
                label="Mensagem"
                multiline
                rows={4}
              />
              <Button variant="contained" endIcon={<SendIcon />}>
                Enviar
              </Button>
            </div>
          </Box>
        </div>
      </div>
      <div className={styles.maps}>
        <iframe loading="lazy" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14626.331860631772!2d-46.5413586!3d-23.5834169!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb682e32d34fc7fbb!2sFerramentaria+Gardini+Ltda!5e0!3m2!1spt-BR!2sbr!4v1523538974505" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
      </div>
    </div>
  );
};

export default Contato;