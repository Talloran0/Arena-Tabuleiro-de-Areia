import './CadastroForm.css'
import { useState } from 'react'

const CadastroForm = () => {

  const [dados, setDados] = useState({
    nome: '',
    email: '',
    telefone: '',
    nascimento: '',
    esporte: 'Beach Tennis'
  })

  const [mensagem, setMensagem] = useState('')
  const [tipoMensagem, setTipoMensagem] = useState('')

  const atualizarCampo = (e) => {
    const { name, value } = e.target
    setDados({ ...dados, [name]: value })
    setMensagem('')
  }

  const cadastrar = (e) => {
    e.preventDefault()

    if (!dados.nome.trim() || !dados.email.trim() || !dados.telefone.trim() || !dados.nascimento || !dados.esporte) {
      setTipoMensagem('erro')
      setMensagem('Preencha todos os campos obrigatórios.')
      return
    }

    if (!dados.email.includes('@')) {
      setTipoMensagem('erro')
      setMensagem('Insira um E-mail válido.')
      return
    }

    setTipoMensagem('sucesso')
    setMensagem(`Cadastro realizado com sucesso! Seja bem-vindo(a), ${dados.nome.trim()}!`)
    setDados({
      nome: '',
      email: '',
      telefone: '',
      nascimento: '',
      esporte: 'Beach Tennis'
    })
  }

  return (
    <section className="form-card">
      <div className="form-heading">
        <h2>Dados do cliente</h2>
        <p><span>*</span> Campos obrigatórios</p>
      </div>

      <form onSubmit={cadastrar}>
        <div className="form-group">
          <label htmlFor="nome">Nome completo <span>*</span></label>
          <input
            id="nome"
            name="nome"
            type="text"
            placeholder="Digite seu nome completo"
            value={dados.nome}
            onChange={atualizarCampo}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">E-mail <span>*</span></label>
          <input
            id="email"
            name="email"
            type="text"
            placeholder="exemplo@email.com"
            value={dados.email}
            onChange={atualizarCampo}
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="telefone">Telefone <span>*</span></label>
            <input
              id="telefone"
              name="telefone"
              type="tel"
              placeholder="(00) 00000-0000"
              value={dados.telefone}
              onChange={atualizarCampo}

            />
          </div>

          <div className="form-group">
            <label htmlFor="nascimento">Data de nascimento <span>*</span></label>
            <input
              id="nascimento"
              name="nascimento"
              type="date"
              value={dados.nascimento}
              onChange={atualizarCampo}
            />
          </div>
        </div>

        <fieldset className="esporte-group">
          <legend>Esporte de interesse <span>*</span></legend>
          {['Beach Tennis', 'Vôlei de Praia', 'Futevôlei', 'Outros'].map((esporte) => (
            <label key={esporte} className="radio-option">
              <input
                type="radio"
                name="esporte"
                value={esporte}
                checked={dados.esporte === esporte}
                onChange={atualizarCampo}
              />
              {esporte}
            </label>
          ))}
        </fieldset>

        {mensagem && (
          <p className={`form-message ${tipoMensagem}`} role="status">
            {mensagem}
          </p>
        )}

        <button className="primary-button submit-button" type="submit">
          Cadastrar <span>→</span>
        </button>
      </form>
    </section>
  )
}

export default CadastroForm
