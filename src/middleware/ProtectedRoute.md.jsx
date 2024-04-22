import { useEffect } from 'react'
import cookies from 'react-cookies'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'
import _ from 'lodash';
import { postData } from '../utils/fetcher'
import { isSignedIn, setUserId } from '../redux/user.redux/userActions'


const ProtectedRoute = ({ children }) => {
    const token = cookies.load('_hs');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user_settings = localStorage.getItem('user_settings')

    useEffect(() => {
        if (!token) {
            handleLogout();
            return
        }

        try {
            const handleValidToken = _.debounce(async () => {
                const response = await postData('token', { token })
                if (!response.data.approved) {
                    handleLogout();
                }
            }, 600)

            handleValidToken();
        } catch (err) {
            console.error('Error verifying user:', err)
            handleLogout();
        }
        // dispatch(setUserToken(token))
        const decoded = jwtDecode(token);
        dispatch(setUserId(decoded.id));
        dispatch(isSignedIn(true))

        if (!user_settings || user_settings === null) {
            navigate('/welcome');
            return;
        }

    }, [token, navigate, user_settings])

    const handleLogout = () => {
        dispatch(isSignedIn(false));
        // dispatch(setUserName(""))
        localStorage.clear();
        cookies.remove('_hs');
        navigate('/');
    };

    return (
        <>{token && children}</>
    )
}

export default ProtectedRoute