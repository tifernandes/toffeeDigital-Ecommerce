import React from 'react';
import styles from '../styles/contato.module.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { IMaskInput } from 'react-imask';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
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
          Bairro Parque Tomas Saraiva<br/>
          São Paulo – SP CEP: 03280-040<br/>
          E-mail: contato@thekingofboxes.com.br<br/>
          WhatsApp: (11) 2717-3954 <br/>
          Horário de Funcionamento:<br/>
          -De segunda-feira a quinta-feira 07:00-17:00<br/>
          -De sexta-feira 07:00-16:00</p>
          <br/>
          <br/>
          <h1>SOCIAL</h1>
          <br/>
          <div className={styles.socialMedia}>
          <a href="https://wa.me/message/6FZ3YWIMM7XWF1" target="_blank" rel="noopener noreferrer">
            <p><WhatsAppIcon /></p>
          </a>
          <a href="https://www.instagram.com/thekingofboxes_/" target="_blank" rel="noopener noreferrer">
            <p><InstagramIcon /></p>
          </a>
          </div>
        </div>
        {/* <div className={styles.formulario}>
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
        </div> */}
      </div>
      <div className={styles.maps}>
        <iframe loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.5734045801246!2d-46.543407125294856!3d-23.583760062414353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5da499b22fad%3A0x8ffdc054e8c7f334!2sR.%20Leon%C3%ADdio%20Porcionato%2C%2058%20-%20Parque%20Tomas%20Saraiva%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003280-040%2C%20Brasil!5e0!3m2!1spt-BR!2sus!4v1682179051267!5m2!1spt-BR!2sus" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
      </div>
    </div>
  );
};

export default Contato;