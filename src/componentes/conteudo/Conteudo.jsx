import React from 'react'
 import fachada from './fachada.jpeg'
 import recepcao from './recepcao.jpeg'
 import recepcaoFundo from './recepcaoFundo.jpeg'
 import 'bootstrap/dist/css/bootstrap.css'
import './conteudo.css'
import { useState } from 'react'

import Item from './conteudo.ts'
import { Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'; 
 export default function Conteudo() {
   
  return (
    <><Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={fachada}
          alt="First slide" />
        <Carousel.Caption>
          <h3>Fachada da clínica El diagnóstico</h3>
          <p>Obra localizada no bairro Jabaquara em SP</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={recepcao}
          alt="Second slide" />

        <Carousel.Caption>
          <h3>Parte interna da obra</h3>
          <p>Recepção da clínica</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={recepcaoFundo}
          alt="Third slide" />

        <Carousel.Caption>
          <h3>Terceira parte </h3>
          <p>
            Outra parte da clínica
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel><div>
        <p>– Fundação</p>
        <p>– Estrutura</p>
        <p>– Alvenaria</p>
        <p>– Contrapiso</p>
        <p>– Emboço Interno</p>
        <p>– Revestimentos Cerâmicos</p>
        <p>– Emboço Externo</p>
        <p>Com a última aceitação pelo mercado da Construção Civil, a Unida Cardoso ganha cada vez mais espaço entre as melhores construtora
          de São Paulo. Contando com os melhores profissionais do mercado, a Unida Cardoso conquistou o carisma e respeito das melhores
          construtora da América Latina, e com o compromisso de buscar sempre novas alternativas para melhorar o desempenho de nossos clientes.
          Fazer sempre o melhor, atingindo a satisfação de nossos clientes e superando suas expectativas. Construir uma base sólida, integrada
          com o progresso, a estar sempre na busca de um ideal, comprometidos na valorização do cliente e nossos colaboradores.
          Atender nossos clientes com a máxima excelência e qualidade,
          contando com uma estrutura enxuta, desprovida de burocracia, simples, ágil, deve estar comprometida com o foco principal da
          organização, a fim de torna-la cada vez mais competitiva no mercado, ofertando soluções que contribuam para o desenvolvimento
          de obras de grande porte.Formar profissionais de alto nível.</p>
      </div></>
  );
}


 