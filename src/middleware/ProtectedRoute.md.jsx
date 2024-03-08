import { useEffect } from 'react'
import cookies from 'react-cookies'
import { useNavigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
    const token = cookies.load('_hs')
    const navigate = useNavigate()

    useEffect(() => {
        if (!token) {
            navigate('/')
            return
        }
        
    }, [token])

    return (
        <>{ children }</>
    )
}

export default ProtectedRoute