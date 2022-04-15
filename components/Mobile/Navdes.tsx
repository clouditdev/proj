import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Link from "next/link";

const Navdev = () => {
    let router = useRouter()

    let design =
    router.locale === "en-US" ? "Design Website" : 
    router.locale === "de" ? "Webseite Design" :
    router.locale === "ru" ? "Дизайн Сайта"
    : ''

    let redesign =
        router.locale === "en-US" ? "Redesign Website" : 
        router.locale === "de" ? "Webseite Redesign" :
        router.locale === "ru" ? "Редизайн Сайта"
    : ''

    let des =
    router.locale === "en-US" ? "Design" : 
    router.locale === "de" ? "Design" :
    router.locale === "ru" ? "Дизайн"
: ''



    const [open, setOpen] = useState(false);

    return(
        <div>
            <motion.button whileHover={{ scale: 1.1 }} onClick={() => setOpen(!open)} whileTap={{ scale: 0.9 }}>
                <p className="font-bold py-2 px-4">
                    {des}
                </p>
            </motion.button>
            {
                open?
                <div>
                <div className="flex flex-col text-white dark:text-[#0E1624] py-2 font-semibold whitespace-nowrap cursor-pointer mt-2 text-lg">
                    <Link href="/services/landing-page"><motion.p whileHover={{ x: 6 }} whileTap={{ scale: 0.9 }} className="py-2">{design}</motion.p></Link>
                    <Link href=""><motion.p whileHover={{ x: 6 }} whileTap={{ scale: 0.9 }} className="pb-2">{redesign}</motion.p></Link>
                </div>
                </div>:null
            }
        </div>
    )
}

export default Navdev;