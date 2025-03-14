import React from 'react';
import Image from 'next/image';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import { IconButton } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Social Media */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <div className="relative">
              <Image
                alt='logo footer'
                src="/logoFooter.png"
                width={177}
                height={85}
                className="brightness-100 contrast-100"
              />
            </div>
            <div className="flex space-x-4">
              <IconButton
                href="https://wa.me/message/6FZ3YWIMM7XWF1"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: 'white',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  },
                }}
              >
                <WhatsAppIcon />
              </IconButton>
              <IconButton
                href="https://www.instagram.com/thekingofboxes_/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: 'white',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  },
                }}
              >
                <InstagramIcon />
              </IconButton>
            </div>
          </div>

          {/* Address */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h2 className="text-lg font-semibold flex items-center justify-center md:justify-start w-full text-white">
              <LocationOnIcon className="mr-2" />
              ENDEREÇO
            </h2>
            <div className="text-gray-300 text-center md:text-left">
              <p>Rua Leonídio Porcionato, 58 - São Paulo</p>
              <p>CEP: 03280-040</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h2 className="text-lg font-semibold flex items-center justify-center md:justify-start w-full text-white">
              <PhoneIcon className="mr-2" />
              TELEFONE
            </h2>
            <p className="text-gray-300">
              <a 
                href="tel:+551127173954" 
                className="hover:text-white transition-colors"
              >
                (11) 2717-3954
              </a>
            </p>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h2 className="text-lg font-semibold flex items-center justify-center md:justify-start w-full text-white">
              <EmailIcon className="mr-2" />
              E-MAIL
            </h2>
            <p className="text-gray-300">
              <a 
                href="mailto:contato@thekingofboxes.com.br"
                className="hover:text-white transition-colors"
              >
                contato@thekingofboxes.com.br
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-blue-800">
        <div className="container mx-auto px-4 py-4">
          <p className="text-center text-sm text-gray-400 hover:text-white transition-colors">
            <a 
              href="https://www.linkedin.com/in/tiago-fernandes-dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Developed by devtoffee
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;