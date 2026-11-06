import './CadastroInfo.css'
import quadraCadastro from '../assets/quadra_cadastro.jpg'
import iconePromocoes from '../assets/icone_promocoes.png'
import iconeAgendamento from '../assets/icone_agendamento.png'
import iconeNovidades from '../assets/icone_novidades_eventos.png'

const CadastroInfo = () => {
  return (
    <section className="cadastro-info">
      <img src={quadraCadastro} alt="Quadra de areia da Arena Tabuleiro de Areia" />
      <div className="cadastro-info-content">
        <p className="eyebrow">FAÇA PARTE DA NOSSA ARENA</p>
        <h1>Cadastre-se e<br />venha jogar com a gente!</h1>
        <p className="cadastro-description">
          Preencha os dados abaixo para criar seu cadastro e ficar por dentro
          das novidades, horários e eventos.
        </p>
        <div className="beneficios">
          <div><img src={iconePromocoes} alt="" /><p>Acesso a<br />promoções</p></div>
          <div><img src={iconeAgendamento} alt="" /><p>Agendamento<br />de quadras</p></div>
          <div><img src={iconeNovidades} alt="" /><p>Novidades e<br />eventos</p></div>
        </div>
      </div>
    </section>
  )
}

export default CadastroInfo
