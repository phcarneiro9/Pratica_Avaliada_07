# 💻 Tech Nexus

Landing page institucional da startup fictícia **Tech Nexus**, desenvolvida como parte da **Prática Avaliada 07**.

O projeto foi construído com foco em **responsividade, componentização, navegação SPA e boas práticas de organização em React**.

## 🚀 Tecnologias utilizadas

* React
* TypeScript
* Vite
* Tailwind CSS v4
* React Router DOM
* Phosphor Icons

## 📱 Responsividade

A aplicação foi desenvolvida para se adaptar a diferentes tamanhos de tela:

* Smartphones
* iPhones
* Tablets e iPads
* Notebooks
* Desktop

Em dispositivos menores, o layout é reorganizado em coluna e a Navbar utiliza um **menu hambúrguer responsivo**.

## 📂 Estrutura do projeto

```text
src/
├── components/
│   ├── navbar/
│   │   └── Navbar.tsx
│   └── footer/
│       └── Footer.tsx
│
├── pages/
│   ├── home/
│   │   └── Home.tsx
│   ├── about/
│   │   └── About.tsx
│   └── contact/
│       └── Contact.tsx
│
├── App.tsx
├── main.tsx
└── index.css
```

## 🧭 Rotas

| Rota       | Página  |
| ---------- | ------- |
| `/`        | Home    |
| `/about`   | Sobre   |
| `/contact` | Contato |

## ✨ Funcionalidades

* Navbar fixa
* Navegação entre páginas sem recarregar a aplicação
* Menu hambúrguer para dispositivos móveis
* Página inicial com seção Hero
* Página Sobre com apresentação institucional
* Página de Contato com formulário
* Footer presente em todas as páginas
* Ícones de redes sociais
* Imagens hospedadas no ImageKit
* Layout responsivo

## ▶️ Como executar o projeto

Clone o repositório:

```bash
git clone https://github.com/phcarneiro9/Pratica_Avaliada_07.git
```

Entre na pasta do projeto:

```bash
cd Pratica_Avaliada_07
```

Instale as dependências:

```bash
npm install
```

Execute a aplicação:

```bash
npm run dev
```

Depois, acesse no navegador:

```text
http://localhost:5173
```

## 📦 Build de produção

Para gerar a versão de produção:

```bash
npm run build
```

Para visualizar o build localmente:

```bash
npm run preview
```

## 🎨 Projeto

A **Tech Nexus** é uma empresa fictícia criada exclusivamente para fins educacionais.

A proposta da landing page é apresentar uma empresa de tecnologia moderna, com foco em inovação, transformação digital e soluções empresariais.

## 👨‍💻 Autor

**Patrick Carneiro**

GitHub: [phcarneiro9](https://github.com/phcarneiro9)

---

Desenvolvido para a **Prática Avaliada 07**.
