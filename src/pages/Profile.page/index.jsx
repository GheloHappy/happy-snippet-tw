import cookies from 'react-cookies'
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const navigate = useNavigate();
    
    const handleLogout = () => {
        localStorage.clear();
        cookies.remove('_hs');
        navigate('/');
    }

    return (
        <div className="w-full max-h-screen">
            <h1>PROFILE</h1>
            <h1 className="mt-[5rem] text-white text-[2rem]" onClick={handleLogout}>LOGOUT</h1>
        </div>
    )
}

export default Profile