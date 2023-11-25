import { useState, useEffect } from 'react'
import '../styles/home.scss'
import Nav from '../components/Nav'
import Footer from '../components/Footer';

function Home() {

  const scrollToSection = () => {
    // Encontre a âncora da seção desejada pelo seu ID
    const section = document.getElementById('produto'); // Substitua 'sua-secao' pelo ID da sua seção

    if (section) {
      // Use o método scrollIntoView para rolar até a seção
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
///////////////////////////////////////////////////
const scrollToSection2 = () => {
  // Encontre a âncora da seção desejada pelo seu ID
  const section = document.getElementById('vantagensSection'); // Substitua 'sua-secao' pelo ID da sua seção

  if (section) {
    // Use o método scrollIntoView para rolar até a seção
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

  return (
    <main>
      <section className='top'>
        <div className='maxWidth'>
          <div class="topContent">
            <p class="text1">Temos a solução</p>
            <p class="text2">que o seu hospital precisa</p>
            <p class="text3">Aumente sua eficiência!</p>
            <button onClick={scrollToSection}>Conheça nossa solução</button>
          </div>
        </div>
      </section>

      <section id='produto' className='container'>
        <div className='imgProduto'>
            <img src="../public/pulseira2.png" alt="" />
            <div className='legenda'>
              <p>O futuro chegou!</p>
              <button className='maisInfo' onClick={scrollToSection2}>Mais informações</button>
            </div>
        </div>

        <div className='info'>
          <div>
          <h2>O que é?</h2>
            <p className='textoExplicativo'>A MediMor é uma inovadora empresa que oferece soluções avançadas para a gestão hospitalar, combinando um sistema de Planejamento de Recursos Empresariais (ERP) especializado com uma Pulseira Inteligente para monitoramento contínuo dos pacientes. Essa integração revoluciona a eficiência operacional e proporciona cuidados personalizados, redefinindo os padrões de excelência no ambiente hospitalar.
            </p> <br/>
            <hr /> <br />
          </div>

          <div className='teoria'>
            <h2>O que irá realizar?</h2>
            <p className='textoExplicativo'>
            As soluções da MediMor prometem transformar a gestão hospitalar, otimizando processos com seu sistema ERP dedicado e proporcionando monitoramento contínuo dos pacientes por meio da Pulseira Inteligente. Essas inovações resultam em uma redução significativa no tempo de espera, eficiência operacional aprimorada e cuidados personalizados, elevando os padrões de excelência no cuidado hospitalar.
            </p> <br />
            <hr /> <br />
          </div>

          <div className='funcionamento'>
            <h2>Como irá funcionar?</h2>
            <p className='textoExplicativo'>
              O ERP da MediMor revoluciona a gestão hospitalar, integrando processos desde o agendamento de consultas até a alocação eficiente de recursos. A Pulseira Inteligente monitora em tempo real as condições vitais dos pacientes, fornecendo dados contínuos que são integrados ao ERP. Isso permite uma visão abrangente do estado de cada paciente, capacitando os profissionais de saúde a tomarem decisões informadas e personalizadas, resultando em cuidados mais eficazes e uma experiência hospitalar aprimorada.
            </p>
          </div>
        </div>
      </section>

      <section className='sobreSolucao'>
        <div className='titulo'>
          <h2 className='tituloSolucao'>MediMor:</h2>
          <p className='subtituloSolucao'>Uma Solução Integrada de ERP e Pulseira para Otimização do Atendimento Hospitalar</p>
        </div>

        <div className='explicacao'>
          <p>Transformando Cuidados de Saúde.<hr/> ERP Eficiente, Pulseira Vigilante. Inovação para uma Saúde Conectada</p>
        </div>
      </section>

      <hr/>
      <section id='vantagensSection'>
        <h2 className='tituloVantagens'>Vantagens:</h2>

        <section className='vantagens'>

          <div className='vantagensBox'>
            <img src="../public/eficiencia_icon.png" alt="" />
            <h2>Eficiência operacional:</h2>
            <p className='vantagensP'>O ERP da MediMor agiliza processos hospitalares, desde o agendamento até a alocação de recursos, otimizando o tempo e aumentando a eficiência.
            </p>
          </div>

          <div className='vantagensBox'>
            <img src="../public/monitoramento_icon.png" alt="" />
            <h2>Monitoramento:</h2>
            <p className='vantagensP'>A Pulseira Inteligente proporciona monitoramento em tempo real dos sinais vitais, permitindo uma resposta imediata a alterações e contribuindo para uma atenção mais personalizada aos pacientes.
            </p>
          </div>

          <div className='vantagensBox'>
            <img src="../public/integracao_icon.png" alt="" />
            <h2>Integração:</h2>
            <p className='vantagensP'>Ambas as soluções se integram, fornecendo uma visão holística do paciente. As informações da pulseira são incorporadas ao ERP, capacitando profissionais de saúde com dados abrangentes para decisões informadas e coordenadas.

            </p>
          </div>
        </section>
      </section>

      <Footer />
    </ main>
  )
}

export default Home