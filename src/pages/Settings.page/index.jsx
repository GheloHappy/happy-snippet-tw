import cookies from 'react-cookies'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setNavState } from '../../redux/system.redux.j/systemActions';

const Settings = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const handleLogout = () => {
        localStorage.clear();
        cookies.remove('_hs');
        dispatch(setNavState(false))
        navigate('/');
    }

    return (
        <div className="w-full max-h-screen">
            <h1>Settings</h1>
            <h1 className="mt-[5rem] text-white text-[2rem]" onClick={handleLogout}>LOGOUT</h1>
        </div>
    )
}

export default Settings