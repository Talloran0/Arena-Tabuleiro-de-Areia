import './Footer.css'
import logoBola from '../assets/logo_bola.png'
import iconeLocalizacao from '../assets/icone_localizacao.png'
import iconeTelefone from '../assets/icone_telefone.png'
import iconeInstagram from '../assets/icone_instagram.png'
import iconeFacebook from '../assets/icone_facebook.png'

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <img className="footer-brand-mark" src={logoBola} alt="" />
        <span className="footer-brand-copy">
          <strong>ARENA TABULEIRO DE AREIA</strong>
          <small>ESPORTES DE AREIA</small>
        </span>
      </div>
      <p><img src={iconeLocalizacao} alt="" /> Av. Praia, 123 - Tabuleiro do Norte/CE</p>
      <p><img src={iconeTelefone} alt="" /> (88) 98765-4321</p>
      <div className="social-links">
        <img src={iconeInstagram} alt="Instagram" />
        <img src={iconeFacebook} alt="Facebook" />
      </div>
    </footer>
  )
}

export default Footer
