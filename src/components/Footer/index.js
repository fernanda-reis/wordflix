import React from 'react';
import ImersaoReact from '../../assets/img/imersaoreact.svg'
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <span>
        <img style={{width: 50}} src={ImersaoReact} alt="Logo Imersão React" />
      </span>
      <p>
        Criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
