# Arena Tabuleiro de Areia

Projeto React criado com Vite, seguindo a estrutura simples de componentes, props, `useState` e CSS separado.

## Como executar

1. Abra a pasta do projeto no VS Code.
2. Abra o terminal na pasta do projeto.
3. Execute `npm install`.
4. Execute `npm run dev`.
5. Abra no navegador o endereço exibido pelo Vite.

## Organização

- `src/App.jsx`: controla qual página será exibida e reúne os componentes.
- `src/components/`: contém os componentes da página inicial e do cadastro.
- `src/App.css`: estilos das páginas.
- `src/index.css`: configurações gerais.
- `src/assets/`: imagens usadas em ícones e logotipos.

## Observação sobre o cadastro

O formulário valida os campos no navegador e apresenta mensagens de erro ou sucesso. Os dados não são enviados a um servidor nem ficam salvos depois que a página é recarregada.
