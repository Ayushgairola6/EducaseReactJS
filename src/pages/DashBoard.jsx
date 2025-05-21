import { useRef } from 'react';
import { FaCamera } from 'react-icons/fa'
import img from '../assets/img2.png'

const Dashboard = () => {
    const inputRef = useRef();

    return (<>
        <div className="h-screen px-4 py-3">
            <h1 className="font-bold text-xl md:text-2xl my-4">Account Settings</h1>
            {/* image and user credentials container */}
            <div className='flex items-center justify-normal gap-8 py-6 px-2 bg-gray-200 rounded-lg'>
                {/* image and icon */}
                <div className='relative h-20 w-20'>
                    <img className='h-full w-full ' src={img} alt="" />
                    <input ref={inputRef} className='hidden' type="file" />
                    <label onClick={() => {
                        inputRef.current.click();
                    }} className='absolute -right-1 top-14 cursor-pointer hover:scale-110 duration-300 transition-all bg-purple-600 p-1 rounded-full' htmlFor="
                ">
                        <FaCamera color="white" size={10} />
                    </label>
                </div>
                {/* name and email section */}
                <div className='flex items-normal justify-start  flex-col mb-6'>
                    <span className='text-sm font-bold'>
                        Marry Doe
                    </span>
                    <span className='text-sm '>
                        Marry@gmail.com
                    </span>

                </div>
            </div>
            {/* about section container */}
            <p className='my-3 text-sm'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, delectus ipsa, omnis accusamus saepe quos veniam dicta inventore eveniet voluptatem blanditiis nemo laudantium ullam recusandae. Aut suscipit deleniti doloremque voluptates?
            </p>
        </div>
    </>)
}

export default Dashboard;