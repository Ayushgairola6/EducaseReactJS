import { FaStarOfLife } from "react-icons/fa6";
const Register = () => {
    return (<>
        <div className="h-screen py-3 px-4">
            <h1 className="font-bold text-2xl md:text-3xl my-4 w-1/2">Create your PopX account</h1>
            <div className="flex flex-col items-center justify-center gap-4 my-8 w-full md:w-1/2">
                {/* full name */}
                <section className="relative w-full ">
                    <label className="text-xs text-purple-600 absolute left-5 -top-2 bg-gray-100 px-2 flex items-center justify-center gap-2" htmlFor="Email">Full Name <FaStarOfLife color="red" size={5}/></label>
                    
                    <input className="py-2 px-3 rounded-lg border border-gray-300 w-full focus:ring-1 focus:ring-sky-600 focus:border-sky-600" type="email" placeholder="Your name" />
                </section>
                {/* phone number */}
                <section className="relative w-full ">
                    <label className="text-xs text-purple-600 absolute left-5 -top-2 bg-gray-100 px-2 flex items-center justify-center gap-2" htmlFor="Email">Phone Number  <FaStarOfLife color="red" size={5}/></label>
                    <input className="py-2 px-3 rounded-lg border border-gray-300 w-full focus:ring-1 focus:ring-sky-600 focus:border-sky-600" type="email" placeholder="Phone number" />
                </section>
                {/* email  */}
                <section className="relative w-full ">
                    <label className="text-xs text-purple-600 absolute left-5 -top-2 bg-gray-100 px-2 flex items-center justify-center gap-2" htmlFor="Email">Email Address  <FaStarOfLife color="red" size={5}/></label>
                    <input className="py-2 px-3 rounded-lg border border-gray-300 w-full focus:ring-1 focus:ring-sky-600 focus:border-sky-600" type="email" placeholder="Enter email address" />
                </section>
                {/* password */}
                <section className="relative w-full ">
                    <label className="text-xs text-purple-600 absolute left-5 -top-2 bg-gray-100 px-2 flex items-center justify-center gap-2" htmlFor="Email">Password  <FaStarOfLife color="red" size={5}/></label>
                    <input className="py-2 px-3 rounded-lg border border-gray-300 w-full focus:ring-1 focus:ring-sky-600 focus:border-sky-600" type="email" placeholder="Your password" />
                </section>
                {/* company name */}
                <section className="relative w-full ">
                    <label className="text-xs text-purple-600 absolute left-5 -top-2 bg-gray-100 px-2 flex items-center justify-center gap-2" htmlFor="Email">Company name  <FaStarOfLife color="red" size={5}/></label>
                    <input className="py-2 px-3 rounded-lg border border-gray-300 w-full focus:ring-1 focus:ring-sky-600 focus:border-sky-600" type="email" placeholder="Company name" />
                </section>
                {/* option container */}




            </div>
            <section className="flex flex-col items-start justify-start p-2 gap-2">

                <span className="text-sm font-semibold">Are you an agency ?</span>
                <div className="flex  items-start justify-start  gap-4">
                    <div className="flex items-center justify-center gap-3">
                        <input className="flex items-center justify-center gap-3 accent-purple-600 cursor-pointer" type="radio" name="choice" id="yes" value="yes" />
                        <label htmlFor="yes">Yes</label>
                    </div>

                    <div className="flex items-center justify-center gap-3">
                        <input className="flex items-center justify-center gap-3 accent-purple-600 cursor-pointer" type="radio" name="choice" id="no" value="no" />
                        <label htmlFor="no">No</label>
                    </div>
                </div>
            </section>
        </div>
    </>)
}

export default Register;