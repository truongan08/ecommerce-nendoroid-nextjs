import { z } from "zod";
import validator from "validator";

export const phoneSchema = z.coerce
  .string({
    required_error: "Phone is required",
    invalid_type_error: "Phone must start 0 and max 12",
  })
  .startsWith("0")
  .min(10)
  .max(12)
  .refine(validator.isMobilePhone);
export const emailSchema = z.coerce
  .string({
    required_error: "Email is required",
    invalid_type_error: "Email must be text",
  })
  .email({ message: "Wrong Format" })
  .min(5);
