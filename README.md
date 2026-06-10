# 📦 HyperXpress - Sistema de Gestão de Inventário

Aplicação Full Stack de alta performance para monitoramento e controle de componentes de hardware e periféricos competitivos, operando em infraestrutura 100% containerizada com esteira ativa de CI/CD.

## 🛠️ Tecnologias e Camadas
- **Frontend:** React 18 + Vite (Dashboard Responsivo)
- **Backend:** Node.js + Express (API REST)
- **Banco de Dados:** PostgreSQL 15 (Persistência Ativa)
- **DevOps/SRE:** Docker, Docker Compose & Adminer Database Viewer
- **Qualidade & CI:** Jest, Supertest & GitHub Actions

## 📁 Estrutura do Repositório
```text
trabalho-devops/
├── .github/workflows/
│   └── ci.yml
├── backend/
│   ├── src/ (app.js, server.js)
│   ├── tests/ (api.test.js)
│   └── Dockerfile
├── database/
│   └── init.sql
├── frontend/
│   ├── src/ (App.jsx, main.jsx)
│   └── Dockerfile
├── docker-compose.yml
└── README.md