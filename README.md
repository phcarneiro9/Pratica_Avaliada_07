# Tech Nexus — Landing Page Institucional

Landing page da startup fictícia **TechNexus**, construída com React + TypeScript + Vite,
estilizada com Tailwind CSS e navegação com React Router DOM.

## Stack

- [Vite](https://vitejs.dev/)
- [React 18](https://react.dev/) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/)
- [React Router DOM](https://reactrouter.com/)
- [Phosphor Icons](https://phosphoricons.com/)

## Estrutura de pastas

```
src/
  components/
    navbar/Navbar.tsx
    footer/Footer.tsx
  pages/
    home/Home.tsx
    about/About.tsx
    contact/Contact.tsx
  App.tsx
  main.tsx
  index.css
```

## Rotas

| Rota      | Página |
|-----------|--------|
| `/`       | Home   |
| `/about`  | Sobre  |
| `/contact`| Contato|

## Como rodar

```bash
npm install
npm run dev
```

Acesse `http://localhost:5173`.

## Build de produção

```bash
npm run build
npm run preview
```
Criador: Patrick Carneiro
GitHub: 