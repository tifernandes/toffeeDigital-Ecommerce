import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import { BadgeCheck } from "lucide-react";
import sobrenosBanner from "../../public/sobrenosBanner.svg";
import sobrenosBannerMB from "../../public/sobrenosBannerMB.svg";

const SobreNos = () => {
  const valores = [
    "Respeito às pessoas",
    "Confiança e qualidade no serviço prestado",
    "Integridade comercial",
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Head>
        <title>Sobre Nós | The King of Boxes - Nossa História</title>
        <meta name="description" content="Conheça a The King of Boxes, fabricante de deck boxes, cases, expositores e acessórios para TCG e colecionáveis, com mais de 43 anos de experiência na transformação de plásticos." />
        <meta name="keywords" content="sobre nós, fabricante, deck boxes, cases, expositores, TCG, colecionáveis, The King of Boxes" />
        <meta property="og:title" content="Sobre Nós | The King of Boxes" />
        <meta property="og:description" content="Fabricante de deck boxes, cases e expositores para TCG e colecionáveis, com mais de 43 anos de experiência." />
      </Head>

      {/* Hero Section */}
      <section className="relative min-h-[45vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-700/90 z-10" />
        <div className="container mx-auto px-4 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Sobre a <span className="text-yellow-400">The King of Boxes</span>
            </h1>
            <p className="text-xl opacity-90 leading-relaxed">
              A <strong>The King of Boxes</strong> é fabricante de deck boxes,
              cases, expositores e acessórios para TCG e colecionáveis,
              desenvolvendo soluções premium para empresas que buscam produtos
              com elevado padrão de qualidade, durabilidade e excelente
              acabamento.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Sobre Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="prose prose-lg max-w-4xl mx-auto"
            >
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                A <strong>The King of Boxes</strong> é fabricante de deck boxes,
                cases, expositores e acessórios para TCG e colecionáveis,
                desenvolvendo soluções premium para empresas que buscam produtos
                com elevado padrão de qualidade, durabilidade e excelente
                acabamento.
              </p>

              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Todos os nossos produtos são cuidadosamente projetados e
                produzidos com matérias-primas selecionadas, garantindo proteção,
                organização e valorização das coleções.
              </p>

              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Contamos com estrutura própria de ferramentaria e injeção
                plástica, o que nos permite controlar todo o processo produtivo,
                desde o desenvolvimento até a entrega final. Essa autonomia
                garante rigoroso controle de qualidade, maior agilidade na
                produção e constante inovação.
              </p>

              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Com mais de 43 anos de experiência no segmento de transformação
                de plásticos, reunimos conhecimento técnico e expertise para
                oferecer soluções confiáveis e competitivas ao mercado de
                colecionáveis.
              </p>

              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Nosso propósito é contribuir para o crescimento do colecionismo,
                desenvolvendo produtos que agreguem valor aos negócios de nossos
                parceiros e fortaleçam o mercado com soluções diferenciadas e de
                alto padrão.
              </p>

              <h2 className="text-2xl font-bold text-blue-900 mb-6">
                Parcerias Comerciais
              </h2>

              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                A <strong>The King of Boxes</strong> atua exclusivamente no
                mercado atacadista, atendendo lojistas, distribuidores e
                revendedores em todo o Brasil.
              </p>

              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Não realizamos vendas no varejo.
              </p>

              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Estamos sempre em busca de novas parcerias comerciais com
                empresas que desejam ampliar seu portfólio com produtos
                inovadores, desenvolvidos para atender às necessidades do
                crescente mercado de TCG e colecionáveis.
              </p>

              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Desenvolvemos constantemente novos produtos e oportunidades para
                ajudar nossos parceiros a oferecerem mais valor aos seus clientes
                e se destacarem em seus mercados.
              </p>

              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Acompanhe nossos lançamentos e descubra como a The King of Boxes
                pode contribuir para o crescimento do seu negócio.
              </p>

              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Se você é lojista, distribuidor ou revendedor, entre em contato
                conosco e conheça nossas condições especiais para atacado.
              </p>

              <h2 className="text-2xl font-bold text-blue-900 mb-6">
                Nossos Produtos
              </h2>
              <ul className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  "Expositores/ cases para miniaturas de carros escala 1:64",
                  "Expositores/ cases para miniaturas de carros escala 1:43",
                  "Expositores/ cases para miniaturas de carros escala 1:38",
                  "Expositores/ cases para miniaturas de carros escala 1:24",
                  "Expositores/ cases para miniaturas de carros escala 1:18",
                  "Expositores/ cases para Action Figures",
                  "Expositores/ cases para Bonecos",
                  "Expositores/ cases para Funko pop e Bitty Pop",
                  "Expositores/ cases para Dioramas e cenários",
                  "Acessórios para dioramas",
                  "Maletas para o colecionismo e organização",
                  "Entre outros",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center bg-gray-50 p-4 rounded-xl"
                  >
                    <BadgeCheck className="h-5 w-5 text-blue-900 mr-3" />
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Missão, Visão e Valores */}
              <div className="space-y-12 mt-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-gray-50 p-8 rounded-2xl"
                >
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">
                    Missão
                  </h3>
                  <p className="text-gray-600">
                    Executar nossos serviços com excelência, de forma a atender
                    as expectativas e gerando satisfação dos nossos clientes.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-gray-50 p-8 rounded-2xl"
                >
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">
                    Visão
                  </h3>
                  <p className="text-gray-600">
                    Ser referência em qualidade e comprometimento para nossos
                    clientes e fornecedores.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-gray-50 p-8 rounded-2xl"
                >
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">
                    Valores
                  </h3>
                  <ul className="space-y-4">
                    {valores.map((valor, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        className="flex items-center"
                      >
                        <BadgeCheck className="h-6 w-6 text-yellow-400 mr-3" />
                        <span className="text-gray-600">{valor}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SobreNos;
