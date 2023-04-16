import React from 'react';
import ProdutosCmp from '../components/Produtos';
import Head from 'next/head'

const Produtos = () => {
  return (
    <div>
      <Head>
          <title>The King of Boxes - Produtos</title>
      </Head>
      <ProdutosCmp />
    </div>
  );
};

export default Produtos;