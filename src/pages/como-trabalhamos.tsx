import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import { Mail, Clock, Phone, Instagram, BadgeCheck, Handshake } from "lucide-react";
import { CTA_REVENDA, WHATSAPP_URL, INSTAGRAM_URL } from "@/lib/site";
import { trackLeadConversion } from "@/lib/gtag";

const ComoTrabalhamos = () => {
  const horarioFuncionamento = [
    "De segunda-feira a quinta-feira 07:00-17:00",
    "De sexta-feira 07:00-16:00",
  ];

  const garantias = [
    "Padronização dos produtos",
    "Controle rigoroso de qualidade",
    "Maior agilidade na produção",
    "Desenvolvimento contínuo de novos produtos",
    "Confiabilidade no fornecimento",
  ];

  const tiposEmpresa = [
    "Lojas físicas",
    "E-commerces",
    "Distribuidores",
    "Revendedores",
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Head>
        <title>Como Trabalhamos | The King of Boxes - Processo de Compra</title>
        <meta name="description" content="Produção própria, qualidade controlada e parcerias de longo prazo. Atendimento exclusivo para empresas com CNPJ no mercado de TCG e colecionáveis." />
        <meta name="keywords" content="como comprar, processo de compra, atacado, produção própria, The King of Boxes" />
        <meta property="og:title" content="Como Trabalhamos | The King of Boxes" />
        <meta property="og:description" content="Produção própria, qualidade controlada e parcerias de longo prazo no mercado de TCG e colecionáveis." />
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
              {/* Intro */}
              <div className="bg-gray-50 p-8 rounded-2xl space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-blue-900">
                  Produção Própria, Qualidade Controlada e Parcerias de Longo Prazo
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  A The King of Boxes é especializada no desenvolvimento e
                  fabricação de deck boxes, cases, expositores e acessórios para
                  TCG e colecionáveis, atendendo exclusivamente lojistas,
                  distribuidores e revendedores em todo o Brasil.
                </p>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Com mais de 43 anos de experiência no segmento de transformação
                  de plásticos, combinamos conhecimento técnico, fabricação
                  própria e inovação para oferecer produtos de alta qualidade,
                  excelente acabamento e grande potencial comercial para nossos
                  parceiros.
                </p>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Acreditamos que grandes produtos começam com um processo bem
                  estruturado. Por isso, acompanhamos cada etapa da fabricação,
                  desde o desenvolvimento até a entrega final, garantindo
                  qualidade, consistência e confiabilidade em tudo o que
                  produzimos.
                </p>
              </div>

              {/* Produção Própria e Controle de Qualidade */}
              <div className="bg-gray-50 p-8 rounded-2xl space-y-4">
                <h3 className="text-2xl font-bold text-blue-900">
                  Produção Própria e Controle de Qualidade
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Contamos com ferramentaria própria e injeção plástica própria,
                  o que nos permite controlar todo o processo produtivo e manter
                  elevados padrões de qualidade.
                </p>
                <p className="text-gray-600 leading-relaxed">Essa estrutura garante:</p>
                <ul className="space-y-3 not-prose">
                  {garantias.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <BadgeCheck className="h-6 w-6 text-yellow-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-gray-600 leading-relaxed">
                  Nosso compromisso é entregar produtos que agreguem valor ao
                  portfólio dos nossos parceiros e atendam às expectativas de um
                  mercado cada vez mais exigente.
                </p>
              </div>

              {/* CTA no meio da página */}
              <div className="not-prose text-center py-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackLeadConversion()}
                  className="inline-flex items-center gap-2 rounded-lg bg-yellow-400 px-8 py-4 text-lg font-bold text-blue-900 shadow-md transition-colors hover:bg-yellow-300"
                >
                  <Handshake className="h-6 w-6" />
                  {CTA_REVENDA}
                </a>
              </div>

              {/* Atendimento Exclusivo para Empresas */}
              <div className="bg-gray-50 p-8 rounded-2xl space-y-4">
                <h3 className="text-2xl font-bold text-blue-900">
                  Atendimento Exclusivo para Empresas
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  A The King of Boxes atua exclusivamente no mercado atacadista,
                  oferecendo condições comerciais voltadas para empresas que
                  desejam ampliar seu portfólio com produtos de alta qualidade
                  para o segmento de TCG e colecionáveis.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Atendemos apenas empresas com CNPJ ativo, incluindo:
                </p>
                <ul className="space-y-3 not-prose">
                  {tiposEmpresa.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <BadgeCheck className="h-6 w-6 text-yellow-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-gray-600 leading-relaxed">
                  Não realizamos vendas no varejo nem atendimento direto ao
                  consumidor final.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Essa política nos permite oferecer um atendimento mais
                  especializado, suporte comercial dedicado e condições adequadas
                  para o crescimento dos nossos parceiros.
                </p>
              </div>

              {/* Produtos Desenvolvidos para Gerar Valor */}
              <div className="bg-gray-50 p-8 rounded-2xl space-y-4">
                <h3 className="text-2xl font-bold text-blue-900">
                  Produtos Desenvolvidos para Gerar Valor
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Nossos produtos são desenvolvidos para atender um dos segmentos
                  que mais cresce no Brasil: o mercado de TCG e colecionáveis.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Oferecemos soluções que unem proteção, organização e
                  apresentação, ajudando lojistas e revendedores a
                  disponibilizarem produtos de alta aceitação para seus clientes.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Estamos constantemente investindo em novos projetos, melhorias e
                  lançamentos para acompanhar as tendências do mercado e ampliar
                  as oportunidades de venda dos nossos parceiros.
                </p>
              </div>

              {/* Informações Comerciais */}
              <div className="bg-gray-50 p-8 rounded-2xl space-y-4">
                <h3 className="text-2xl font-bold text-blue-900">
                  Informações Comerciais
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Para garantir segurança e agilidade no início da parceria, a
                  primeira compra é realizada mediante pagamento à vista.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Após o cadastro e análise comercial, nossa equipe apresentará as
                  condições disponíveis para sua empresa.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Caso esteja procurando nossos produtos para uso pessoal, teremos
                  satisfação em indicar lojistas e parceiros autorizados que
                  comercializam a linha The King of Boxes no varejo.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Acompanhe nossos lançamentos, novidades e oportunidades
                  comerciais e descubra como a The King of Boxes pode agregar
                  valor ao seu negócio.
                </p>
              </div>

              {/* Nosso Compromisso */}
              <div className="bg-gray-50 p-8 rounded-2xl space-y-4">
                <h3 className="text-2xl font-bold text-blue-900">
                  Nosso Compromisso
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Mais do que fabricar produtos, buscamos construir parcerias
                  sólidas e duradouras com empresas que compartilham da nossa
                  paixão pelo mercado de colecionáveis.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  A cada novo produto desenvolvido, reforçamos nosso compromisso
                  com qualidade, inovação e crescimento sustentável, contribuindo
                  para o fortalecimento de toda a cadeia de negócios do setor.
                </p>
              </div>

              {/* Seja um Parceiro */}
              <div className="bg-gray-50 p-8 rounded-2xl space-y-4">
                <h3 className="text-2xl font-bold text-blue-900">
                  Seja um Parceiro The King of Boxes
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Se você procura um fabricante de deck boxes, cases, expositores
                  e acessórios para TCG com produção própria, experiência
                  comprovada e compromisso com a qualidade, a The King of Boxes
                  está pronta para atender sua empresa.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Amplie seu portfólio com produtos desenvolvidos para o mercado
                  de colecionáveis e conte com uma parceria focada em crescimento,
                  qualidade e resultados.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Solicite nosso catálogo atacadista e conheça as condições
                  comerciais exclusivas para lojistas, distribuidores e
                  revendedores.
                </p>
              </div>

              {/* Contatos (mantidos) */}
              <div className="grid md:grid-cols-2 gap-6 not-prose">
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
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackLeadConversion()}
                      className="text-gray-600 hover:text-blue-900"
                    >
                      (11) 2717-3954
                    </a>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-gray-50 p-6 rounded-xl flex items-center not-prose"
              >
                <Instagram className="h-6 w-6 text-blue-900 mr-3" />
                <div>
                  <p className="font-semibold text-blue-900">
                    Visite também o nosso Instagram:
                  </p>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-900"
                  >
                    @thekingofboxes_
                  </a>
                </div>
              </motion.div>

              <div className="bg-gray-50 p-8 rounded-2xl not-prose">
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
