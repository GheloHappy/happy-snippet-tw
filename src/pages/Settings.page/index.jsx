import cookies from 'react-cookies'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setNavState } from '../../redux/system.redux.j/systemActions';
import { useState } from 'react';
import Information from '../../components/Settings.section/Information.section'
import ThemeSettings from '../../components/Settings.section/ThemeSettings.section'
import ChangePass from '../../components/Settings.section/ChangePass.section'

const Settings = () => {
    const [settingsNum, setSettingsNum] = useState(1)

    return (
        <div className="w-full h-screen text-white mt-[2rem] md:mt-[2.5rem] p-1">
            <div className='w-full h-full flex pt-10'>
                <div className='w-[30%] flex flex-col items-center pt-10 border-white border rounded-l-lg'>
                    <div className='gap-2 flex flex-col font-bold text-[1.5rem] text-start w-full'>
                        <button className={`w-full p-5 ${settingsNum === 1 ? 'bg-white text-black': "bg-none"}`} onClick={() => setSettingsNum(1)}>Information</button>
                        <button className={`w-full p-5 ${settingsNum === 2 ? 'bg-white text-black': "bg-none"}`} onClick={() => setSettingsNum(2)}>Theme Settings</button>
                        <button className={`w-full p-5 ${settingsNum === 3 ? 'bg-white text-black': "bg-none"}`}onClick={() => setSettingsNum(3)}>Change Password</button>
                    </div>
                </div>
                <div className='w-[70%] h-full flex flex-col items-center justify-center bg-white text-black rounded-r-lg'>
                    {
                        (() => {
                            switch (settingsNum) {
                                case 1:
                                    return <Information />
                                case 2:
                                    return <ThemeSettings />
                                case 3:
                                    return <ChangePass />
                                default:
                                    return <Information />
                            }
                        })()
                    }
                </div>
            </div>
        </div>
    )
}

export default Settings