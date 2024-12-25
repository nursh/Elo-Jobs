/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_TALENT_URL: string;
  readonly VITE_SERVER_URL: string;
  readonly VITE_JOB_CHAT_URL: string;
  readonly VITE_RESUME_CHAT_URL: string;
  readonly VITE_RESUME_CHAT_URL_FILTERED: string;
  readonly VITE_JOB_CHAT_URL_FILTERED: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}