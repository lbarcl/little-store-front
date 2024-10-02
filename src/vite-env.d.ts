/// <reference types="svelte" />
/// <reference types="vite/client" />

declare module "$env/dynamic/private" {
  export const env: {
    VITE_SUPABASE_KEY: string;
  };
}
