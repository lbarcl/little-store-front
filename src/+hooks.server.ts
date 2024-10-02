// src/hooks.server.ts
import type { Handle } from "@sveltejs/kit";
import { env } from "$env/dynamic/private";

export const handle: Handle = async ({ event, resolve }) => {
  event.locals.SUPABASE_KEY = env.SUPABASE_KEY; // Make it available in event locals
  return await resolve(event);
};
