import { useState } from 'react';
import Information from '../../components/Settings.section/Information.section'
import ThemeSettings from '../../components/Settings.section/ThemeSettings.section'
import ChangeAccountSettings from '../../components/Settings.section/ChangeAccountSettings.section'
import DeleteAccount from '../../components/Settings.section/DeleteaAccount.modal';

const Settings = () => {
    const [settingsNum, setSettingsNum] = useState(1)
    const [isDelete, setIsDelete] = useState(false)

    return (
        <>
            {isDelete ? <DeleteAccount setIsDelete={setIsDelete}/> : null}
            <div className="w-full h-screen text-white ">
                <div className='w-full h-full md:flex pt-10 mt-[1.5rem] md:mt-[2.5rem] p-1'>
                    <div className='md:w-[30%] flex md:flex-col items-center md:pt-10 border-white border md:rounded-l-lg'>
                        <div className='md:gap-2 flex md:flex-col font-bold md:text-[1.5rem] text-start w-full'>
                            <button className={`w-full p-5 ${settingsNum === 1 ? 'bg-gray-50 text-black' : "bg-none"}`} onClick={() => setSettingsNum(1)}>
                                <span className="hidden sm:inline">Information</span>
                                <span className="sm:hidden">Info</span>
                            </button>
                            <button className={`w-full p-5 ${settingsNum === 2 ? 'bg-white text-black' : "bg-none"}`} onClick={() => setSettingsNum(2)}>Theme Settings</button>
                            <button className={`w-full p-5 ${settingsNum === 3 ? 'bg-white text-black' : "bg-none"}`} onClick={() => setSettingsNum(3)}>Account Settings</button>
                        </div>
                    </div>
                    <div className='md:w-[70%] h-full flex flex-col items-center justify-center bg-gray-50 text-black md:rounded-r-lg p-3'>
                        {
                            (() => {
                                switch (settingsNum) {
                                    case 1:
                                        return <Information />
                                    case 2:
                                        return <ThemeSettings />
                                    case 3:
                                        return <ChangeAccountSettings setIsDelete={setIsDelete}/>
                                    default:
                                        return <Information />
                                }
                            })()
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Settings