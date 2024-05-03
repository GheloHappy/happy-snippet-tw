import { BarLoader, ClimbingBoxLoader, DotLoader, HashLoader, PropagateLoader, SyncLoader } from "react-spinners"

const Loading = () => {
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center bg-white bg-opacity-5 backdrop-filter backdrop-blur-sm">
            {/* <div className="w-full h-screen flex flex-col items-center justify-center bg-transparent"> */}
            <div className="w-1/2 h-1/2 items-center justify-center flex flex-col">
                <span>
                    {/* <BarLoader color="#fff" size={30} height={8} width={150} speedMultiplier={1}/> */}
                    <HashLoader color="#fff" size={60} />
                </span>
            </div>
        </div >
    )
}

export default Loading;
