import { motion } from "framer-motion"
import Link from "next/link"
import { useRouter } from "next/router"
const Design = () => {
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

    return(
    <motion.div whileHover={{ scale: 1.1 }} className="dropdown py-2 mx-2">
        <button className="dropbtn font-bold">{des}</button>
        <div className="dropdown-content">
            <div className="flex flex-col bg-[#0E1624] dark:bg-white text-white dark:text-[#0E1624] p-4 font-semibold whitespace-nowrap cursor-pointer mt-2">
                <Link href=""><motion.p whileHover={{ x: 6 }} whileTap={{ scale: 0.9 }} className="py-2">{design}</motion.p></Link>
                <Link href=""><motion.p whileHover={{ x: 6 }} whileTap={{ scale: 0.9 }} className="pb-2">{redesign}</motion.p></Link>
            </div>
        </div>
    </motion.div>
    )
}

export default Design;