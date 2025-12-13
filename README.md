# DevBurguer Interface

## Visão Geral

**DevBurguer Interface** é a camada cliente de um sistema completo de gestão de hamburgueria digital, desenvolvida com **React e Vite**.  
Ela provê um painel de administração para gerenciar produtos, categorias e pedidos, consumindo uma API REST backend.

---
## Demonstração da Interface

Abaixo estão exemplos visuais da interface do **DevBurguer Interface**, demonstrando a adaptação para diferentes dispositivos.

### 📱 Versão Mobile
<p align="center">
  <img src="src/assets/devburgerMockupsmartphone.png" width="900" />
</p>

### 💻 Versão Desktop

<p align="center">
  <img src="src/assets/devburgerMockupDescktop.png" width="700" />
</p>


## Problema e Solução

Em sistemas de restaurante digital, é necessária uma **interface intuitiva** que permita à equipe operacional:

- Visualizar e organizar o catálogo de produtos;
- Categorizar itens do menu;
- Acompanhar e gerenciar pedidos realizados pelos clientes.

Esta interface resolve essas necessidades fornecendo uma **SPA responsiva**, integrada a uma API backend.

---

## Tecnologias

O projeto utiliza tecnologias modernas de frontend:

- **React** — construção de interfaces reativas
- **Vite** — bundler rápido para desenvolvimento
- **JavaScript (ES6+)**
- **ESLint** e **Prettier** — padronização e qualidade de código

---

## Funcionalidades Principais

- Listagem de produtos cadastrados;
- Gestão de categorias;
- Visualização e atualização de pedidos;
- Consumo de API REST para operações CRUD;

---

## Como Executar Localmente

### Pré-requisitos

- Node.js (>= 16.x)
- npm ou yarn

### Passos

```bash
git clone https://github.com/GilvaneAlves/DevBurguer-Interface.git
cd DevBurguer-Interface
npm install
# ou
yarn install
npm run dev
# ou
yarn dev
```

Acesse:
```
http://localhost:5173/
```

---

## Estrutura de Pastas (Resumo)

```text
DevBurguer-Interface/
│
├─ public/
│  └─ Arquivos estáticos
│
├─ src/
│  ├─ components/        # Componentes React reutilizáveis
│  ├─ services/          # Serviços de comunicação com a API
│  ├─ pages/             # Páginas da aplicação
│  └─ App.jsx            # Componente raiz
│
├─ .eslintrc.js           # Configuração do ESLint
├─ .prettierrc.js         # Configuração do Prettier
├─ vite.config.js         # Configuração do Vite
└─ package.json           # Dependências e scripts
```

---

## Possíveis Melhorias Futuras (Roadmap)

- Testes automatizados (Jest / React Testing Library)
- Migração para TypeScript
- Documentação da API (Swagger)
- Autenticação de usuários
- Internacionalização (i18n)

---

## Licença

MIT License
