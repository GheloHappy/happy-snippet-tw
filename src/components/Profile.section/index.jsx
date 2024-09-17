import { useState } from "react";

const ProfileSection = () => {
    const info = JSON.parse(localStorage.getItem('user_info'))

    const [profile, setProfile]=useState("");

    function convertToBase64(e) {
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            setProfile(reader.result)
        }
        reader.onerror = err => {
            console.log("Error: ", err)
        }
    }

    return (
        <div className="flex-col flex mt-[2.5rem] md:mt-[4.5rem] w-full pt-6 md:gap-3 items-center justify-center text-white">
            <div className="w-[70%] bg-red-50">
                <div className="w-full flex text-black">
                    <div className="w-[30%] flex justify-center flex-col items-center">
                        {profile == null || profile == "" ? "" : <img width={100} height={100} src={profile} />}
                        <h1>{info ? info.display_name : "Snippet User"}</h1>
                        <div>
                            <input accept="image/*"
                            type="file"
                            onChange={convertToBase64}/>
                        </div>
                    </div>
                    <div className="w-[70%] flex justify-center">
                        <h1>STATS</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileSection