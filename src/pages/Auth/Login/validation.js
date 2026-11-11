import * as yup from "yup";

export const loginSchema = yup.object({
  identifier: yup.string().trim().required(),
  password: yup.string().trim().required(),
});
