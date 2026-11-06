import './SobreArena.css'
import iconeSol from '../assets/icone_sol.png'
import iconeQuadras from '../assets/icone_quadras.png'
import iconeVestuario from '../assets/icone_vestuario.png'
import iconeAmbienteSeguro from '../assets/icone_ambiente_seguro.png'

const SobreArena = () => {
  return (
    <section className="sobre-section" id="sobre">
      <div className="sobre-intro">
        <img className="sun-icon" src={iconeSol} alt="" />
        <div>
          <h2>Sobre a Arena</h2>
          <p>
            Somos uma arena de esportes de areia que oferece quadras de alta
            qualidade, um ambiente seguro e acolhedor, além de toda a estrutura
            para você praticar seu esporte preferido e viver momentos incríveis.
          </p>
        </div>
      </div>

      <div className="estrutura-item">
        <img src={iconeQuadras} alt="" />
        <p>Quadras<br />profissionais</p>
      </div>
      <div className="estrutura-item">
        <img src={iconeVestuario} alt="" />
        <p>Vestiários<br />e banheiros</p>
      </div>
      <div className="estrutura-item">
        <img src={iconeAmbienteSeguro} alt="" />
        <p>Ambiente<br />seguro</p>
      </div>
    </section>
  )
}

export default SobreArena
