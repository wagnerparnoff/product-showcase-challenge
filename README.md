# Product Showcase Challenge

Aplicação web desenvolvida para exibir um catálogo de ofertas com funcionalidades de filtragem e paginação, construído com React, vite, css

## Funcionalidades

- **Catálogo de Ofertas**: Exibição de produtos em um layout de grade responsivo.
- - **Filtragem**:
  - **Por Categoria**: Selecione categorias específicas para achar produtos.
  - **Por Faixa de Preço**: Defina valores mínimos e máximos para encontrar produtos.
- **Paginação**: Navegação distribuída entre páginas.

## Instalação

Siga os passos abaixo para configurar o projeto localmente:

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/product-showcase-challenge.git
   ```

2. **Acesse o diretório do projeto**
   ```bash
   cd product-showcase-challenge
   ```

3. **Instale as dependências**
   ```bash
   npm install
   ```

## Como Executar

Para iniciar o ambiente de desenvolvimento local:

```bash
npm run dev
```

## Estrutura do Projeto

A estrutura de pastas foi organizada para facilitar a escalabilidade e manutenção:

```|
src/
 / components/       # Componentes (FiltersBar, ProductCard, Pagination, etc.)
 /  hooks/            # Hooks para lógica de negócios (useProducts, useFilters)
 /  pages/            # Páginas/Rotas da aplicação (Offers)
 /  services/         # Integração com API
 /  App.jsx           # Componente raiz e definição de rotas
 /  main.jsx          # Ponto de entrada da aplicação
```
