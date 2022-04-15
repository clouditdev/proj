import { Email } from "../Icons/Email";
import { Logo } from "../Icons/Logo";
import { Telegram } from "../Icons/Telegram";


export function Footer() {
    return(
        <div className="flex w-screen justify-center bg-[#0E1624] dark:bg-white text-white dark:text-[#0E1624] pt-5 sm:pt-5 transition-colors duration-500 ease-in-out">
            <div className="flex flex-col w-3/4">
                <div className="flex flex-nowrap">
                    <div className="flex absolute invisible sm:visible fill-white dark:fill-[#0E1624] transition-colors duration-500 ease-in-out">
                        <Logo />
                    </div>
                    <div className="flex flex-col w-full justify-center">
                        <p className="flex flex-nowrap justify-center mt-2"> 
                            <div className="flex mr-1 fill-white dark:fill-[#0E1624] transition-colors duration-500 ease-in-out">
                                <Email />
                            </div>
                            <a className="font-light dark:text-[#0E1624] text-white transition-colors ease-in-out" href="mailto:contact@clouditdev.com">contact@clouditdev.com</a>
                        </p>
                        <p className="flex flex-nowrap mt-2 justify-center">
                            <div className="flex mr-1 fill-white dark:fill-[#0E1624] h-6 w-6 transition-colors duration-500 ease-in-out">
                                <Telegram />
                            </div>
                            <a className="font-light dark:text-[#0E1624] text-white transition-colors ease-in-out" href="https://t.me/clouditdev/">CloudITdev</a>
                        </p>
                    </div>
                </div>
                <div className="flex justify-center text-center py-4">
                    <p className="text-sm mt-4 transition-colors ease-in-out dark:text-[#0E1624] text-white">Copyright © 2022 CloudITdev</p>
                </div>
            </div>
        </div>
    )
}