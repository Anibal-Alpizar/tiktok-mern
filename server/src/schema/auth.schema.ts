import { z } from "zod";

export const signupSchema = z.object({
  name: z
    .string({
      required_error: "Name is required from zod",
      invalid_type_error: "Name must be a string from zod",
    })
    .min(1)
    .max(255),
  email: z
    .string({
      required_error: "Email is required from zod",
      invalid_type_error: "Email must be a string from zod",
    })
    .email({
      message: "Email is invalid from zod",
    }),
  password: z
    .string({
      required_error: "Password is required from zod",
      invalid_type_error: "Password must be a string from zod",
    })
    .min(6, {
      message: "Password must be at least 6 characters from zod",
    })
    .max(255),
});
