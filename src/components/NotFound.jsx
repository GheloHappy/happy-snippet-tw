import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className='w-full h-screen overflow-hidden flex flex-col items-center justify-center text-white'>
            <div className='text-center'>
                <h1 className="text-4xl font-semibold mb-11">PAGE NOT FOUND.</h1>
                <Link to="/" className="sm:text-sm underline text-blue-700">Click here to go back.</Link>
            </div>
        </div>
    )
}

export default NotFound;