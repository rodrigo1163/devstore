# 🛍️ DevStore

Uma loja virtual construída com **Next.js 15** focada no aprendizado e implementação de funcionalidades avançadas do framework, incluindo App Router, Server Components, cache de dados, e integração com testes E2E usando Cypress. O projeto prioriza as capacidades técnicas do Next.js e workflows de desenvolvimento modernos.

![Next.js](https://img.shields.io/badge/Next.js-15.5.5-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.1.0-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Funcionalidades Técnicas

- 🚀 **Next.js 15 App Router** - Implementação completa do novo sistema de roteamento
- ⚡ **Server Components** - Renderização no servidor para melhor performance
- 🔄 **Data Fetching** - Cache inteligente com `revalidate` e `generateStaticParams`
- 🔍 **Sistema de Busca** - Implementação de busca com redirecionamento e cache
- 🛒 **Context API** - Gerenciamento de estado do carrinho de compras
- 🧪 **Testes E2E** - Pipeline completo de testes automatizados com Cypress
- 🔧 **TypeScript** - Tipagem estática e validação com Zod
- 🏗️ **CI/CD** - Workflow GitHub Actions para testes automatizados
- 📦 **Turbopack** - Build e desenvolvimento otimizados
- 🌐 **API Integration** - Integração com APIs externas e validação de dados

## 🚀 Tecnologias Utilizadas

### Frontend
- **Next.js 15** - Framework React com App Router
- **React 19** - Biblioteca de interface de usuário
- **TypeScript** - Superset do JavaScript com tipagem estática
- **Tailwind CSS 4** - Framework CSS utilitário
- **Lucide React** - Ícones modernos e otimizados

### Ferramentas de Desenvolvimento
- **Biome** - Linter e formatador de código
- **Cypress** - Testes end-to-end
- **T3 Env** - Validação de variáveis de ambiente
- **Zod** - Validação de esquemas TypeScript

### Infraestrutura
- **GitHub Actions** - CI/CD para testes automatizados
- **Vercel** - Deploy e hospedagem (configurado)

## 📁 Estrutura do Projeto

```
devstore/
├── src/
│   ├── app/                    # App Router do Next.js
│   │   ├── (store)/           # Grupo de rotas da loja
│   │   │   ├── (home)/        # Página inicial
│   │   │   ├── search/        # Página de busca
│   │   │   └── product/       # Páginas de produtos
│   │   ├── api/               # API Routes
│   │   └── globals.css        # Estilos globais
│   ├── components/            # Componentes reutilizáveis
│   ├── contexts/              # Contextos React (Carrinho)
│   ├── data/                  # Tipos e API
│   └── env.ts                 # Configuração de ambiente
├── cypress/                   # Testes E2E
├── public/                    # Arquivos estáticos
└── .github/workflows/         # GitHub Actions
```

## 🛠️ Instalação e Configuração

### Pré-requisitos
- Node.js 18+ 
- pnpm (recomendado) ou npm/yarn

### 1. Clone o repositório
```bash
git clone https://github.com/rodrigo1163/devstore.git
cd devstore
```

### 2. Instale as dependências
```bash
pnpm install
# ou
npm install
```

### 3. Configure as variáveis de ambiente
Crie um arquivo `.env.local` na raiz do projeto:

```env
APP_URL=http://localhost:3000
NEXT_PUBLIC_API_BASE_URL=https://sua-api-url.com
```

### 4. Execute o servidor de desenvolvimento
```bash
pnpm dev
# ou
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) para ver a aplicação.

## 📜 Scripts Disponíveis

```bash
# Desenvolvimento
pnpm dev          # Inicia o servidor de desenvolvimento com Turbopack
pnpm build        # Constrói a aplicação para produção
pnpm start        # Inicia o servidor de produção

# Qualidade de Código
pnpm lint         # Executa o linter (Biome)
pnpm format       # Formata o código automaticamente

# Testes
pnpm test         # Executa os testes E2E com Cypress (headless)
pnpm test:open    # Abre a interface do Cypress para testes interativos
```

## 🧪 Testes

O projeto utiliza Cypress para testes end-to-end automatizados:

```bash
# Executar testes (headless)
pnpm test

# Abrir interface do Cypress para testes interativos
pnpm test:open
```

Os testes cobrem:
- ✅ Busca de produtos
- ✅ Navegação entre páginas
- ✅ Funcionalidades do carrinho
- ✅ Responsividade

## 🚀 Deploy

### Vercel (Recomendado)
1. Conecte seu repositório ao Vercel
2. Configure as variáveis de ambiente
3. Deploy automático a cada push

### Outras Plataformas
```bash
pnpm build
pnpm start
```

## 🎯 Objetivos do Projeto

Este projeto foi desenvolvido com foco no **aprendizado e implementação de funcionalidades avançadas do Next.js**, não na estilização da UI. Os principais objetivos incluem:

- **Aprender Next.js 15** - App Router, Server Components, e novas funcionalidades
- **Implementar Workflows** - CI/CD com GitHub Actions e testes automatizados
- **Praticar Testes E2E** - Cypress para testes de integração completos
- **Gerenciar Estado** - Context API e padrões de estado em React
- **Otimizar Performance** - Cache, revalidação e otimizações do Next.js
- **Integrar APIs** - Fetch de dados, validação com Zod e tratamento de erros

## 🔧 Implementações Técnicas Detalhadas

### Next.js 15 App Router
- **Route Groups** - Organização de rotas com `(store)` e `(home)`
- **Server Components** - Renderização no servidor para melhor performance
- **generateStaticParams** - Geração estática de páginas de produtos
- **generateMetadata** - Metadados dinâmicos para SEO

### Data Fetching e Cache
- **API Integration** - Cliente HTTP customizado com validação de ambiente
- **Cache Strategy** - `revalidate: 60 * 60` para cache de 1 hora
- **Static Generation** - Páginas estáticas para produtos em destaque
- **Error Handling** - Tratamento de erros em requisições

### Testes E2E com Cypress
- **Test Suites** - Cobertura de funcionalidades críticas
- **GitHub Actions** - Pipeline de CI/CD automatizado
- **Environment Variables** - Configuração de ambientes de teste
- **Custom Commands** - Comandos personalizados para reutilização

### Gerenciamento de Estado
- **Context API** - Carrinho de compras com React Context
- **TypeScript** - Tipagem completa de estados e ações
- **Zod Validation** - Validação de esquemas de dados
- **Environment Config** - Validação de variáveis de ambiente

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

Desenvolvido com ❤️ por [Seu Nome](https://github.com/rodrigo1163)

---

⭐ Se este projeto te ajudou, considere dar uma estrela!
