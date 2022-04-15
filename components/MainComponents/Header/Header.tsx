import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "../Icons/Logo";
import Darkmode from "./Darkmode";
import Navbar from "./Navbar";
import { Social } from "./Social";

const Header = () => {
    const [show, setShow] = useState(false)
    const controlNavbar = () => {
        if (window.scrollY > 100 ) {
            setShow(true)
        }else{
            setShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    }, [])
    return(
        <div className="flex flex-nowrap justify-center w-screen">
            <div className={`flex fixed w-3/4 transition duration-300 active ${show && 'flex -translate-y-20 transition duration-300 fixed'}`}>
                <Link href="/">
                    <div className="flex justify-start w-full fill-[#0E1624] dark:fill-white transition-colors duration-500 ease-in-out">
                            <Logo />
                    </div>
                </Link>
                <div className="flex justify-center w-full">
                    <Navbar />
                </div>
                <div className="flex flex-nowrap justify-end w-full z-40">
                    <Social />
                    <Darkmode />
                </div>
            </div>
        </div>
    )
}

export default Header;