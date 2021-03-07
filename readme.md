# Teste Técnico Back-end Rota Seguros

Esse repositório contém o teste técnico(back-end) referente ao processo seletivo da empresa rota seguros.
Que consiste no desenvolvimento de uma api rest de usuários desenvolvida em <strong>Node JS</strong>,  onde o usuário pode se cadastrar  como um user ou admin. O usuário do tipo admin poderá ter acesso as tanto as rotas de usuário quando as de admin.

## Como fazer o download do projeto.

 #### 1ª Opção (Observação é necessário ter o git instalado na maquina para executar essa opção)

<li> Utilize o comando  git clone https://github.com/Luke0195/Rota_Seguro_Teste_Tecnico_Backend.git   no seu terminal para fazer o download do repositório </li>

<li> Com o repositório clonado da sua maquina, basta extraiar a pasta baixada e abri-la no seu editor de código </li>

<li>  A maioria dos editores seguem  o seguinte modelo File > Open Folder > (arquivo do projeto descompactado) </li>

#### 2º Opção
<li>  Clique no botão verde(Code)  e depois clique no botão Download ZIP para ser capaz de fazer o download do  projeto compactado  </li>

<li> Com o projeto baixado em sua maquina basta extraiar o arquivo para o  seu local desejado e  abrir  projeto pelo seu editor de codigo </li>

## Gerenciadores de Pacotes (Yarn / Npm)


Antes de executar o projeto é necessario instalar as dependências  para que o projeto funcione.

#### YARN
Se você estiver utilizando o gerenciador de pacotes yarn , basta executar o comando yarn no terminal com o endereço referente a esse projeto.
Dica : Se você estiver utilizando o Vscode em um sistema operacional Linux ou Windows  o mesmo disponibiliza um terminal integrado  para executação dos comandos.

O comando para abrir o terminal é CTRL + SHIFT + P

#### NPM

Se você estiver utilizando o npm como gerenciador  de pacotes, o processo é um pouco diferente basta excluir o arquivo yarn.lock, após,  o arquivo ter sido deletado basta executar o comando npm install
para instalar as dependências necessárias.

### Script de Execução do projeto
#### Para executar a aplicação no yarn basta utilizar o comando yarn dev:server
#### Para executar a aplicação no npm basta utilizar o comando npx run dev:server



## Camadas da Aplicação
A aplicação foi divida em várias camadas cada uma contendo sua responsabilidade.

<strong> Models </strong> -> Representação de uma tabela no banco de dados.

<strong> Controllers </strong> -> Responsável pela regra de négocio da aplicação.

<strong> Database </strong> -> Responsável pela migrations(historico de versionamento) do banco de dados.

<strong> Middlewares </strong> -> Responsável pela interceptação de requisições e respostas.

<strong>  Repositories </strong> -> Responsável pela comunição do model  até a persistência das informações.

<strong> Routes </strong> -> Responsável pelas routas da aplicação.


### Rotas da Aplicação

 <strong>Método Post: /users </strong> -> será responsável por criar um novo usuário na aplicação

<strong>Método Post /sessions </strong> -> essa rota é responsável por retornar um token de autenticação.

<strong> Método Post /courser<strong> -> Essa rota é apenas para usuários logados retorna apenas uma mensagem aleatória

<strong> Método Post /courser<strong> -> Essa rota é apenas para admins logados retorna apenas uma mensagem aleatória


### Aviso Importante antes de executar aplicação

É necessário fazer uma pequena modificação no arquivo ormconfig.json, poís, ele ira precisar da senha do seu mysql e isso pode variar de máquina,  caso o seu mysql não tenha senha basta deixa-lo no como no exemplo abaixo.

{
  "type": "mysql",
  "host": "localhost",
  "port":3306,
  "username": "root",
  "password":"",
  "database":"teste",
  "entities": ["./src/models/*.ts"],

  "migrations":[
    "./src/database/migrations/*.ts"
  ],

  "cli":{
    "migrationsDir": "./src/database/migrations"
  }
}

### Features Abordados no desenvolvimento do test

<li>  Express </li>
<li> MySql </li>
<li> Typescript </li>
<li> Typeorm</li>
<li> Docker </li>
<li> JsonWebToken </li>
<li> Bcritpy </li>
<li> uuid </li>
