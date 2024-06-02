import { useEffect } from 'react';
import cookies from 'react-cookies';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import _ from 'lodash';
import { postData } from '../utils/fetcher';
import { isSignedIn, setUserId, setUserName, setUserSettings } from '../redux/user.redux/userActions';
import { setNavState } from '../redux/system.redux.j/systemActions';
import refreshToken from '../utils/refreshToken'; // Import the refreshToken function

const ProtectedRoute = ({ children }) => {
    const token = cookies.load('_hs');
    const storage = JSON.parse(localStorage.getItem('user_settings'));
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        const checkToken = async () => {
            try {
                if (!token) {
                    handleLogout();
                    return;
                }

                const newToken = await refreshToken(); // Refresh the token if needed
                const validToken = newToken || token;

                const handleValidToken = _.debounce(async () => {
                    const response = await postData('token', { token: validToken });
                    if (!response.data.approved) {
                        handleLogout();
                    }
                }, 600);

                handleValidToken();

                if (!storage.exist) {
                    navigate('/welcome');
                    return;
                }

                const decoded = jwtDecode(validToken);
                dispatch(setUserId(decoded.id));
                dispatch(isSignedIn(true));
                dispatch(setUserName(decoded.user));

                dispatch(setUserSettings({
                    exist: storage.exist,
                    dark_mode: storage.dark_mode,
                    snippet_theme: storage.snippet_theme,
                    snippet_line_numbers: storage.snippet_line_numbers,
                    snippet_wrap_lines: storage.snippet_wrap_lines,
                }));

            } catch (err) {
                console.error('Error verifying user:', err);
                handleLogout();
            }
        };

        checkToken();

    }, [token, navigate, dispatch]);

    const handleLogout = () => {
        localStorage.clear();
        cookies.remove('_hs');
        dispatch(isSignedIn(false));
        dispatch(setNavState(false));
        navigate('/');
    };

    return (
        <>{token && children}</>
    );
};

export default ProtectedRoute;
