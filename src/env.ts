import { z } from "zod";

export const envSchema = z.object({
  NEXT_PUBLIC_API_BASE_URL: z.url(),
  APP_URL: z.url(),
});

export const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  console.error(
    "Invalid environment variables",
    parsedEnv.error.flatten().fieldErrors,
  );

  throw new Error("Invalid environment variables.");
}

export const env = parsedEnv.data;
