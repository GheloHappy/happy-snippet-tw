import { useEffect } from 'react'
import cookies from 'react-cookies'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'
import _ from 'lodash';
import { postData } from '../utils/fetcher'
import { isSignedIn } from '../redux/user.redux/userActions'


const ProtectedRoute = ({ children }) => {
    const token = cookies.load('_hs');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // const user_settings = localStorage.getItem('user_settings')

    useEffect(() => {
        if (!token) {
            handleLogout();
        }

        // if (!user_settings || user_settings === null) {
        //     navigate('/welcome')
        //     return
        // }

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
        // const decoded = jwtDecode(token);
        // dispatch(setUserType(decoded.auth))
        dispatch(isSignedIn(true))
        // dispatch(setUserName(decoded.name));

    }, [token])

    const handleLogout = () => {
        dispatch(isSignedIn(false));
        // dispatch(setUserName(""))
        localStorage.clear();
        cookies.remove('_hs');
        navigate('/');
        return
    };

    return (
        <>{token && children}</>
    )
}

export default ProtectedRoute