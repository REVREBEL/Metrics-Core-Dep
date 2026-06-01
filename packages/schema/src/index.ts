import { z } from "zod";

export const userStatusSchema = z.enum(["active", "suspended", "pending"]);
export type UserStatus = z.infer<typeof userStatusSchema>;
