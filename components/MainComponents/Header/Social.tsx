import { motion } from "framer-motion"
import { Github } from "../Icons/Github"
import { Linkedin } from "../Icons/Linkedin"
import { Telegram } from "../Icons/Telegram"

export function Social() {
    return(
        <div className="flex flex-nowrap h-10 py-2 px-4">
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="px-1">
                <Github />
            </motion.button>
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="px-1">
                <Linkedin />
            </motion.button>
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="px-1 sm:fill-[#0E1624] sm:dark:fill-white dark:fill-[#0E1624] fill-white">
                <Telegram />
            </motion.button>
        </div>
    )
}