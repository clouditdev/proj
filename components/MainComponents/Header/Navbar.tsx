import { motion } from "framer-motion"
import Link from "next/link"
import { useRouter } from "next/router"
import Design from "./Navsellect/Design"
import Development from "./Navsellect/Development"

const Navbar = () => {
    let router = useRouter()

    let projects =
        router.locale === "en-US" ? "Support" : 
        router.locale === "de" ? "Unterstützung" :
        router.locale === "ru" ? "Поддержка"
    : ''

    return(
        <div className="flex flex-nowrap h-10 justify-center w-full">
            <div className="flex flex-nowrap h-10 text-[#0E1624] dark:text-white">
                <Development />
                <Design />
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

export default Navbar;