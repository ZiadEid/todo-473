import { ErrorMessage, Field, Form, Formik } from "formik";
import Button from "../../../components/shared/Button";
import { loginSchema } from "./validation";

const Login = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="h-full flex justify-center items-center">
      <Formik
        initialValues={{
          userName: "",
          password: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={loginSchema}
      >
        <Form className="flex flex-col gap-6 shadow-2xl p-5 w-120 max-w-full">
          <h1 className="text-4xl text-center font-bold">Welcome</h1>
          <div className="flex flex-col gap-3">
            <Field
              name="userName"
              className="outline-0 border border-gray-300 rounded-lg focus:border-2 focus:border-indigo-500 py-1 px-3 "
              placeholder="User Name"
            />
            <ErrorMessage name="userName" component={"p"} className="text-red-500 font-bold" />
            <Field
              name="password"
              type="password"
              className="outline-0 border border-gray-300 rounded-lg focus:border-2 focus:border-indigo-500 py-1 px-3 "
              placeholder="Password"
            />
            <ErrorMessage name="password" component={"p"} className="text-red-500 font-bold" />
          </div>
          <Button>Login</Button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
