import { useState } from "react"
import { toast } from "react-toastify"
import { postData } from "../../../utils/fetcher"
import { useSelector } from "react-redux"
import { PulseLoader } from "react-spinners"

const ChangeAccountSettings = () => {
    const username = useSelector((state) => state.user.user_name)

    const initialFields = {
        username: username,
        old_pass: "",
        new_pass: "",
        retype_pass: "",
    };

    const [fields, setFields] = useState(initialFields)
    const [isLoading, setIsLoading] = useState(false);

    const handleUpdate = async (e) => {
        e.preventDefault()

        if (Object.values(fields).some((fieldValue) => typeof fieldValue === "string" && !fieldValue.trim(),)) {
            return toast.warning("Please fill all fields")
        }

        if (fields.new_pass !== fields.retype_pass) {
            return toast.warning('Password does not match.')
        }

        if (fields.new_pass.length <= 5) {
            toast.warning("Password must be longer than 5")
            return;
        }

        try {
            setIsLoading(true)
            const result = await postData('update/pass', fields);

            if (result.data.success) {
                toast.success(result.data.msg)
                setFields(initialFields);
                setIsLoading(false)
                return
            }

            toast.error(result.data.msg)
            setIsLoading(false)
        } catch (err) {
            console.log(err)
            toast.error('Internal Server Error!')
            setIsLoading(false)
        }
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

        <div className="w-full h-full flex flex-col items-center justify-center ">
            <div className="w-full h-full bg-[#1d1d1d] p-2 rounded">
                <form className="border w-full flex flex-col rounded items-center p-4 gap-3 text-black">
                    <label className="font-semibold text-white text-[1.5rem]">Change Password</label>
                    <input type="password" className="rounded p-2 text-[1rem] w-full md:w-1/2 " placeholder="Current Password" name="old_pass" value={fields.old_pass} onChange={handleChanges} />
                    <input type="password" className="rounded p-2 text-[1rem] w-full md:w-1/2 " placeholder="New Password" name="new_pass" value={fields.new_pass} onChange={handleChanges} />
                    <input type="password" className="rounded p-2 text-[1rem] w-full md:w-1/2 " placeholder="Retype Password" name="retype_pass" value={fields.retype_pass} onChange={handleChanges} />
                    <button className="w-full p-2 mx-2 font-semibold rounded md:w-1/2 text-blue-500 bg-gray-100 font-flower text-[1.5rem]" onClick={handleUpdate}>
                        {isLoading ? <PulseLoader color="#000" size={10} /> : 'update'}
                    </button>
                </form>
                <div className="border w-full flex flex-col rounded items-center p-4 gap-3 text-black mt-[1rem]">
                    <button className="bg-gray-100 text-red-600 w-full md:w-1/2 p-4 font-bold rounded font-flower text-[1.4rem]">delete account</button>
                </div>
            </div>
        </div>
    )
}

export default ChangeAccountSettings