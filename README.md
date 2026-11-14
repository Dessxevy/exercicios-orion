# Exercícios de Docker – Orion Bootcamp

Este repositório reúne os exercícios desenvolvidos durante o módulo de Docker do Orion Bootcamp, abordando criação de imagens, containers, Docker Compose, persistência de dados e isolamento de ambientes.

## Pré-requisitos

- Docker Desktop instalado e em execução.
- Git instalado.
- Terminal para executar os comandos.

## Estrutura do projeto

```text
docker/
├── exercicio-1/
│   ├── docker-compose.yml
│   └── ...
├── exercicio-2/
│   ├── docker-compose.yml
│   └── ...
├── exercicio-3/
│   ├── api/
│   ├── docker-compose.dev.yml
│   └── docker-compose.prod.yml
├── exercicio-extra/
│   ├── api/
│   ├── .env.example
│   └── docker-compose.yml
├── .gitignore
└── README.md
```

**Importante:** os comandos dos exercícios 1, 2 e 3 devem ser executados a partir da pasta `docker`.

## Exercício 1

Para executar:

```bash
docker compose -f exercicio-1/docker-compose.yml up -d --build
```

Para verificar os containers:

```bash
docker compose -f exercicio-1/docker-compose.yml ps
```

Para encerrar:

```bash
docker compose -f exercicio-1/docker-compose.yml down
```

## Exercício 2

Para executar:

```bash
docker compose -f exercicio-2/docker-compose.yml up -d --build
```

Para verificar os containers:

```bash
docker compose -f exercicio-2/docker-compose.yml ps
```

Para encerrar:

```bash
docker compose -f exercicio-2/docker-compose.yml down
```

## Exercício 3 – Ambientes de desenvolvimento e produção

O exercício utiliza configurações independentes para os ambientes de desenvolvimento e produção, com containers, redes e volumes separados.

### Ambiente de desenvolvimento

```bash
docker compose -f exercicio-3/docker-compose.dev.yml up -d --build
```

Acesso: http://localhost:3001

### Ambiente de produção

```bash
docker compose -f exercicio-3/docker-compose.prod.yml up -d --build
```

Acesso: http://localhost:3000

Para verificar os containers:

```bash
docker ps
```

Para encerrar cada ambiente:

```bash
docker compose -f exercicio-3/docker-compose.dev.yml down
```

```bash
docker compose -f exercicio-3/docker-compose.prod.yml down
```

## Desafio Extra

O desafio utiliza Docker Compose para executar uma API Node.js, um banco de dados PostgreSQL e o Adminer.

### Configuração do ambiente

A partir da pasta `docker`, entre na pasta do desafio:

```bash
cd exercicio-extra
```

Copie o arquivo de exemplo para criar seu arquivo de configuração:

```bash
cp .env.example .env
```

O arquivo `.env` contém as variáveis necessárias para configurar a conexão com o banco de dados.

**Importante:** o arquivo `.env` contém configurações locais e não deve ser enviado ao GitHub. O arquivo `.env.example` serve como modelo para configurar o ambiente.

### Executando o projeto

Já dentro da pasta `exercicio-extra`, execute:

```bash
docker compose up -d --build
```

Para verificar os containers:

```bash
docker compose ps
```

### Acessos

- API: http://localhost:3000
- Health Check: http://localhost:3000/health
- Adminer: http://localhost:8080

### Conexão com o banco pelo Adminer

- Sistema: PostgreSQL
- Servidor: db
- Usuário: admin
- Senha: 123456
- Banco de dados: desafio_extra

### Encerrando os containers

```bash
docker compose down
```

---

Desenvolvido como parte das atividades práticas do Orion Bootcamp.