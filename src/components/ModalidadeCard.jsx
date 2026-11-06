import './ModalidadeCard.css'
import iconeModalidade from '../assets/icone_modalidade.png'

const ModalidadeCard = ({ nome, descricao, imagem }) => {
  return (
    <article className="modalidade-card">
      <img src={imagem} alt={`Praticantes de ${nome} na areia`} />
      <div className="modalidade-icon"><img src={iconeModalidade} alt="" /></div>
      <div className="modalidade-text">
        <h3>{nome}</h3>
        <p>{descricao}</p>
      </div>
    </article>
  )
}

export default ModalidadeCard
