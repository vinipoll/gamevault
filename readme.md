# 🎮 GameVault – Catálogo de Jogos Digitais

O **GameVault** é uma plataforma robusta desenvolvida para a exploração, avaliação e gerenciamento de jogos digitais. Este projeto foi construído do "absoluto zero", sem o uso de geradores automáticos, priorizando o domínio sobre a arquitetura e a aplicação prática da metodologia **TDD (Test-Driven Development)**.

## 🛠️ Tecnologias e Padrões
* **Runtime:** Node.js com sistema de módulos moderno **ESM** (`import/export`).
* **Framework Web:** Express.
* **View Engine:** EJS com **Express EJS Layouts** para estruturação profissional de páginas.
* **Banco de Dados:** MySQL com ORM **Sequelize**.
* **Testes:** **Vitest** (rápido e moderno) com cobertura de testes via motor V8.
* **Segurança:** Criptografia de senhas com **bcryptjs** e gestão de variáveis de ambiente com **dotenv**.
* **Middlewares:** Morgan (logging), Cookie-parser, Express-session e Connect-flash.

---

## 📋 Requisitos do Sistema

### 1. Requisitos Funcionais (RF)
* **RF01 - Cadastro e Autenticação:** O sistema deve permitir que usuários criem contas e realizem login de forma segura.
* **RF02 - Exploração de Jogos:** O usuário deve poder navegar por títulos organizados por categorias e gêneros.
* **RF03 - Favoritos e Avaliações:** O sistema deve permitir favoritar jogos e atribuir notas/avaliações às experiências.
* **RF04 - Sistema de Recomendação:** A plataforma deve sugerir jogos com base nas preferências do perfil do usuário.
* **RF05 - Dashboard Administrativo:** Painel de controle exclusivo para administradores gerenciarem a plataforma.
* **RF06 - Gestão de Conteúdo:** Administradores podem realizar o CRUD (criar, ler, atualizar e excluir) de jogos e categorias.
* **RF07 - Controle de Usuários:** Gerenciamento de permissões e moderação de contas por parte da administração.

### 2. Requisitos Não Funcionais (RNF)
* **RNF01 - Metodologia TDD:** O desenvolvimento deve ser estritamente guiado por testes, seguindo o ciclo **Red-Green-Refactor**.
* **RNF02 - Arquitetura Modular:** Organização do código por módulos independentes (Auth, Games, Admin, Interactions) para facilitar a manutenção.
* **RNF03 - Separação de Responsabilidades:** Divisão clara entre Controllers (lógica de rota) e Services (regras de negócio).
* **RNF04 - Segurança de Dados:** Proteção de informações sensíveis através de arquivos `.env` e criptografia de senhas.

---

## 🧪 Estrutura de Testes
Seguindo as convenções modernas de TDD, os testes estão localizados dentro de cada módulo:
* `src/modules/**/__tests__/`

### Comandos de Teste:
* **Executar Testes (Modo Watch):** `npm test`
* **Ver relatório de cobertura (Coverage):** `npm run test:coverage`
* **Interface Visual (UI):** `npm run test:ui`

---

## 🚀 Como Instalar e Rodar

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/vinipoll/gamevault.git](https://github.com/vinipoll/gamevault.git)
   
2. **Instale as dependências:**
   ```bash
   npm install
   
3. **Configure o Ambiente:**
   ```bash
   PORT=3000
   DB_NAME=gamevault_db
   DB_USER=seu_usuario
   DB_PASSWORD=sua_senha
   DB_HOST=localhost
   DB_PORT=3306
   SESSION_SECRET=sua_chave_secreta

4. **Inicie o servidor (Modo dev):**
   ```bash
   npm run dev
