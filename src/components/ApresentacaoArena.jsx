import './ApresentacaoArena.css'
import destaqueVolei from '../assets/destaque_volei.jpg'

const ApresentacaoArena = ({ abrirCadastro }) => {
  return (
    <section className="apresentacao-arena">
      <div className="apresentacao-conteudo">
        <p className="eyebrow">ESPORTE • SAÚDE • DIVERSÃO</p>
        <h1>Sua próxima partida<br />começa aqui.</h1>
        <p className="apresentacao-descricao">
          Venha jogar, se movimentar e aproveitar bons momentos na areia.
          Encontre seu esporte favorito e reúna a galera para a próxima partida.
        </p>
        <button className="primary-button apresentacao-botao" onClick={abrirCadastro}>
          Cadastre-se agora <span>→</span>
        </button>
      </div>
      <div className="apresentacao-imagem" style={{ backgroundImage: `url(${destaqueVolei})` }} />
    </section>
  )
}

export default ApresentacaoArena
