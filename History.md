# Teste GreenMile

### Requisitos cumpridos

## Linha de Raciocínio

- Criar Página de consulta de User
  - Fiz a interface
  -Criei uma Autenticação baseada nos dados que ficam guadados em Local Storage pelo Front, funcionou, porém não da maneira que eu queria.
- Criar Pagina do Perfil
  - A primeira coisa que fiz foi usar a api que usei para autenticação no login para também pegar os dados do usuário consultado.
  - Logo após criei o componente de mapa, encontrei algumas dificuldades com a API do Geocoder, pois tive que pegar a latitude e a longitude na API do Google PLaces utilizando o endereço que nos é fornecido pela API do Github, para só assim inserir no Mapa a marcação correta utilizando os dados que vieram do google places.
  - Já tinha em mente um layout a fazer, porém tive que mudar o layout, pois a Api do Maps não estava obedecendo de jeito nenhum as estilizações, e se obedecia ficava desconfigurada, mudei o Layout e configurei a API.
  - Criei o componente Repositories, nesse componente renderizo os repositórios com estrela, fiz um Map do vetor de Repositories e renderizei a lista.
  - Estilizei e inseri a função de dar uma estrela e remover a estrela do repositório.
  - Criei os testes unitários para Page de Login e de Profile, testando dentro de Profile os componentes Header, Map e Profile.
  - #### Header renderiza o apelido, avatar, bio e URL do usuário.
  - #### Map renderiza o mapa e o marker com a localidade que o usuário deixou disponível nas informações do Repositório.
  - #### Profile renderiza um elemento com o Nome do repositório curtido e com o nome do dono do repositório também, além de renderizar a estrela que corresponde à interação de clique do usuário.
  - #### Foi implementado o carregamento enquanto a api não dá a resposta da requisição, porém como a resposta da API é muito rápida, quase não dá pra perceber.


---

# Seguem abaixo os comandos para rodar a aplicação e também os testes unitários

## Lembrando que antes de rodar esses comandos se deve rodar o comando `yarn`, esse comando vai instalar os pacotes necessários para se rodar a aplicação.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

