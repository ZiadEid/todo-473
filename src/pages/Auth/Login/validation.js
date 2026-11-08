import * as yup from "yup";

export const loginSchema = yup.object({
  userName: yup.string().trim().required(),
  password: yup.string().trim().required(),
});
