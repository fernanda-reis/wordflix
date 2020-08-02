import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../../components/Layout'
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {

  const valoresCategoria = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [categorias, setCategorias] = useState([]);
  const [dadosCategoria, setDadosCategoria] = useState(valoresCategoria);

  useEffect(() => {
    
    const URL = 'http://localhost:8080/categorias';

    fetch(URL)
    .then(async (response) => {
      const resposta = await response.json();
      setCategorias([
        ...resposta,
      ]);
    });
  }, []);

  function handleSubmit(evento) {
    evento.preventDefault();

    setCategorias([
      ...categorias,
      dadosCategoria
    ]);

    setDadosCategoria(valoresCategoria);
  }

  function handleCategoria(chave, valor) {
    setDadosCategoria({
      ...dadosCategoria,
      [chave]: valor,
    });
  };

  function handleChange(evento) {

    handleCategoria(
      evento.target.getAttribute('name'),
      evento.target.value
    );
  };


  return (
    <Layout>
      <h1>Cadastro de Categoria</h1>

      <form onSubmit={handleSubmit}>

        <FormField
          label="Nome da categoria "
          type="input"
          name="nome"
          value={dadosCategoria.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição "
          field="textarea"
          type="text"
          name="descricao"
          value={dadosCategoria.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor "
          type="color"
          name="cor"
          value={dadosCategoria.cor}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
          </Button>
      </form>

      {categorias.length === 0 && (
      <div>
        Carregando...
      </div>
      )}

      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria}${indice}`}>
              {categoria.nome}
            </li>
          )
        })}
      </ul>

      <Link to="/cadastro/video">
        Cadastrar Vídeo
        </Link>

    </Layout>
  )
}

export default CadastroCategoria;
