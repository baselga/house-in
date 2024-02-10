/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_FB_API_KEY: string; // firebase - apiKey
  readonly VITE_FB_AUTH_DOMAIN: string; // firebase - authDomain
  readonly VITE_FB_PROJECT_ID: string; // firebase - projectId
  readonly VITE_FB_STORAGE_BUCKET: string; // firebase - storageBucket
  readonly VITE_FB_MESSAGING_SENDER_ID: string; // firebase - messagingSenderId
  readonly VITE_FB_APP_ID: string; // firebase - appId
  readonly VITE_FB_MEASUREMENDT_ID: string; // firebase - measurementId
  // más variables de entorno...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
