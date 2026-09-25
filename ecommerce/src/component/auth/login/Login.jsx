import {useState} from 'react'
import {useLoginMutation} from "../../../api/api"
import {Link, useNavigate}  from "react-router"
const Login = () => {

  // const [userName, setUserName] = useState(""); 
  // const [password, setPassword] = useState("");

  const userData = {
    username: "",
    password: ""
  }

  const [userDetail, setUserDetail] = useState(userData);

  const [isLoading, setIsLoading] = useState(false);
  const [login, data] = useLoginMutation();
  const navigate = useNavigate()
  
  // console.log(data);
  // console.log(userDetail)

  const handleOnChange=(e)=>{
    const {name, value} = e.target;
    setUserDetail((prev)=> ({...prev, [name] : value}))
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
    setIsLoading(true)
    console.log(userDetail)
    try {
      const response = await login(
        // {password: password, username: userName}
        userDetail
      ).unwrap();
      console.log(response);
      navigate("/products")
    } catch (error) {
      console.log(error);
    }finally{
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">

        {/* Heading */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Welcome Back
          </h1>

          <p className="text-gray-500 mt-2">
            Login to your account
          </p>
        </div>

        {/* Login Form */}
        <form className="space-y-5" onSubmit={handleSubmit}>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Username
            </label>

            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              onChange={handleOnChange}
              // onChange={(e)=> setUserName(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg 
              focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              onChange={handleOnChange}
              // onChange={(e)=> setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg 
              focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            onSubmit={handleSubmit}
            disabled={isLoading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg 
                       font-semibold hover:bg-blue-700 transition duration-200"
          >
          {isLoading ? 'Loading...' : 'Submit'}
          </button>
        </form>

        {/* Register Link */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Don't have an account?{' '}

          <Link to="/signup" className="text-blue-600 font-semibold hover:underline">
            Sign up
          </Link>
        </p>

      </div>
    </div>
  )
}

export default Login