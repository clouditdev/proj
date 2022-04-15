import { motion } from "framer-motion"
import Link from "next/link"
import { useRouter } from "next/router"
const Development = () => {
    let router = useRouter()

    let development =
    router.locale === "en-US" ? "Development" : 
    router.locale === "de" ? "Entwicklung" :
    router.locale === "ru" ? "Разработка"
    : ''

    let landing =
        router.locale === "en-US" ? "Landing Page" : 
        router.locale === "de" ? "Landing Seite" :
        router.locale === "ru" ? "Лендинг Пейдж"
    : ''

    let corp =
    router.locale === "en-US" ? "Business Site" : 
    router.locale === "de" ? "Unternehmensseiten" :
    router.locale === "ru" ? "Корпоративный Сайт"
    : ''

    let market =
    router.locale === "en-US" ? "Marketplace" : 
    router.locale === "de" ? "Marktplatz" :
    router.locale === "ru" ? "Интернет магазин"
    : ''

    let app =
    router.locale === "en-US" ? "App" : 
    router.locale === "de" ? "App" :
    router.locale === "ru" ? "Приложение"
    : ''

    let fullstack =
    router.locale === "en-US" ? "Complete Package" : 
    router.locale === "de" ? "Vollständiges Paket" :
    router.locale === "ru" ? "Полный пакет"
    : ''
    
    return(
    <motion.div whileHover={{ scale: 1.1 }} className="dropdown py-2 mx-2">
        <button className="dropbtn font-bold">{development}</button>
        <div className="dropdown-content">
            <div className="flex flex-col bg-[#0E1624] dark:bg-white text-white dark:text-[#0E1624] p-4 font-semibold whitespace-nowrap cursor-pointer mt-2">
                <Link href="/services/landing-page"><motion.p whileHover={{ x: 6 }} whileTap={{ scale: 0.9 }} className="py-2">{landing}</motion.p></Link>
                <Link href="/services/bussines"><motion.p whileHover={{ x: 6 }} whileTap={{ scale: 0.9 }} className="pb-2">{corp}</motion.p></Link>
                <Link href=""><motion.p whileHover={{ x: 6 }} whileTap={{ scale: 0.9 }} className="pb-2">{market}</motion.p></Link>
                <Link href=""><motion.p whileHover={{ x: 6 }} whileTap={{ scale: 0.9 }} className="pb-2">{app}</motion.p></Link>
                <Link href=""><motion.p whileHover={{ x: 6 }} whileTap={{ scale: 0.9 }} className="pb-2">{fullstack}</motion.p></Link>
            </div>
        </div>
    </motion.div>
    )
}

export default Development;