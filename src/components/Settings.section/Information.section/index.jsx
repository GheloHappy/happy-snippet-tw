import { useEffect, useState } from "react"
import { getData, postData } from "../../../utils/fetcher"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"
import { setUserDisplayName } from "../../../redux/user.redux/userActions"
import _ from "lodash"
import { PulseLoader } from "react-spinners"

const Information = () => {
    const dispatch = useDispatch()
    const username = useSelector((state) => state.user.user_name)
    const [isLoading, setIsLoading] = useState(false)
    const [fields, setFields] = useState({
        username: '',
        display_name: '',
        first_name: '',
        last_name: '',
        birthday: '',
        backup_email: '',
    });

    useEffect(() => {
        //setIsLoading(true)
        try {
            const fetchInfo = async () => {

                if (username) {
                    const info = await getData(`user/info/${username}`)
                    const { user_info } = info.data;
                    const fetchedFields = {
                        username: user_info.username || '',
                        display_name: user_info.display_name || '',
                        first_name: user_info.first_name || '',
                        last_name: user_info.last_name || '',
                        birthday: user_info.birthday || '',
                        backup_email: user_info.backup_email || '',
                    };
                    //localStorage.setItem("user_info", JSON.stringify(user_info.display_name))
                    setFields(fetchedFields);
                }
            }


            fetchInfo()
        } catch (err) {
            console.log(err)
        }

        //setIsLoading(false)
    }, [username])

    const handleUpdateInfo = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        
        try {
            if (fields.display_name === '' || !fields.display_name) {
                toast.warning('Display Name is required.')
                setIsLoading(false)
                return
            }

            if (fields.display_name.length >= 10) {
                toast.warning('Display Name must be less than 11 characters.')
                setIsLoading(false)
                return
            }

            // Email validation
            if (fields.backup_email) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(fields.backup_email)) {
                    toast.warning("Please enter a valid email address")
                    setIsLoading(false)
                    return;
                }
            }

            const response = await postData(`user/info`, fields)


            dispatch(setUserDisplayName({ display_name: fields.display_name }))

            toast.success(response.data.msg)
        } catch (err) {
            console.log(err)
            toast.error('Internal Server Error')
        }
        setIsLoading(false)
    }

    const handleChanges = e => {
        setFields(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }

    return (
        <div className="w-full h-screen ">
            <div className="h-full p-5 flex flex-col items-center bg-[#1d1d1d] rounded text-white">
                <form className="flex flex-col items-center text-center w-full sm:p-5 h-full rounded gap-3  md:justify-center">
                    <div className="w-full flex gap-3 flex-col sm:px-10">
                        <div className="w-full flex items-start">
                            <label className="font-semibold">Display Name :</label>
                        </div>
                        <input className="w-full p-2 rounded text-black"
                            type="text" name="display_name" value={fields.display_name} onChange={handleChanges} placeholder="Display Name" />
                    </div>
                    <div className="w-full flex gap-3 flex-col sm:px-10">
                        <div className="w-full flex items-start">
                            <label className="font-semibold">First Name :</label>
                        </div>
                        <input className="w-full p-2 rounded text-black"
                            type="text" name="first_name" value={fields.first_name} onChange={handleChanges} placeholder="First Name (Optional)" />
                    </div>
                    <div className="w-full flex gap-3 flex-col sm:px-10">
                        <div className="w-full flex items-start">
                            <label className="font-semibold">Last Name :</label>
                        </div>
                        <input className="w-full p-2 rounded text-black"
                            type="text" name="last_name" value={fields.last_name} onChange={handleChanges} placeholder="Last Name (Optional)" />
                    </div>
                    <div className="w-full flex gap-3 flex-col sm:px-10">
                        <div className="w-full flex items-start">
                            <label className="font-semibold">Birthday (Optional) : </label>
                        </div>
                        <input className="w-full p-2 rounded text-black"
                            type="date" name="birthday" value={fields.birthday} onChange={handleChanges} />
                    </div>

                    <div className="w-full flex gap-3 flex-col sm:px-10">
                        <div className="w-full flex items-start">
                            <label className="font-semibold">Backup Email : </label>
                        </div>
                        <input className="w-full p-2 rounded text-black"
                            type="text" name="backup_email" value={fields.backup_email} onChange={handleChanges} placeholder="Backup Email (Optional)" />
                    </div>
                    <div className="w-full pt-5 sm:px-10">
                        <button className="w-full bg-[#151515] text-white border-[3px] font-serif py-2 text-[1.5rem] rounded" onClick={handleUpdateInfo}>
                            {isLoading ? <PulseLoader color="#fff" size={10} /> : 'UPDATE'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Information