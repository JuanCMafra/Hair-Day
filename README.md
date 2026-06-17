# Hair Day

Aplicação web para agendamento de cortes de cabelo.

## Descrição

Hair Day é um projeto front-end que permite selecionar uma data, escolher um horário disponível e cadastrar o nome do cliente para criar um agendamento. A aplicação utiliza um servidor JSON local para armazenar e exibir os agendamentos por período do dia.

## Funcionalidades

- Seleção de data mínima igual à data atual
- Exibição de horários disponíveis por períodos (manhã, tarde e noite)
- Cadastro de agendamento com nome do cliente
- Listagem de agendamentos por dia selecionado
- Exclusão de agendamento direto da lista

## Tecnologias

- JavaScript
- HTML
- CSS
- Webpack
- Babel
- json-server
- dayjs

## Instalação

1. Clone ou copie o projeto para a sua máquina.
2. No terminal, acesse a pasta do projeto:

```bash
cd "c:\FULL STACK - ROCKETSEAT\JS\Hair Day"
```

3. Instale as dependências:

```bash
npm install
```

## Execução

### Iniciar o servidor de dados

```bash
npm run server
```

O `json-server` será iniciado em `http://localhost:3333` usando o arquivo `server.json`.

### Iniciar o servidor de desenvolvimento

```bash
npm run dev
```

A aplicação será aberta no navegador em `http://localhost:3000`.

## Build de produção

Para gerar a build no diretório `dist`:

```bash
npm run build
```

## Estrutura do projeto

- `index.html` - template HTML principal
- `package.json` - dependências e scripts do npm
- `webpack.config.js` - configuração do Webpack
- `server.json` - dados de agendamento simulados
- `src/` - código-fonte da aplicação
  - `main.js` - ponto de entrada da aplicação
  - `modules/` - módulos de lógica de formulário e agendamento
  - `services/` - chamadas à API e configuração de servidor
  - `styles/` - arquivos CSS
  - `assets/` - imagens e ícones usados pela UI

## Observações

- O projeto usa `dayjs` para manipular datas.
- Os agendamentos são persistidos apenas no servidor local do `json-server`.
- O arquivo `server.json` já inclui alguns agendamentos de exemplo.

## Autor

- Juan Mafra
