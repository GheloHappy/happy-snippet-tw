import { useEffect } from 'react'
import cookies from 'react-cookies'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'
import _ from 'lodash';
import { postData } from '../utils/fethcer'


const ProtectedRoute = ({ children }) => {
    const token = cookies.load('_hs');
    const navigate = useNavigate();
    // const dispatch = useDispatch();

    useEffect(() => {
        if (!token) {
            // dispatch(isSingedIn(false));
            // dispatch(setUserName(""))
            localStorage.clear();
            cookies.remove('_hs');
            navigate('/');
            return
        }

        try {
            const handleValidToken = _.debounce(async () => {
                const response = await postData('token', { token })
                if (!response.data.approved) {
                    // dispatch(isSingedIn(false));
                    // dispatch(setUserName(""))
                    localStorage.clear();
                    cookies.remove('_hs');
                    navigate('/');
                    return
                }
            }, 600)

            handleValidToken();
        } catch (err) {
            console.error('Error verifying user:', err)
            // dispatch(isSingedIn(false));
            // dispatch(setUserName(""))
            localStorage.clear();
            cookies.remove('_hs');
            navigate('/')
            return
        }

        // dispatch(setUserToken(token))
        // const decoded = jwtDecode(token);
        // dispatch(setUserType(decoded.auth))
        // dispatch(isSingedIn(true))
        // dispatch(setUserName(decoded.name));

    }, [token])

    return (
        <>{token && children}</>
    )
}

export default ProtectedRoute