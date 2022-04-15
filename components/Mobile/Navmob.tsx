import { motion } from "framer-motion"
import Link from "next/link"
import { useRouter } from "next/router"
import Navdev from "./Navdes"
import Navsell from "./Navsell"

export function Navmob() {
    let router = useRouter()

    let projects =
        router.locale === "en-US" ? "Projects" : 
        router.locale === "de" ? "Projekte" :
        router.locale === "ru" ? "Проекты"
    : ''
    return(
        <div className="flex flex-col justify-center w-full text-2xl z-40">
            <div className="flex flex-col text-center text-white dark:text-[#0E1624]">
                <Navsell />
                <Navdev />
                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Link href="/projects">
                        <p className="font-bold py-2 px-4">
                            {projects}
                        </p>
                    </Link>
                </motion.button>
            </div>
        </div>
    )
}