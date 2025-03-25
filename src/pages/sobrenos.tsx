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
        <title>The King of Boxes - Sobre Nós</title>
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
              A <strong>The King of Boxes</strong> é uma empresa 100% nacional
              fabricante e especializada em expositores para colecionáveis e
              caixas para organização.
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
                Nós produzimos produtos para colecionadores exigentes. Tais
                produtos são cuidadosamente projetados e fabricados, além de
                serem feitos com materiais de altíssima qualidade.
              </p>

              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Temos nossa própria ferramentaria e injeção de plásticos para a
                fabricação dos nossos produtos, onde podemos acompanhar cada
                passo desde a produção até a sua entrega. Contamos com mais de
                40 anos de Know-How nestes seguimentos.
              </p>

              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Nosso objetivo é agregar no mundo do colecionismo e fazer com
                que o mesmo cresça cada vez mais.
              </p>

              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Estamos abertos para novas parcerias. Nós trabalhamos somente
                com vendas no atacado.
              </p>

              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Visite também:
              </p>

              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Instagram:{" "}
                <a
                  href="https://www.instagram.com/thekingofboxes_"
                  className="text-blue-900 hover:text-blue-700"
                >
                  @thekingofboxes_
                </a>
              </p>

              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Continue nos acompanhando para saber sempre das novidades, novos
                produtos, parcerias e mais.
              </p>

              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Mantenha as suas coleções sempre organizadas e protegidas com a{" "}
                <strong>The King of Boxes</strong>.
              </p>

              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                <strong>De colecionador para colecionador!</strong>
              </p>

              <h2 className="text-2xl font-bold text-blue-900 mb-6">
                Nossos Produtos
              </h2>
              <ul className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  "Expositores/cases para Action Figures",
                  "Expositores/cases para Funko pop",
                  "Expositores/cases para miniaturas de carros escala 1:64",
                  "Expositores/cases para miniaturas de carros escala 1:43",
                  "Expositores/cases para miniaturas de carros escala 1:32",
                  "Expositores/cases para miniaturas de carros escala 1:24",
                  "Expositores/cases para miniaturas de carros escala 1:18",
                  "Expositores/cases para Dioramas e cenários",
                  "Acessórios para dioramas",
                  "Maletas para o colecionismo e organização",
                  "Caixas plásticas",
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
