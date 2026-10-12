import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import {
  BadgeCheck,
  Handshake,
  FileText,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTA_REVENDA, WHATSAPP_URL, CATALOGO_URL } from "@/lib/site";
import { trackLeadConversion } from "@/lib/gtag";

// TODO(TKB): grid de logos + nomes dos parceiros. O cliente ainda não enviou.
// Preencher este array (name, logo e url opcional). O grid se ajusta sozinho.
type Partner = { name: string; logo: string; url?: string };

const partners: Partner[] = [
  { name: "Parceiro 1", logo: "" },
  { name: "Parceiro 2", logo: "" },
  { name: "Parceiro 3", logo: "" },
  { name: "Parceiro 4", logo: "" },
];

const presencaNacional = [
  "Fabricação própria",
  "Mais de 43 anos de experiência",
  "Produtos desenvolvidos para o mercado de TCG e colecionáveis",
  "Atendimento especializado para empresas",
  "Distribuição para todo o Brasil",
];

const beneficios = [
  "Produtos de fabricação própria",
  "Lançamentos constantes",
  "Qualidade reconhecida pelo mercado",
  "Atendimento especializado",
  "Condições comerciais para atacado",
  "Suporte para parceiros",
];

const CheckList = ({ items }: { items: string[] }) => (
  <ul className="space-y-3">
    {items.map((item, index) => (
      <li key={index} className="flex items-center">
        <BadgeCheck className="h-6 w-6 text-yellow-400 mr-3 flex-shrink-0" />
        <span className="text-gray-700">{item}</span>
      </li>
    ))}
  </ul>
);

const Parceiros = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Head>
        <title>Parceiros | The King of Boxes - Rede de Revendedores</title>
        <meta name="description" content="Conheça a rede de revendedores autorizados The King of Boxes. Produtos originais para TCG e colecionáveis em todo o Brasil e condições para novos parceiros." />
        <meta name="keywords" content="parceiros, revendedores, distribuidores, rede, The King of Boxes, TCG, colecionáveis" />
        <meta property="og:title" content="Parceiros | The King of Boxes" />
        <meta property="og:description" content="Rede de revendedores autorizados The King of Boxes em todo o Brasil." />
      </Head>

      {/* Hero Section — H1 centralizado */}
      <section className="relative min-h-[45vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-700/90 z-10" />
        <div className="container mx-auto px-4 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Rede de{" "}
              <span className="text-yellow-400">Revendedores Autorizados</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow">
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto space-y-8"
            >
              {/* Onde Encontrar */}
              <div className="bg-gray-50 p-8 rounded-2xl space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-blue-900">
                  Onde Encontrar os Produtos The King of Boxes
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  A The King of Boxes está presente em diversas regiões do Brasil
                  por meio de uma rede de lojistas, distribuidores e revendedores
                  especializados no mercado de TCG e colecionáveis.
                </p>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Temos orgulho de construir parcerias sólidas com empresas que
                  compartilham do nosso compromisso com qualidade, atendimento e
                  desenvolvimento do mercado de colecionáveis.
                </p>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Ao escolher um revendedor autorizado, você tem a garantia de
                  adquirir produtos originais The King of Boxes, desenvolvidos com
                  fabricação própria, controle de qualidade rigoroso e mais de 43
                  anos de experiência no segmento de transformação de plásticos.
                </p>
              </div>

              {/* Nossos Parceiros Comerciais + grid */}
              <div className="bg-gray-50 p-8 rounded-2xl space-y-6">
                <h3 className="text-2xl font-bold text-blue-900">
                  Nossos Parceiros Comerciais
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Nossa rede de parceiros é formada por lojas físicas, e-commerce,
                  distribuidores e revendedores que levam os produtos The King of
                  Boxes para colecionadores de todo o Brasil.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Abaixo você encontrará algumas das empresas que confiam em nossa
                  marca e comercializam nossos produtos.
                </p>

                {/* TODO(TKB): substituir placeholders pelos logos/nomes reais dos parceiros */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {partners.map((partner, index) => {
                    const card = (
                      <div className="flex h-28 w-full items-center justify-center rounded-xl border border-dashed border-gray-300 bg-white p-4 transition-shadow hover:shadow-md">
                        {partner.logo ? (
                          <Image
                            src={partner.logo}
                            alt={partner.name}
                            width={140}
                            height={70}
                            className="max-h-16 w-auto object-contain"
                          />
                        ) : (
                          <span className="text-center text-sm font-medium text-gray-400">
                            {partner.name}
                          </span>
                        )}
                      </div>
                    );

                    return partner.url ? (
                      <a
                        key={index}
                        href={partner.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {card}
                      </a>
                    ) : (
                      <div key={index}>{card}</div>
                    );
                  })}
                </div>
              </div>

              {/* Presença Nacional */}
              <div className="bg-gray-50 p-8 rounded-2xl space-y-4">
                <h3 className="text-2xl font-bold text-blue-900">
                  Presença Nacional
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  A cada ano ampliamos nossa rede de parceiros comerciais,
                  fortalecendo a presença da marca The King of Boxes em todo o
                  território nacional.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Esse crescimento é resultado do nosso compromisso com a
                  qualidade dos produtos, inovação constante e relacionamento
                  transparente com nossos parceiros.
                </p>
                <CheckList items={presencaNacional} />
              </div>

              {/* Quer se Tornar um Revendedor */}
              <div className="bg-gray-50 p-8 rounded-2xl space-y-4">
                <h3 className="text-2xl font-bold text-blue-900">
                  Quer se Tornar um Revendedor?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  A The King of Boxes está sempre em busca de novos parceiros
                  comerciais que desejam ampliar seu portfólio com produtos de
                  alta qualidade e excelente aceitação no mercado de colecionáveis.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Se você possui uma loja física, e-commerce, distribuidora ou atua
                  como revendedor, entre em contato com nossa equipe e conheça as
                  vantagens de fazer parte da nossa rede de parceiros.
                </p>
              </div>

              {/* Benefícios para Revendedores */}
              <div className="bg-gray-50 p-8 rounded-2xl space-y-4">
                <h3 className="text-2xl font-bold text-blue-900">
                  Benefícios para Revendedores
                </h3>
                <CheckList items={beneficios} />
              </div>

              {/* Faça Parte da Nossa Rede */}
              <div className="bg-gray-50 p-8 rounded-2xl space-y-4">
                <h3 className="text-2xl font-bold text-blue-900">
                  Faça Parte da Nossa Rede
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Junte-se às empresas que já confiam na The King of Boxes e
                  ofereça aos seus clientes produtos que unem qualidade, inovação e
                  excelente aceitação no mercado de colecionáveis.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Entre em contato com nossa equipe e descubra como podemos
                  contribuir para o crescimento do seu negócio.
                </p>
              </div>

              {/* CTAs finais */}
              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 pt-4">
                <a href={CATALOGO_URL} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-blue-900 hover:bg-blue-800 text-base sm:text-lg px-6 py-6"
                  >
                    <FileText className="mr-2 h-5 w-5" />
                    Baixe o Catálogo
                  </Button>
                </a>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackLeadConversion()}
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto border-2 border-blue-900 text-blue-900 hover:bg-blue-50 text-base sm:text-lg px-6 py-6"
                  >
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Fale Conosco
                  </Button>
                </a>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackLeadConversion()}
                >
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-yellow-400 text-blue-900 hover:bg-yellow-300 text-base sm:text-lg px-6 py-6 font-bold"
                  >
                    <Handshake className="mr-2 h-5 w-5" />
                    {CTA_REVENDA}
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Parceiros;
