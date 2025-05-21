import { Link } from "react-router-dom";
const Home = () => {
    return (<>
        <div className="h-screen px-4 py-6 flex items-start flex-col justify-end md:justify-start">
            {/* top heading and subheading container */}
            <div className="w-4/5 md:w-[40%] my-4  p-4 rounded-xl">
                <h1 className="font-bold text-2xl md:text-3xl ">Welcome to PopX</h1>
                <span className="text-gray-600 ">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            </div>
            {/* navigation link container */}
            <div className="flex flex-col items-center justify-center gap-2.5 w-full md:w-[40%]">
                <Link to="/Register" className="bg-purple-600 py-2 px-3 w-full rounded-xl text-white font-semibold cursor-pointer hover:bg-purple-500 transition-all duration-500 text-center hover:scale-105 ">Create Account</Link>
                <Link to="/Login" className="bg-purple-300 py-2 px-3 w-full rounded-xl  font-semibold cursor-pointer hover:bg-purple-200 transition-all duration-500 text-center hover:scale-105 ">Already Registered? Login</Link>
            </div>
        </div>
    </>)
}

export default Home;