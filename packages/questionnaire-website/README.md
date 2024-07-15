# Questionnaire Website


## Project Layout

Below is the project layout suggested by ChatGPT 4o.
```plaintext
questionnaire-website/
├── client/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── assets/
│   │   │   └── images/
│   │   ├── components/
│   │   │   ├── Questionnaire/
│   │   │   │   ├── Questionnaire.tsx
│   │   │   │   ├── Question.tsx
│   │   │   │   ├── Option.tsx
│   │   │   │   └── index.ts
│   │   │   ├── Header/
│   │   │   │   ├── Header.tsx
│   │   │   │   └── index.ts
│   │   │   ├── Footer/
│   │   │   │   ├── Footer.tsx
│   │   │   │   └── index.ts
│   │   │   └── common/
│   │   │       ├── Button.tsx
│   │   │       └── Input.tsx
│   │   ├── hooks/
│   │   │   └── useQuestionnaire.ts
│   │   ├── pages/
│   │   │   ├── HomePage.tsx
│   │   │   └── ResultsPage.tsx
│   │   ├── services/
│   │   │   └── api.ts
│   │   ├── styles/
│   │   │   ├── variables.css
│   │   │   └── global.css
│   │   ├── types/
│   │   │   └── index.ts
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── vite-env.d.ts
│   ├── tsconfig.json
│   ├── vite.config.ts
│   └── package.json
├── server/
│   ├── src/
│   │   ├── controllers/
│   │   │   └── questionnaireController.ts
│   │   ├── models/
│   │   │   └── Questionnaire.ts
│   │   ├── routes/
│   │   │   └── questionnaireRoutes.ts
│   │   ├── services/
│   │   │   └── questionnaireService.ts
│   │   ├── utils/
│   │   │   └── validateResponses.ts
│   │   ├── index.ts
│   │   └── server.ts
│   ├── tsconfig.json
│   └── package.json
├── pnpm-workspace.yaml
├── package.json
└── README.md
```
