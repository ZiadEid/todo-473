import * as yup from "yup";

const passwordReg = /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9\s]).{7,}$/;

export const registerSchema = yup.object({
  userName: yup.string().trim().required().min(5).max(12),
  email: yup.string().email().trim().required(),
  password: yup
    .string()
    .required()
    .matches(
      passwordReg,
      "Password must be at least 7 characters long and contain at least one uppercase letter, one number, and one special character.",
    ),
});
