import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";

import { AppDispatch } from "@/_redux/store";
import { setUser } from "@/_redux/userSlice";
import { authService } from "@/_services";
import { userService } from "@/_services";
import { Credentials } from "@/_interfaces/Interface";
import { IoPersonCircleSharp } from "react-icons/io5";
import { useState } from "react";

type SignInFormData = {
  email: string;
  password: string;
  rememberMe: boolean;
};
export const SignIn: React.FC = () => {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const getInitialValues = (): SignInFormData => {
    const email = localStorage.getItem("email") || "";
    const rememberMe = !!localStorage.getItem("email");
    return {
      email,
      password: "",
      rememberMe,
    };
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Veuillez entrer une adresse email valide")
      .required("Veuillez entrer votre adresse email"),
    password: Yup.string().required("Veuillez entrer un mot de passe"),
  });

  const onSubmit = (data: SignInFormData) => {
    console.log("etat de rememberMe", data.rememberMe);
    localStorage.setItem("rememberme", `${data.rememberMe}`);
    const credentials: Credentials = {
      email: data.email,
      password: data.password,
    };
    authService
      .login(credentials, data.rememberMe, dispatch)
      .then((response) => {
        if (response.data.body.token) {
          const token = response.data.body.token;
          if (token) {
            userService.getUser(token).then((user) => {
              //UPDATE STORE WITH GET DATA
              dispatch(
                setUser({
                  firstName: user.firstName,
                  lastName: user.lastName,
                })
              );
            });
            setMessage("");
            navigate(`/auth/user-profile`);
          }
        }
      })
      .catch((error) => {
        setMessage("Mauvais identifiants");
        console.log(error);
      });
  };

  return (
    <section className='flex-grow bg-blue-950 p-10'>
      <div className='bg-white max-w-[300px] mx-auto px-7 flex flex-col'>
        <div className='flex flex-col items-center text-xl font-bold p-5'>
          <IoPersonCircleSharp />
          <h2 className='pt-3'>Sign In</h2>
        </div>

        <Formik
          initialValues={getInitialValues()}
          onSubmit={onSubmit}
          validationSchema={validationSchema}>
          {({ values }) => (
            <Form>
              <div className='mb-5'>
                <label htmlFor='email' className='font-semibold'>
                  Username
                </label>
                <Field
                  name='email'
                  type='email'
                  className='w-full px-3 py-2 border rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-950'
                  autoComplete='off'
                />
                <ErrorMessage
                  name='email'
                  component='p'
                  className='errorMessage'
                />
              </div>

              <div className=' mb-5'>
                <label htmlFor='password' className='font-semibold'>
                  Password
                </label>
                <Field
                  name='password'
                  type='password'
                  className='w-full px-3 py-2 border rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-950'
                  autoComplete='off'
                />
                <ErrorMessage
                  name='password'
                  component='p'
                  className='errorMessage'
                />
                <p>{message}</p>
              </div>

              <div>
                <Field
                  type='checkbox'
                  id='remember-me'
                  name='rememberMe'
                  checked={values.rememberMe}
                  className='h-4 w-4 border-gray-300 rounded-sm focus:ring-2 focus:ring-blue-500 checked:bg-blue-500 checked:border-blue-500 peer'
                />
                <label htmlFor='remember-me' className='text-gray-500 pl-2'>
                  Remember me
                </label>
              </div>

              <button
                className='w-full py-2  my-7 bg-green-600 text-white font-semibold rounded-sm '
                type='submit'>
                Sign In
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};
