import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import cookies from 'react-cookies'

const UnprotectedRoute = ({ children }) => {
    const token = cookies.load('_hs')
    const navigate = useNavigate()

    useEffect(() => {
        if (token) {
            navigate('/home')
            return
        }
    }, [token, navigate])

    return (
        <>{!token && children}</>
    )
}

export default UnprotectedRoute