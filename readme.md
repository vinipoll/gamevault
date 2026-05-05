# 🎮 GameVault – Catálogo de Jogos Digitais

O **GameVault** é uma plataforma robusta desenvolvida para a exploração, avaliação e gerenciamento de jogos digitais[cite: 1]. Este projeto foi construído do "absoluto zero", sem o uso de geradores automáticos, priorizando o domínio sobre a arquitetura e a aplicação prática da metodologia **TDD (Test-Driven Development)**.

## 🛠️ Tecnologias e Padrões
* **Runtime:** Node.js com sistema de módulos moderno **ESM** (`import/export`).
* **Framework Web:** Express.
* **View Engine:** EJS com **Express EJS Layouts** para estruturação profissional de páginas.
* **Banco de Dados:** MySQL com ORM **Sequelize**.
* **Testes:** **Vitest** (rápido e moderno) com cobertura de testes via motor V8[cite: 1, 2].
* **Segurança:** Criptografia de senhas com **bcryptjs** e gestão de variáveis de ambiente com **dotenv**[cite: 1, 2].
* **Middlewares:** Morgan (logging), Cookie-parser, Express-session e Connect-flash[cite: 1, 2].

---

## 📋 Requisitos do Sistema

### 1. Requisitos Funcionais (RF)
* **RF01 - Cadastro e Autenticação:** O sistema deve permitir que usuários criem contas e realizem login de forma segura[cite: 1].
* **RF02 - Exploração de Jogos:** O usuário deve poder navegar por títulos organizados por categorias e gêneros[cite: 1].
* **RF03 - Favoritos e Avaliações:** O sistema deve permitir favoritar jogos e atribuir notas/avaliações às experiências[cite: 1].
* **RF04 - Sistema de Recomendação:** A plataforma deve sugerir jogos com base nas preferências do perfil do usuário[cite: 1].
* **RF05 - Dashboard Administrativo:** Painel de controle exclusivo para administradores gerenciarem a plataforma[cite: 1].
* **RF06 - Gestão de Conteúdo:** Administradores podem realizar o CRUD (criar, ler, atualizar e excluir) de jogos e categorias[cite: 1].
* **RF07 - Controle de Usuários:** Gerenciamento de permissões e moderação de contas por parte da administração[cite: 1].

### 2. Requisitos Não Funcionais (RNF)
* **RNF01 - Metodologia TDD:** O desenvolvimento deve ser estritamente guiado por testes, seguindo o ciclo **Red-Green-Refactor**[cite: 1, 2].
* **RNF02 - Arquitetura Modular:** Organização do código por módulos independentes (Auth, Games, Admin, Interactions) para facilitar a manutenção[cite: 1, 2].
* **RNF03 - Separação de Responsabilidades:** Divisão clara entre Controllers (lógica de rota) e Services (regras de negócio)[cite: 1, 2].
* **RNF04 - Segurança de Dados:** Proteção de informações sensíveis através de arquivos `.env` e criptografia de senhas[cite: 1, 2].

---

## 🧪 Estrutura de Testes
Seguindo as convenções modernas de TDD, os testes estão localizados dentro de cada módulo[cite: 1, 2]:
* `src/modules/**/__tests__/`

### Comandos de Teste:
* **Executar Testes (Modo Watch):** `npm test`[cite: 1, 2]
* **Ver relatório de cobertura (Coverage):** `npm run test:coverage`[cite: 1, 2]
* **Interface Visual (UI):** `npm run test:ui`[cite: 1, 2]

---

## 🚀 Como Instalar e Rodar

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/vinipoll/gamevault.git](https://github.com/vinipoll/gamevault.git)