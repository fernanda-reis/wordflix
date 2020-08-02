import React from 'react';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Layout from '../../components/Layout';

function Home() {
  return (
    <div style={{ background: "#141414" }}>
      <Layout>

        <BannerMain
          videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
          url={dadosIniciais.categorias[0].videos[0].url}
          videoDescription={"Já chega de ficar no enrolation na hora de falar inglês né? Aprenda como se apresentar em inglês de forma simples e prática, pra perder o medo e nunca mais dizer 'ai lirol spik' naquela entrevista importante ou na hora de falar com o gringo!"}
        />

        <Carousel
          ignoreFirstVideo
          category={dadosIniciais.categorias[0]}
        />

        <Carousel
          category={dadosIniciais.categorias[1]}
        />

        <Carousel
          category={dadosIniciais.categorias[2]}
        />

        <Carousel
          category={dadosIniciais.categorias[3]}
        />

        <Carousel
          category={dadosIniciais.categorias[4]}
        />

        <Carousel
          category={dadosIniciais.categorias[5]}
        />

      </Layout>
    </div>
  );
}

export default Home;
