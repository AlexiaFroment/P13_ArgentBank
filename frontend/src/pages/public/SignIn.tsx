import { useNavigate } from "react-router-dom"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"

import { authService } from "@/_services"
import { userService } from "@/_services"
import { Credentials } from "@/_interfaces/Interface"
import { IoPersonCircleSharp } from "react-icons/io5"

export const SignIn: React.FC = () => {
  const navigate = useNavigate()

  const initialValues = {
    email: "tony@stark.com",
    password: "password123",
  }

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Veuillez entrer une adresse email valide")
      .required("Veuillez entrer votre adresse email"),
    password: Yup.string().required("Veuillez entrer un mot de passe"),
  })

  const onSubmit = (data: Credentials) => {
    authService
      .login(data)
      .then((response) => {
        const token = response.data.body.token
        authService.saveToken(token)
        console.log(
          "tu es authentifié tu vas ouvrir les portes du paraids, well done"
        )
        userService.getUser(token)
        navigate(`/auth/user-profile`)
      })
      .catch((error) => {
        console.log("tu n'es pas authentifié, game over")
        console.log(error)
      })
  }

  // const onSubmit = async (data: Credentials) => {
  //   try {
  //     userService
  //       .login(data)
  //       .then((response) => {
  //         const token = response.data.body.token
  //         userService.saveToken(token)
  //         console.log(
  //           "tu es authentifié tu vas ouvrir les portes du paraids, well done"
  //         )
  //         navigate(`/auth/user-profile`)
  //       })
  //       .catch((error) => {
  //         console.log("tu n'es pas authentifié, game over")
  //         console.log(error)
  //       })
  //   } catch (error) {
  //     console.log(error)
  //   }

  //   // const user = await userService.login(data)
  // }

  return (
    <section className='flex-grow bg-blue-950 p-10'>
      <div className='bg-white max-w-[300px] mx-auto px-7 flex flex-col'>
        <div className='flex flex-col items-center text-xl font-bold p-5'>
          <IoPersonCircleSharp />
          <h2 className='pt-3'>Sign In</h2>
        </div>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}>
          <Form>
            <div className='mb-5'>
              <label htmlFor='email' className='font-semibold'>
                Username
              </label>
              <Field
                name='email'
                type='email'
                className='w-full px-3 py-2 border rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-950'
                autoComplete='off'></Field>
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
                autoComplete='off'></Field>
              <ErrorMessage
                name='password'
                component='p'
                className='errorMessage'
              />
            </div>

            <div>
              <input
                type='checkbox'
                id='remember-me'
                className=' h-3 w-3 appearance-none border border-gray-400 rounded-sm  accent-blue-950  '
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
        </Formik>
      </div>
    </section>
  )
}
