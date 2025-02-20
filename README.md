# Niance Editor Frontend

This is the frontend for the Niance Editor, a web-based code editor built with React and TypeScript.

## Project Structure
```
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── public/
│   └── vite.svg
├── README.md
├── src/
│   ├── App.css
│   ├── App.tsx
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── CodeEditor.tsx
│   │   ├── Navbar.tsx
│   ├── main.tsx
│   ├── vite-env.d.ts
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

### Building for Production
```sh
npm run build
```
The production-ready files will be generated in the `dist` directory.

### Linting
```sh
npm run lint
```

## Project Components

- **Navbar.tsx**: Main navigation bar component
- **CodeEditor.tsx**: Core editor component integrating Niance Editor

## Configuration Files

- `package.json`: Project dependencies and scripts
- `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`: TypeScript configurations
- `vite.config.ts`: Vite configuration
- `eslint.config.js`: ESLint rules

## License

This project is licensed under the MIT License.
