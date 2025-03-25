import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import { Mail, Clock, Phone, Instagram } from "lucide-react";

const ComoTrabalhamos = () => {
  const horarioFuncionamento = [
    "De segunda-feira a quinta-feira 07:00-17:00",
    "De sexta-feira 07:00-16:00",
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Head>
        <title>The King of Boxes - Como Trabalhamos</title>
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
              Como <span className="text-yellow-400">Trabalhamos</span>
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
              className="prose prose-lg max-w-4xl mx-auto space-y-8"
            >
              <div className="bg-gray-50 p-8 rounded-2xl">
                <p className="text-xl text-gray-600 leading-relaxed">
                  Nós trabalhamos somente com a venda no atacado e para CNPJ. A
                  venda é somente da caixa fechada e não precisa ser tudo do
                  mesmo produto.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  Informações Necessárias para Orçamentos e Compras
                </h3>
                <p className="text-gray-600 mb-4">
                  Para orçamentos e compras, por favor enviar as informações
                  abaixo por e-mail ou whatsapp:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Nome completo</li>
                  <li>
                    Ficha cadastral contendo:
                    <ul className="list-disc pl-6 mt-2">
                      <li>CNPJ</li>
                      <li>Inscrição estadual</li>
                      <li>Endereço completo (com CEP)</li>
                      <li>Razão social</li>
                      <li>Nome fantasia</li>
                      <li>E-mail</li>
                      <li>Telefone adicional para contato (se houver)</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-gray-50 p-6 rounded-xl flex items-center"
                >
                  <Mail className="h-6 w-6 text-blue-900 mr-3" />
                  <div>
                    <p className="font-semibold text-blue-900">E-mail:</p>
                    <a
                      href="mailto:contato@thekingofboxes.com.br"
                      className="text-gray-600 hover:text-blue-900"
                    >
                      contato@thekingofboxes.com.br
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-gray-50 p-6 rounded-xl flex items-center"
                >
                  <Phone className="h-6 w-6 text-blue-900 mr-3" />
                  <div>
                    <p className="font-semibold text-blue-900">WhatsApp:</p>
                    <a
                      href="tel:1127173954"
                      className="text-gray-600 hover:text-blue-900"
                    >
                      (11) 2717-3954
                    </a>
                  </div>
                </motion.div>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl space-y-4">
                <p className="text-xl text-gray-600 leading-relaxed">
                  Para a primeira compra, o pagamento é à vista.
                </p>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Caso precise comprar no varejo, nós podemos estar indicando.
                </p>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Continue nos acompanhando para saber sempre das novidades,
                  novos produtos, parcerias e mais.
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-gray-50 p-6 rounded-xl flex items-center"
              >
                <Instagram className="h-6 w-6 text-blue-900 mr-3" />
                <div>
                  <p className="font-semibold text-blue-900">
                    Visite também o nosso Instagram:
                  </p>
                  <a
                    href="https://www.instagram.com/thekingofboxes_"
                    className="text-gray-600 hover:text-blue-900"
                  >
                    @thekingofboxes_
                  </a>
                </div>
              </motion.div>

              <div className="bg-gray-50 p-8 rounded-2xl">
                <div className="flex items-center mb-4">
                  <Clock className="h-6 w-6 text-blue-900 mr-3" />
                  <h3 className="text-2xl font-bold text-blue-900">
                    Horário de funcionamento:
                  </h3>
                </div>
                <ul className="space-y-2 text-gray-600">
                  {horarioFuncionamento.map((horario, index) => (
                    <li key={index} className="flex items-center">
                      <span>{horario}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ComoTrabalhamos;
