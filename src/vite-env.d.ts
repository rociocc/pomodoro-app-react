/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_REACT_APP_VERSION: string;
  // Add other variables here
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
