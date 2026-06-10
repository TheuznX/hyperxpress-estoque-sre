```markdown
# 📦 HyperXpress - Sistema de Gestão de Inventário

Aplicação Full Stack de alta performance desenvolvida para o monitoramento, controle e gestão de componentes de hardware e periféricos competitivos. O ecossistema opera em uma infraestrutura 100% containerizada, contando com testes automatizados e uma esteira ativa de CI/CD.

## 👥 Equipe
- **Matheus** - DevOps, Infraestrutura e Frontend
- **Maria Clara** - Backend e Integração de Banco de Dados

## 🛠️ Tecnologias e Camadas Utilizadas
- **Frontend:** React 18 + Vite (Dashboard Dinâmico e Responsivo)
- **Backend:** Node.js + Express (API RESTful estruturada)
- **Banco de Dados:** PostgreSQL 15 (Persistência de Dados Relacional)
- **DevOps & SRE:** Docker + Docker Compose (Orquestração e Redes Isoladas)
- **Ferramenta DevOps Extra:** Adminer (Interface Gráfica de Gerenciamento de Banco)
- **Qualidade & CI:** Jest, Supertest & GitHub Actions (Validação Automatizada)

## 📁 Estrutura do Repositório (Monorepo)
```text
trabalho-devops/
├── .github/workflows/
│   └── ci.yml             # Pipeline de integração contínua (Testes e Build)
├── backend/
│   ├── src/               # Código-fonte da API (Rotas e Regras de Negócio)
│   ├── tests/             # Testes de integração com Jest e Supertest
│   └── Dockerfile         # Configuração da imagem do Backend
├── database/
│   └── init.sql           # Script de criação de tabelas e carga inicial de dados
├── frontend/
│   ├── src/               # Interface do usuário em React
│   └── Dockerfile         # Configuração da imagem do Frontend
├── docker-compose.yml     # Orquestrador oficial de containers, volumes e redes
└── README.md              # Documentação oficial do projeto

```
## 🚀 Como Executar e Testar a Infraestrutura
Para homologar e rodar todo o ambiente localmente, é necessário apenas ter o **Docker** e o **Docker Compose** instalados na máquina.
### 1. Subindo os Containers
Na raiz do projeto (onde se encontra o arquivo docker-compose.yml), execute o comando abaixo no terminal para construir as imagens e iniciar os serviços em segundo plano:
```bash
docker compose up --build -d

```
### 2. Portas e Serviços Disponíveis para Validação
Assim que a inicialização for concluída, o professor poderá testar os seguintes endpoints e plataformas:
 * **Dashboard Frontend (React):** http://localhost:5173
   *Interface moderna que consome a API do backend e renderiza em tempo real o estoque de hardwares como o processador Ryzen 7 5700X, placa-mãe TUF B550M e mouses/teclados competitivos.*
 * **API REST Backend:** http://localhost:3000/api/produtos
   *Retorna o payload em formato JSON com todos os itens cadastrados diretamente do banco de dados.*
 * **Healthcheck Geral:** http://localhost:3000/health
   *Endpoint estratégico de SRE para checagem rápida de integridade da API (Retorna HTTP 200 OK).*
 * **Adminer (Visualizador de Banco DevOps):** http://localhost:8080
   *Interface DevOps para administração do banco. Para acessar e testar a conexão, utilize as seguintes credenciais:*
   * **Sistema:** PostgreSQL
   * **Servidor:** db
   * **Usuário/Senha/Banco:** *Conforme configurado nas variáveis de ambiente do arquivo .env*
### 3. Executando a Suíte de Testes Localmente
Caso queira disparar os testes de integração do Jest fora do fluxo do GitHub Actions, acesse a pasta do backend e execute:
```bash
cd backend
npm install
npm run test

```
## ⚙️ Padrões Adotados de Engenharia (Conventional Commits)
O histórico de commits do projeto foi segmentado seguindo rigorosamente os padrões de mercado para rastreabilidade:
 * feat: Desenvolvimento de novas funcionalidades ou telas.
 * fix: Correção de bugs ou falhas estruturais.
 * chore: Ajustes de infraestrutura, arquivos de configuração ou Docker.
 * ci: Modificações nos arquivos de pipeline automatizada do GitHub Actions.
 * docs: Alterações na documentação e guias do repositório.
*Desenvolvido para fins acadêmicos. Disciplina de Construção de Frontend e DevOps/SRE · 2026*
```

```