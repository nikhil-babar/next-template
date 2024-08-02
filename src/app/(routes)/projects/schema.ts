import { z } from "zod";

export const createProjectSchema = z.object({
  title: z
    .string()
    .min(4, { message: "Title must be at least 4 characters long." })
    .regex(/^[A-Za-z].*/, {
      message: "Title must start with an alphabet character.",
    }),
  description: z
    .string()
    .min(1, { message: "Description must not be empty." })
    .max(50, { message: "Description must be at most 50 characters long." })
    .refine((val) => val.split(" ").length >= 2, {
      message: "Description must be at least two words.",
    }),
});

export type ProjectSchema = z.infer<typeof createProjectSchema>;
