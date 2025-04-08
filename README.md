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
│   │   ├── ContributorStats.tsx
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
└── vercel.json
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

### Pages
- **LandingPage.tsx**: Main landing page with hero section and features
- **Editor.tsx**: Code editor interface
- **Team.tsx**: Team member profiles and information
- **Contributions.tsx**: Contribution statistics and information

### Components
- **Navbar.tsx**: Main navigation bar component
- **CodeEditor.tsx**: Core editor component integrating Niance Editor
- **ContributorStats.tsx**: Statistics and metrics for contributors
- **Features.tsx**: Features showcase section
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
