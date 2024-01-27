import {z} from "zod";

export const ProfileSchema = z.object({
  email: z.string().email(),
  firstname: z.string().min(5),
  lastname: z.string().min(5),
  username: z.string().min(5),
  sex: z.enum(["M", "F"]),
  birthdate: z.date(),
});
