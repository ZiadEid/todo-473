import { ErrorMessage, Field, Form, Formik } from "formik";
import Button from "../../../components/shared/Button";
import { loginSchema } from "./validation";
import axios from "axios";
import { useContext, useEffect } from "react";
import { GlobalStore } from "../../../stores/MainStore";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const Login = () => {
  // Hooks
  const { base_url, token, setToken } = useContext(GlobalStore);
  const navigate = useNavigate();
  // Protected Route
  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  // Functions
  const handleSubmit = async (values) => {
    try {
      const res = await axios.post(`${base_url}/auth/local`, values);

      if (res.data) {
        localStorage.setItem("token", res.data.jwt)
        setToken(res.data.jwt);
        toast.success("Login Successfully");
        setTimeout(() => {
          navigate("/");
        }, 3000);
      }
    } catch (err) {
      toast.error(err.message, {
        duration: 5000,
      });
    }

    // axios
    //   .post(`${base_url}/auth/local`, values)
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  return (
    <div className="h-full flex justify-center items-center">
      <Formik
        initialValues={{
          identifier: "",
          password: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={loginSchema}
      >
        <Form className="flex flex-col gap-6 shadow-2xl p-5 w-120 max-w-full">
          <h1 className="text-4xl text-center font-bold">Welcome</h1>
          <div className="flex flex-col gap-3">
            <Field
              name="identifier"
              className="outline-0 border border-gray-300 rounded-lg focus:border-2 focus:border-indigo-500 py-1 px-3 "
              placeholder="User Name"
            />
            <ErrorMessage
              name="identifier"
              component={"p"}
              className="text-red-500 font-bold"
            />
            <Field
              name="password"
              type="password"
              className="outline-0 border border-gray-300 rounded-lg focus:border-2 focus:border-indigo-500 py-1 px-3 "
              placeholder="Password"
            />
            <ErrorMessage
              name="password"
              component={"p"}
              className="text-red-500 font-bold"
            />
          </div>
          <Button>Login</Button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
