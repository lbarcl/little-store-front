/// <reference types="svelte" />
/// <reference types="vite/client" />

declare module "$env/dynamic/private" {
  export const env: {
    SUPABASE_KEY: string;
  };
}
