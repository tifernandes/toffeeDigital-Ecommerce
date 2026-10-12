import React from "react";
import { ChevronRight } from "lucide-react";

// Perguntas e respostas fornecidas pelo cliente (texto exato).
const faqItems: { pergunta: string; resposta: string }[] = [
  {
    pergunta: "Vocês vendem para pessoa física?",
    resposta:
      "Não. A The King of Boxes atua exclusivamente no mercado atacadista, atendendo apenas empresas com CNPJ ativo, como lojas físicas, ecommerces, distribuidores e revendedores.",
  },
  {
    pergunta: "Qual é o pedido mínimo para compra?",
    resposta:
      "O pedido mínimo pode variar de acordo com os produtos e condições comerciais vigentes. Nossa equipe comercial está à disposição para apresentar as condições atualizadas e auxiliar na escolha dos produtos mais adequados para o seu negócio. Entre em contato para solicitar nosso catálogo atacadista e receber mais informações.",
  },
  {
    pergunta: "Como me tornar um revendedor da The King of Boxes?",
    resposta:
      "É simples. Basta entrar em contato com nossa equipe comercial e realizar o cadastro da sua empresa. Após a análise das informações cadastrais, apresentaremos nosso catálogo, condições comerciais e orientações para iniciar a parceria.",
  },
  {
    pergunta: "Atendem todo o Brasil?",
    resposta:
      "Sim. Atendemos lojistas, distribuidores e revendedores em todo o território nacional, levando os produtos The King of Boxes para diversas regiões do Brasil por meio de nossa rede de parceiros comerciais.",
  },
  {
    pergunta: "Vocês possuem fabricação própria?",
    resposta:
      "Sim. Contamos com ferramentaria própria e injeção plástica própria, o que nos permite acompanhar e controlar todas as etapas da fabricação. Essa estrutura garante maior controle de qualidade, padronização dos produtos, desenvolvimento contínuo e fornecimento confiável para nossos parceiros.",
  },
  {
    pergunta: "Quais produtos a The King of Boxes fabrica?",
    resposta:
      "Desenvolvemos e fabricamos deck boxes, cases, expositores e acessórios para TCG e colecionáveis, sempre com foco em qualidade, durabilidade, funcionalidade e excelente acabamento. Nossos produtos são projetados para atender às necessidades de lojistas, revendedores e do crescente mercado de colecionáveis.",
  },
  {
    pergunta: "A primeira compra possui condições especiais?",
    resposta:
      "A primeira compra é realizada mediante pagamento à vista, garantindo maior segurança e agilidade no início da parceria comercial. Após o cadastro e análise da empresa, nossa equipe apresentará as condições comerciais disponíveis.",
  },
  {
    pergunta: "Por que escolher a The King of Boxes?",
    resposta:
      "Porque somos uma empresa com mais de 43 anos de experiência na transformação de plásticos, fabricação própria e foco exclusivo no mercado de colecionáveis. Oferecemos produtos de alta qualidade, suporte especializado e uma parceria voltada para o crescimento dos nossos revendedores e distribuidores.",
  },
];

const Faq: React.FC = () => {
  // JSON-LD FAQPage para SEO.
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.pergunta,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.resposta,
      },
    })),
  };

  return (
    <section id="faq" className="py-12 sm:py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-blue-900">
            Perguntas Frequentes
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-4 sm:mb-8" />
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqItems.map((item, index) => (
            <details
              key={index}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <summary className="flex items-center justify-between cursor-pointer list-none p-5 sm:p-6 text-base sm:text-lg font-semibold text-blue-900">
                <span>{item.pergunta}</span>
                <ChevronRight className="h-5 w-5 flex-shrink-0 text-yellow-500 transition-transform duration-300 group-open:rotate-90" />
              </summary>
              <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-gray-600 leading-relaxed">
                {item.resposta}
              </div>
            </details>
          ))}
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </section>
  );
};

export default Faq;
