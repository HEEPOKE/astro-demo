/// <reference types="astro/client-image" />
/// <reference types="astro/client-image" />

interface ImportMetaEnv {
    readonly ENDPOINT_URL: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }