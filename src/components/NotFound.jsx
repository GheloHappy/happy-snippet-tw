const NotFound = () => {
    return (
        <div className='w-full h-full flex flex-col justify-center'>
            <div className='text-center'>
                <h1 className="text-4xl font-semibold mb-11">PAGE NOT FOUND.</h1>
                <a href="/" className="sm:text-sm underline text-blue-700">Click here to go back.</a>
            </div>
        </div>
    )
}

export default NotFound;