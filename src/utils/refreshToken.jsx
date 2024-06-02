import cookies from 'react-cookies';
import { postData } from './fetcher';
import { jwtDecode } from 'jwt-decode'

const refreshToken = async () => {
    const token = cookies.load('_hs');

    if (!token) return;

    try {
        const response = await postData('refresh', { token });
        if (response.data.token) {
            const newToken = response.data.token;
            const decoded = jwtDecode(newToken);

            // Save new token
            cookies.save('_hs', newToken, {
                maxAge: decoded.maxAge,
                path: '/',
                secure: true,
                sameSite: 'Lax',
            });
            // console.log('refreshed')
            // console.log(token)
            return newToken;
        }
    } catch (err) {
        console.error('Token refresh failed', err);
    }
};


export default refreshToken