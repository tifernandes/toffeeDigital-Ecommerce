// pages/index.tsx
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BadgeCheck,
  ChevronRight,
  MessageSquare,
  Phone,
  Mail,
  Instagram,
  MapPin,
  FileText,
  ArrowRight,
} from "lucide-react";
import produtos from "@/dumDB/produtos";
import VerticalSlider from "@/components/VerticalSlider";
import Head from "next/head";

export default function Home() {
  // Group products by category
  const productsByCategory = produtos.reduce((acc, product) => {
    product.categoria.forEach(cat => {
      if (!acc[cat]) {
        acc[cat] = [];
      }
      acc[cat].push(product);
    });
    return acc;
  }, {} as Record<string, typeof produtos>);

  const featuredProducts = produtos.slice(0, 5); // Get first 5 products for the carousel

  const valores = [
    "Respeito às pessoas",
    "Confiança e qualidade no serviço prestado",
    "Integridade comercial",
  ];

  return (
    <>
      <Head>
        <title>The King of Boxes | Expositores Premium para Colecionadores</title>
        <meta name="description" content="Expositores e cases de alta qualidade para proteger e valorizar sua coleção. Feitos por colecionadores, para colecionadores." />
        <meta name="keywords" content="expositores, colecionáveis, action figures, miniaturas, cases, proteção" />
        <meta property="og:title" content="The King of Boxes | Expositores Premium para Colecionadores" />
        <meta property="og:description" content="Expositores e cases de alta qualidade para proteger e valorizar sua coleção." />
        <link rel="canonical" href="https://thekingofboxes.com.br" />
      </Head>

      <div className="flex flex-col min-h-screen bg-gray-50">
        {/* Hero Section - Ajustes de responsividade */}
        <section className="relative min-h-[100%] flex items-center overflow-hidden py-12 md:py-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-700/90 z-10" />
          <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center" />
          <div className="container mx-auto px-4 relative z-20">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Left Side - CTA */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-white space-y-6 md:space-y-8"
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                  Soluções para{" "}
                  <span className="text-yellow-400">Colecionadores</span>{" "}
                  Exigentes
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl opacity-90 leading-relaxed">
                  Expositores e cases de alta qualidade para proteger e valorizar
                  sua coleção. Feitos por colecionadores, para colecionadores.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4 sm:pt-6">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-yellow-400 text-blue-900 hover:bg-yellow-300 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6"
                  >
                    Conheça o Catálogo
                    <ChevronRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6" />
                  </Button>
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white/20 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 transition-colors"
                    variant="outline"
                  >
                    Fale Conosco
                    <Phone className="ml-2 h-5 w-5 sm:h-6 sm:w-6" />
                  </Button>
                </div>
              </motion.div>

              {/* Right Side - Vertical Slider */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="hidden md:block" // Oculta em mobile
              >
                <VerticalSlider />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <main className="flex-grow">
          {/* About Section with Cards */}
          <section id="sobre" className="py-24 bg-white">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-3xl mx-auto mb-16"
              >
                <h2 className="text-4xl font-bold mb-6 text-blue-900">
                  Sobre a The King of Boxes
                </h2>
                <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8" />
                <p className="text-xl text-gray-600 leading-relaxed">
                  Somos uma empresa 100% nacional especializada em expositores
                  para colecionáveis, com mais de 40 anos de experiência no
                  mercado.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mb-6">
                    <BadgeCheck className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-blue-900">
                    Qualidade Premium
                  </h3>
                  <p className="text-gray-600">
                    Nossos produtos são cuidadosamente projetados e fabricados com
                    materiais de altíssima qualidade.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mb-6">
                    <FileText className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-blue-900">
                    Produção Própria
                  </h3>
                  <p className="text-gray-600">
                    Contamos com nossa própria ferramentaria e injeção de
                    plásticos para total controle de qualidade.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mb-6">
                    <MessageSquare className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-blue-900">
                    Suporte Especializado
                  </h3>
                  <p className="text-gray-600">
                    Nossa equipe está sempre pronta para ajudar e oferecer o
                    melhor atendimento.
                  </p>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Products Section - Ajustes de responsividade */}
          {/* <section id="produtos" className="py-12 sm:py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-3xl mx-auto mb-16"
              >
                <h2 className="text-4xl font-bold mb-6 text-blue-900">
                  Nossos Produtos
                </h2>
                <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8" />
                <p className="text-xl text-gray-600">
                  Descubra nossa linha completa de soluções para colecionadores
                </p>
              </motion.div>

              {Object.entries(productsByCategory).map(
                ([category, products], categoryIndex) => (
                  <div key={category} className="mb-8 sm:mb-12 md:mb-16">
                    <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-6 sm:mb-8">
                      {category}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                      {products.map((product, index) => (
                        <div
                          key={product.Id}
                          className="animate-fadeInUp"
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          <Card className="border-0 bg-transparent">
                            <CardContent className="p-0">
                              <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] rounded-xl overflow-hidden">
                                <div className="relative w-full h-full group">
                                  <Image
                                    src={`/produtos/${product.Id}/${product.imgs[0]}`}
                                    alt={product.produto}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 flex items-end p-4 sm:p-6">
                                    <div>
                                      <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                                        {product.produto}
                                      </h3>
                                      <p className="text-sm sm:text-base text-white/80 line-clamp-2">
                                        {product.descricao}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              )}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mt-16"
              >
                <p className="text-xl font-medium mb-8 text-gray-600">
                  E sempre temos novidades...
                </p>
                <Button
                  size="lg"
                  className="bg-blue-900 hover:bg-blue-800 text-lg px-8 py-6"
                >
                  Ver catálogo completo
                  <FileText className="ml-2 h-6 w-6" />
                </Button>
              </motion.div>
            </div>
          </section> */}

          {/* Mission/Vision/Values Section - Ajustes de responsividade */}
          <section id="valores" className="py-12 sm:py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-3xl mx-auto mb-16"
              >
                <h2 className="text-4xl font-bold mb-6 text-blue-900">
                  Nossa Identidade
                </h2>
                <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8" />
              </motion.div>

              <div className="relative">
                <Tabs defaultValue="missao" className="max-w-4xl mx-auto">
                  <div className="flex justify-center mb-8 sm:mb-12 overflow-x-auto">
                    <TabsList className="bg-gray-100 p-1 sm:p-2 rounded-full">
                      <TabsTrigger
                        value="missao"
                        className="rounded-full px-4 sm:px-8 py-2 sm:py-3 text-sm sm:text-base"
                      >
                        Missão
                      </TabsTrigger>
                      <TabsTrigger
                        value="visao"
                        className="rounded-full px-4 sm:px-8 py-2 sm:py-3 text-sm sm:text-base"
                      >
                        Visão
                      </TabsTrigger>
                      <TabsTrigger
                        value="valores"
                        className="rounded-full px-4 sm:px-8 py-2 sm:py-3 text-sm sm:text-base"
                      >
                        Valores
                      </TabsTrigger>
                    </TabsList>
                  </div>

                  <TabsContent
                    value="missao"
                    className="p-8 bg-gray-50 rounded-2xl shadow-lg"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <h3 className="text-2xl font-bold mb-6 text-blue-900">
                        Nossa Missão
                      </h3>
                      <p className="text-xl leading-relaxed text-gray-600">
                        Executar nossos serviços com excelência, de forma a
                        atender as expectativas e gerando satisfação dos nossos
                        clientes.
                      </p>
                    </motion.div>
                  </TabsContent>

                  <TabsContent
                    value="visao"
                    className="p-8 bg-gray-50 rounded-2xl shadow-lg"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <h3 className="text-2xl font-bold mb-6 text-blue-900">
                        Nossa Visão
                      </h3>
                      <p className="text-xl leading-relaxed text-gray-600">
                        Ser referência em qualidade e comprometimento para nossos
                        clientes e fornecedores.
                      </p>
                    </motion.div>
                  </TabsContent>

                  <TabsContent
                    value="valores"
                    className="p-8 bg-gray-50 rounded-2xl shadow-lg"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <h3 className="text-2xl font-bold mb-6 text-blue-900">
                        Nossos Valores
                      </h3>
                      <ul className="space-y-6">
                        {valores.map((valor, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="flex items-start bg-white p-4 rounded-xl shadow-sm"
                          >
                            <BadgeCheck className="h-8 w-8 text-yellow-400 mr-4 flex-shrink-0 mt-1" />
                            <span className="text-lg text-gray-700">{valor}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section
            id="contato"
            className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-gray-50 to-blue-900"
          >
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-3xl mx-auto mb-8 sm:mb-16"
              >
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-blue-900">
                  Entre em Contato
                </h2>
                <div className="w-24 h-1 bg-yellow-400 mx-auto mb-4 sm:mb-8" />
                <p className="text-lg sm:text-xl text-gray-600">
                  Estamos aqui para ajudar. Entre em contato conosco!
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 max-w-5xl mx-auto">
                {/* Card de Contatos */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg"
                >
                  <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-blue-900">
                    Fale Conosco
                  </h3>
                  <div className="space-y-4 sm:space-y-6">
                    {/* Informações de contato */}
                    <div className="flex items-start p-3 sm:p-4 bg-gray-50 rounded-xl">
                      <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-blue-900 mr-3 sm:mr-4 mt-1" />
                      <div className="flex-1 min-w-0">
                        {" "}
                        {/* Adicionado flex-1 e min-w-0 para evitar overflow */}
                        <p className="font-medium text-gray-900 text-sm sm:text-base truncate">
                          (11) 2717-3954
                        </p>
                        <p className="text-xs sm:text-sm text-gray-500">
                          Segunda a Sexta, 9h-18h
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start p-3 sm:p-4 bg-gray-50 rounded-xl">
                      <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-blue-900 mr-3 sm:mr-4 mt-1" />
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-gray-900 text-sm sm:text-base truncate">
                          contato@thekingofboxes.com.br
                        </p>
                        <p className="text-xs sm:text-sm text-gray-500">
                          Resposta em até 24h
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start p-3 sm:p-4 bg-gray-50 rounded-xl">
                      <Instagram className="h-5 w-5 sm:h-6 sm:w-6 text-blue-900 mr-3 sm:mr-4 mt-1" />
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-gray-900 text-sm sm:text-base truncate">
                          @thekingofboxes_
                        </p>
                        <p className="text-xs sm:text-sm text-gray-500">
                          Siga-nos para novidades
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start p-3 sm:p-4 bg-gray-50 rounded-xl">
                      <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-blue-900 mr-3 sm:mr-4 mt-1" />
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-gray-900 text-sm sm:text-base truncate">
                          São Paulo - SP, Brasil
                        </p>
                        <p className="text-xs sm:text-sm text-gray-500">Matriz</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 sm:mt-8">
                    <a href="https://wa.me/message/6FZ3YWIMM7XWF1" target="_blank" rel="noopener noreferrer">
                        <Button
                          size="lg"
                          className="w-full bg-green-600 hover:bg-green-700 text-base sm:text-lg py-4 sm:py-6"
                        >
                          <MessageSquare className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
                          <span className="truncate">Fale conosco pelo WhatsApp</span>
                        </Button>
                    </a>
                  </div>
                </motion.div>

                {/* Formulário */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg"
                >
                  <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-blue-900">
                    Envie uma mensagem
                  </h3>
                  <form className="space-y-4 sm:space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700">
                        Nome
                      </label>
                      <input
                        type="text"
                        className="w-full p-2 sm:p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-all text-sm sm:text-base"
                        placeholder="Seu nome"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700">
                        E-mail
                      </label>
                      <input
                        type="email"
                        className="w-full p-2 sm:p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-all text-sm sm:text-base"
                        placeholder="Seu e-mail"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700">
                        Mensagem
                      </label>
                      <textarea
                        className="w-full p-2 sm:p-3 border border-gray-200 rounded-xl h-24 sm:h-32 focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-all text-sm sm:text-base"
                        placeholder="Como podemos ajudar?"
                      ></textarea>
                    </div>
                    <Button
                      size="lg"
                      className="w-full bg-blue-900 hover:bg-blue-800 text-base sm:text-lg py-4 sm:py-6"
                    >
                      Enviar mensagem
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </motion.div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
