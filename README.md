# Baixada Santista News

Uma aplicação web para notícias da região da Baixada Santista em São Paulo, construída com Next.js, TypeScript, Prisma e PostgreSQL.

## 🚀 Tecnologias

- **Next.js 14** - Framework React
- **TypeScript** - Tipagem estática
- **Prisma** - ORM para banco de dados
- **PostgreSQL** - Banco de dados
- **Tailwind CSS** - Framework CSS
- **Docker** - Containerização
- **ESLint + Prettier** - Linting e formatação

## 🏃‍♂️ Execução Rápida com Docker

Para rodar toda a aplicação com um único comando:

```bash
npm install
# Copie o arquivo de ambiente
cp .env.example .env

# Execute com Docker (PostgreSQL + Aplicação)
npm run docker:dev
```

A aplicação estará disponível em: http://localhost:3000

## 🔧 Configuração Manual

Se preferir configurar sem Docker:

### 1. Instalar dependências
```bash
npm install
```

### 2. Configurar PostgreSQL
```bash
# Instalar PostgreSQL localmente ou usar Docker apenas para o banco
docker run --name postgres-news -e POSTGRES_USER=admin -e POSTGRES_PASSWORD=password -e POSTGRES_DB=baixada_santista_news -p 5432:5432 -d postgres:15
```

### 3. Configurar variáveis de ambiente
```bash
cp .env.example .env
# Edite o arquivo .env com suas configurações
```

### 4. Executar migrações do banco
```bash
npm run db:generate
npm run db:push
```

### 5. Executar em desenvolvimento
```bash
npm run dev
```
