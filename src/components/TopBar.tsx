import React from "react";

// Faixa fina acima do header, em todas as páginas.
// Azul da marca (blue-900 / #1e3a8a), texto branco, bold, centralizado.
const TopBar: React.FC = () => {
  return (
    <div className="w-full bg-blue-900 text-white text-center text-xs sm:text-sm font-bold tracking-wide py-2 px-4 z-50">
      VENDA SOMENTE ATACADO
    </div>
  );
};

export default TopBar;
