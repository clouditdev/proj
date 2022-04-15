import React, { useState } from 'react';
import { AnimatePresence, motion } from "framer-motion"
import { Navmob } from './Navmob';
import { Logo } from '../MainComponents/Icons/Logo';
import Darkmode from '../MainComponents/Header/Darkmode';
import { Social } from '../MainComponents/Header/Social';

const MobileMenu = () => {
    const [menu,setMenu] = useState(false)
    return(
        <div className="flex w-screen sm:absolute sm:invisible overflow-hidden z-10">
            <div className="flex flex-nowrap w-full fixed">
                <motion.button drag dragConstraints={{left: 0, top: 0, right: 0, bottom: 0}} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => setMenu(true)} className="fill-[#0E1624] dark:fill-white overflow-hidden absolute">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 ml-4 mt-4" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                </motion.button>
                <div className="flex w-full justify-end m-4 fill-[#0E1624] dark:fill-white transition-colors duration-500 ease-in-out">
                    <Logo />
                </div>
            </div>
            <AnimatePresence initial={false} exitBeforeEnter={true} onExitComplete={() => null}>
            {
                menu?
                <motion.div initial={{clipPath: 'circle(0.0% at 10% 9%)'}} animate={{clipPath: 'circle(128.0% at 10% 9%)', transition: { duration: 0.4 }}} exit={{clipPath: 'circle(0.0% at 10% 9%)', transition: { duration: 0.4 }}} className="flex flex-col fixed w-full bg-[#0E1624] dark:bg-white overflow-hidden transition-colors duration-500 ease-in-out">
                    <div className="flex w-full top-1">
                        <div className="flex flex-nowrap w-full justify-start fill-white dark:fill-[#0E1624] transition-colors duration-500 ease-in-out">
                                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="flex justify-start my-2 ml-2">
                                    <Darkmode />
                                </motion.div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <Navmob />
                    <div className="flex justify-center w-screen mt-4 mb-6">
                        <Social />
                    </div>
                    </div>
                        <div className="flex justify-center">
                            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => setMenu(false)}>
                                <motion.div whileTap={{ y: -20 }} className="flex h-1 w-14 bg-white dark:bg-[#0E1624] rounded-full my-2 transition-colors duration-500 ease-in-out">
                                </motion.div>
                            </motion.button>
                        </div>
                </motion.div>:null
            }
            </AnimatePresence>
        </div>
    )
}

export default MobileMenu;