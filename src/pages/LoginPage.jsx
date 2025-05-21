import { Link } from 'react-router-dom';
import { FaStarOfLife } from "react-icons/fa6";

const Login = () => {
    return (<>
        <div className="h-screen px-4 py-5">
            {/* heading container */}
            <div className="w-4/5 p-4 rounded-xl my-3">
                <h1 className="text-2xl md:text-2xl font-bold">Signin to your PopX account</h1>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            </div>
            {/* main form section */}
            <div className="flex flex-col items-start justify-center w-full md:w-1/2 gap-4 mt-7">
                <section className="relative w-full ">
                    <label className="text-xs text-purple-600 absolute left-5 -top-2 bg-gray-100 px-2 flex items-center justify-center gap-2" htmlFor="Email">Email Address <FaStarOfLife color="red" size={5}/></label>
                    <input className="py-2 px-3 rounded-lg border border-gray-300 w-full focus:ring-1 focus:ring-sky-600 focus:border-sky-600" type="email" placeholder="Enter email address" />
                </section>
                <section className="relative w-full ">
                    <label className="text-xs text-purple-600 absolute left-5 -top-2 bg-gray-100 px-2 flex items-center justify-center gap-2" htmlFor="Password">Password <FaStarOfLife color="red" size={5}/></label>
                    <input className="p-2 rounded-lg border border-gray-300 w-full focus:ring-1 focus:ring-sky-600 focus:border-sky-600" type="password" placeholder="Enter password" />

                </section>
                <Link to="/Dashboard" className="w-full py-2 px-4 text-center flex items-center justify-center bg-gray-400 rounded-lg text-white font-bold hover:bg-purple-600 transition-all duration-500 hover:scale-105">Login</Link>
            </div>

        </div>

    </>)
}

export default Login;