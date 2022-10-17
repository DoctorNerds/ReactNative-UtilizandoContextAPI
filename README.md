# ⚛️ React Native: Utilizando Context API

Esse é o projeto do curso **Utilizando Context API** da formação em **React Native** estudado pelo Fábio Mori na [Alura](https://www.alura.com.br/).

## 📱 Projeto

O objetivo deste projeto é criar um aplicativo para um e-commerce onde podemos selecionar os produtos a serem comprados e finalizar a compra no carrinho. Esta aplicaçáo passa pela fase de verificação de login, já que os dados como "últimos vistos" será armazenada e mostrada na tela, já que as mesmas informações serão armazenadas por meio de uma web API implementada. Existe também a opção temática de cores, implementada em memória local do dispositivo, onde o usuário pode escolher entre o tema "escuro" e o tema "claro". A aplicação deste projeto para a Escola Matriz está em criar um aplicativo de e-commerce para venda de produtos B2C dos projetos MatrizKIDS, Matriz4YOU e MatrizDeDADOS. Os produtos listados no aplicativo são:
- Bootcamp Matriz4YOU: uma imersão de 3 dias onde os alunos (a partir de 50 anos de idade) irão se alfabetizar digitalmente, aprendendo a utilizar aplicativos úteis para o dia-a-dia (como email, aplicativos de transito, comida, vídeos e mensagem), recursos de busca da internet, redes sociais, marketing digital, se proteger de fake news e golpes, e também como criar uma renda a partir da internet.
- Consultoria de dados: o MatrizDeDADOS é um projeto voltado para pequenas empresas utilizarem dados para o crescimento do seu negócio e aumento de seu lucro. A consultoria é um serviço onde vamos verificar as fontes de dados do negócio, identificar os índices de desempenho, sugerir KPIs, identificar pontos de oportundiade, ensinar a mentalidade data driven para empresas e mostrar como utilizar estes dados em conjunto com a programação para criar uma poderosa ferramenta de análise de dados que irá melhor o desempenho da empresa.
- Palestra Escola Matriz: voltada para escolas de ensifo fundamental, a palestra fala sobre a importancia da educação criativa presente em sala de aula, utilizando da computação criativa para que as crianças aprendam todas as disciplinas, como Matemática, História, Português, Inglês, Geografia, Ciências, dentre outras. O público alvo da palestra são professores do ensino fundamental, diretores de escolas e pais com filhos no ensino fundamental.
- Camiseta: a camiseta mais bonita da educação está a venda. Com um tecido super confortável para estudar, curtir um dia tranquilo ou até mesmo praticar esportes.
- eBook MatrizKIDS: todo conteúdo que é ensinado no curso MatrizKIDS: a linguagem do futuro, agora é disponível em formato digital para as crianças lerem, consultarem quando for preciso, quantas vezes for preciso e aprender a habildiade do futuro.


Veja alguns prints de como ficou a aplicação.

![Screenshot_1666024833]()
![Screenshot_1666025173]()
![Screenshot_1666025176]()
![Screenshot_1666025186]()
![Screenshot_1666025194]()
![Screenshot_1666025207]()
![Screenshot_1666025214]()
![Screenshot_1666025221]()
![Screenshot_1666025224]()
![Screenshot_1666025233]()
![Screenshot_1666025236]()
![Screenshot_1666025241]()
![Screenshot_1666025243]()
![Screenshot_1666025250]()

<img src="https://user-images.githubusercontent.com/101336111/196242844-94490bf3-8cf0-4e7b-806c-c6912b56cd81.png" width="300" height="600"> <img src="https://user-images.githubusercontent.com/101336111/196242848-a9f11600-efab-46de-b8ab-af417035476b.png" width="300" height="600"> <img src="https://user-images.githubusercontent.com/101336111/196242857-efc0a5dd-497a-4044-9345-5bf1cf172467.png" width="300" height="600"> <img src="https://user-images.githubusercontent.com/101336111/196242866-a464ca88-fd2e-45e2-a59b-410aba22dc37.png" width="300" height="600"> <img src="https://user-images.githubusercontent.com/101336111/196242880-10fba98c-ba68-4a69-b8bb-655ad2b67153.png" width="300" height="600"> <img src="https://user-images.githubusercontent.com/101336111/196242888-562501b0-d4d7-48c9-b5e7-8229d9e53040.png" width="300" height="600"> <img src="https://user-images.githubusercontent.com/101336111/196242898-b5fbfe13-973e-40ae-9efb-3ff6cb6cffb8.png" width="300" height="600"> <img src="https://user-images.githubusercontent.com/101336111/196242907-fdc1f7ed-3012-4b04-bd72-d1570fae04d1.png" width="300" height="600"> <img src="https://user-images.githubusercontent.com/101336111/196242914-23883434-6a63-4e47-917f-6f65566c5456.png" width="300" height="600"> <img src="https://user-images.githubusercontent.com/101336111/196242919-e7428d79-abc1-47da-92f4-8825bc1be64e.png" width="300" height="600"> <img src="https://user-images.githubusercontent.com/101336111/196242937-fb9a0881-2fe0-4080-88d8-8892e0658537.png" width="300" height="600"> <img src="https://user-images.githubusercontent.com/101336111/196242945-740ebe9e-a604-475a-b32d-95a60fc5c782.png" width="300" height="600"> <img src="https://user-images.githubusercontent.com/101336111/196242954-12eb165a-7e6d-48e1-8f27-51d66214a357.png" width="300" height="600"> <img src="https://user-images.githubusercontent.com/101336111/196242959-f63625fc-ab11-414f-8085-8b685b6acb1c.png" width="300" height="600">











## :information_source: O que é o AluraCommerce?

O AluraCommerce é uma aplicação feita em React Native que simula um e-commerce. A ideia é usar o Context API, do react, para ver a vantagem de se ter estados globais na aplicação. Também é usado o AsyncStorage e uma Web API para ter a persistência dos dados.

Esse projeto é utilizado na formação base de React Native da plataforma da Alura.


<h1 align="center">
    <img alt="Demonstracao" title="Demonstracao" src=".images/demo.gif" width="400px" />
</h1>


## :rocket: Tecnologias

Esse projeto foi desenvolvido com a utilização das seguintes tecnologias:
- [React Native][rn]
- [Expo][expo]

## :information_source: Como usar

Para copiar e executar essa aplicação, você precisa de três pré-requisitos: [Git](https://git-scm.com), [Node.js][nodejs] + [Yarn][yarn] intalados no seu computador.

No terminal, digite os comandos a seguir:

### Baixar e instalar o projeto

```bash
# Clonar esse repositório
$ git clone https://github.com/alura-cursos/react-native-context-api.git

# Vá para o ropositório
$ cd AluraCommerce

# Instale as dependências
$ npm install
```

### Executar o Mobile

```bash
# Execute em outro terminal (dentro da pasta AluraCommerce)
$ expo start
```

### Executar a Web API

```bash
# Execute em outro terminal (dentro da pasta AluraCommerce)
# Lembre-se de alterar o endereco ip (192.168.15.43) para o do seu computador!
$ json-server --watch --host 192.168.15.43 db.json
```



Espero que você utilize ao máximo deste projeto para se aprimorar! E se quiser dar um salve, estou lá no LinkedIn [André Oliveira Cunha](https://www.linkedin.com/in/andr%C3%A9-oliveira-cunha-b26b3a156/). :wave: 

[nodejs]: https://nodejs.org/
[expo]: https://docs.expo.dev/
[rn]: https://facebook.github.io/react-native/
[yarn]: https://yarnpkg.com/
