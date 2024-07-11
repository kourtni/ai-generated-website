// packages/website/src/types/react-app-env.d.ts
/// <reference types="react-scripts" />

declare namespace NodeJS {
  interface ProcessEnv {
    REACT_APP_API_ENDPOINT: string;
    // Add other environment variables here as needed
  }
}
