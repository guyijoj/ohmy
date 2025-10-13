import { z } from "zod";

export const signInSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Invalid email format")
    .trim(),
  password: z.string().min(1, "Password is required"),
});

export const signUpSchema = z
  .object({
    firstname: z.string().min(1, "First name is required").trim(),
    lastname: z.string().min(1, "Last name is required").trim(),
    email: z
      .string()
      .min(1, "Email is required")
      .email("Invalid email format")
      .trim(),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string().min(1, "Please confirm your password"),
    terms: z.literal(true, {
      errorMap: () => ({ message: "You must accept the terms" }),
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords dont match",
    path: ["confirmPassword"],
  });

export const profileUpdateSchema = z.object({
  firstname: z.string().min(1, "First name is required").trim(),
  lastname: z.string().min(1, "Last name is required").trim(),
  contactNumber: z
    .string()
    .min(11, "Contact number is invalid")
    .transform((s) => s.replace(/[()\s-]/g, "").replace(/^00/, "+"))
    .refine((s) => /^\+[1-9]\d{7,14}$/.test(s), {
      message: "Conctact number is invalid",
    }),
});
