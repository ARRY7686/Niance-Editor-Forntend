# Niance Editor Frontend

This is the frontend for the Niance Editor, a web-based code editor built with React and TypeScript.

## Project Structure
```
├── .github/
│   └── ISSUE_TEMPLATE/
│       ├── bug_report.md
│       └── feature_request.md
├── public/
│   ├── assets/
│   │   ├── team/
│   │   │   ├── akshat.jpeg
│   │   │   ├── Aadi.jpg
│   │   │   ├── default.jpg
│   │   │   ├── Ojas.jpg
├── README.md
├── src/
│   ├── App.css
│   ├── App.tsx
│   ├── routes/
│   │   ├── Routes.tsx
│   ├── components/
│   │   ├── ui/
│   │   │   └── button.tsx
│   │   │   └── Features.tsx
│   │   ├── CodeEditor.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── ProfileCard.tsx
│   │   ├── Features.tsx
│   ├── lib/
│   │   ├── utils.ts
│   ├── pages/
│   │   ├── Contributions.tsx
│   │   ├── Editor.tsx
│   │   ├── Team.tsx
│   │   ├── LandingPage.tsx
│   ├── main.tsx
│   ├── vite-env.d.ts
├── .gitignore
├── CODE_OF_CONDUCT.md
├── components.json
├── eslint.config.js
├── index.html
├── LICENSE
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
```sh
git clone https://github.com/your-username/niance-editor-frontend.git
cd niance-editor-frontend
```

2. Install dependencies:
```sh
npm install
```

### Running the Development Server
```sh
npm run dev
```
This will start the Vite development server at http://localhost:3000.


## Project Components

- **Navbar.tsx**: Main navigation bar component
- **CodeEditor.tsx**: Core editor component integrating Niance Editor
- **Hero.tsx**: Adds the hero section
- **ProfileCard.tsx**: Profile Card function for Team page
- **Footer.tsx**: Footer for all the pages

## Configuration Files

- `package.json`: Project dependencies and scripts
- `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`: TypeScript configurations
- `vite.config.ts`: Vite configuration
- `eslint.config.js`: ESLint rules

## License

This project is licensed under the MIT License.
