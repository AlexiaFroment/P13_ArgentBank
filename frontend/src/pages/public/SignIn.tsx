import { useNavigate } from "react-router-dom"
import { IoPersonCircleSharp } from "react-icons/io5"
export const SignIn: React.FC = () => {
  const navigate = useNavigate()
  const handleSignIn = () => {
    navigate("/auth/welcome")
  }
  return (
    <section className='flex-grow bg-blue-950 p-10 '>
      <form className='bg-white max-w-[300px] mx-auto px-7 flex flex-col'>
        <div className='flex flex-col items-center text-xl font-bold p-5'>
          <IoPersonCircleSharp />
          <h2 className='pt-3'>Sign In</h2>
        </div>
        <div className=' mb-5'>
          <label className='font-semibold' htmlFor='username'>
            Username
          </label>
          <input
            className='w-full px-3 py-2 border rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-950'
            type='email'
            id='username'
          />
        </div>
        <div className='mb-5'>
          <label className='font-semibold' htmlFor='username'>
            Password
          </label>
          <input
            className='w-full px-3 py-2 border rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-950'
            type='Password'
            id='Password'
          />
        </div>
        <div>
          <input
            className=' h-3 w-3 appearance-none border border-gray-400 rounded-sm  accent-blue-950  '
            type='checkbox'
            id='remenberMe'
          />
          <label className='text-gray-500 pl-2' htmlFor='remenberMe'>
            Remember me
          </label>
        </div>
        <button
          className='w-full py-2  my-7 bg-green-600 text-white font-semibold rounded-sm '
          onClick={handleSignIn}>
          Sign In
        </button>
      </form>
    </section>
  )
}
