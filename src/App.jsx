import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import ApresentacaoArena from './components/ApresentacaoArena'
import ModalidadeCard from './components/ModalidadeCard'
import SobreArena from './components/SobreArena'
import Footer from './components/Footer'
import CadastroInfo from './components/CadastroInfo'
import CadastroForm from './components/CadastroForm'

import beachTennis from './assets/beach_tennis.jpg'
import voleiPraia from './assets/volei_praia.jpg'
import futevolei from './assets/futevolei.jpg'

function App() {
  const [pagina, setPagina] = useState('inicio')

  const abrirCadastro = () => {
    setPagina('cadastro')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const voltarInicio = () => {
    setPagina('inicio')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const modalidades = [
    {
      nome: 'Beach Tennis',
      descricao: 'Uma mistura de tênis, agilidade e muita diversão na areia! Com raquetes e uma bolinha, o objetivo é fazer a bola passar por cima da rede sem deixá-la cair no seu lado da quadra. Chame sua dupla e venha descobrir por que esse esporte conquista tantos jogadores.',
      imagem: beachTennis
    },
    {
      nome: 'Vôlei de Praia',
      descricao: 'Trabalho em equipe, bons saques e disputas ponto a ponto! No vôlei de praia, você e seu time precisam de sintonia e estratégia para manter a bola no ar e superar os adversários. Reúna os amigos, monte sua equipe e venha aproveitar cada partida na areia.',
      imagem: voleiPraia
    },
    {
      nome: 'Futevôlei',
      descricao: 'Já imaginou jogar vôlei usando os pés, a cabeça e o peito para controlar a bola? Essa é a proposta do futevôlei, um esporte que combina habilidade, coordenação e espírito de equipe. Junte sua dupla, entre em quadra e venha mostrar seu talento na areia!',
      imagem: futevolei
    }
  ]

  return (
    <div className="app-shell">
      <Header pagina={pagina} setPagina={setPagina} abrirCadastro={abrirCadastro} voltarInicio={voltarInicio} />

      {pagina === 'inicio' ? (
        <>
          <main>
            <ApresentacaoArena abrirCadastro={abrirCadastro} />

            <section className="modalidades-section" id="modalidades">
              <div className="section-heading">
                <h2>Nossas modalidades</h2>
                <a href="#modalidades">Ver todas <span>→</span></a>
              </div>

              <div className="modalidades-lista">
                {modalidades.map((modalidade) => (
                  <ModalidadeCard
                    key={modalidade.nome}
                    nome={modalidade.nome}
                    descricao={modalidade.descricao}
                    imagem={modalidade.imagem}
                  />
                ))}
              </div>
            </section>

            <SobreArena />
          </main>
          <Footer />
        </>
      ) : (
        <main className="cadastro-layout">
          <CadastroInfo />
          <CadastroForm />
        </main>
      )}
    </div>
  )
}

export default App
