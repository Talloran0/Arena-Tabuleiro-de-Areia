import './Header.css'
import logoBola from '../assets/logo_bola.png'

const Header = ({ pagina, setPagina, abrirCadastro, voltarInicio }) => {
  return (
    <header className="site-header">
      <button className="brand" onClick={voltarInicio} aria-label="Voltar para o início">
        <img className="brand-mark" src={logoBola} alt="" />
        <span className="brand-copy">
          <strong>ARENA TABULEIRO DE AREIA</strong>
          <small>ESPORTES DE AREIA</small>
        </span>
      </button>

      {pagina === 'inicio' ? (
        <nav className="main-nav">
          <button className="nav-link active" onClick={voltarInicio}>Início</button>
          <a className="nav-link" href="#modalidades">Modalidades</a>
          <a className="nav-link" href="#sobre">Sobre</a>
        </nav>
      ) : (
        <button className="nav-link active" onClick={() => setPagina('cadastro')}>Cadastro</button>
      )}

      <button className="header-button" onClick={abrirCadastro}>Cadastre-se</button>
    </header>
  )
}

export default Header
