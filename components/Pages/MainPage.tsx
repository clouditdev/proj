import { motion } from "framer-motion"
import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import { About } from "../MainComponents/PageComponents/About"
import Contact from "../MainComponents/PageComponents/Contact"
import { Services } from "../MainComponents/PageComponents/Services"

export function MainPage() {
    let router = useRouter()

    let litle =
     router.locale === "en-US" ? "We create effective websites for your business" : 
     router.locale === "de" ? "Wir erstellen Websites für Ihr Unternehmen" :
     router.locale === "ru" ? "Создаем сайты для вашего бизнеса"
     : ''

     let tagline =
     router.locale === "en-US" ? "The purpose of CloudITdev is to take your project to the next level both in terms of technology and UI/UX design. We will do everything to make your users happy with your product." : 
     router.locale === "de" ? "Das Ziel von CloudITdev ist es, Ihr Projekt auf die nächste Ebene zu bringen, sowohl in Bezug auf die Technologie als auch auf das UI/UX-Design. Wir werden alles tun, um Ihre Nutzer mit Ihrem Produkt glücklich zu machen." :
     router.locale === "ru" ? "Цель CloudITdev - вывести ваш проект на новый уровень как в плане технологий, так и в плане дизайна UI/UX. Мы сделаем все, чтобы ваши пользователи были довольны вашим продуктом."
     : ''

     let portfolio =
     router.locale === "en-US" ? "You can learn about my skills from my portfolio." : 
     router.locale === "de" ? "Sie können sich über meine Fähigkeiten in meinem Portfolio informieren." :
     router.locale === "ru" ? "О моих навыках вы можете узнать из моего портфолио."
     : ''

     let moreinfo =
     router.locale === "en-US" ? "More info" : 
     router.locale === "de" ? "Mehr information" :
     router.locale === "ru" ? "Больше информации"
     : ''

     let title =
     router.locale === "en-US" ? "Web-Studio CloudITdev | Web site and application development studio of any complexity" : 
     router.locale === "de" ? "Web-Studio CloudITdev | Studio für Website und App-Entwicklung beliebiger Komplexität" :
     router.locale === "ru" ? "Веб-Студия CloudITdev | Студия разработки веб-сайтов и приложений любой сложности"
     : ''

    return(
        <div className="flex flex-col w-screen justify-center">
            <Head>
                <link rel="manifest" href="/manifest.json" />
                <link rel="apple-touch-icon" href="/logo.png"></link>
                <title>{title}</title>
                <link rel="icon" href="icon.png" />
            </Head>
            <div className="flex w-screen justify-center">
                <div className="flex flex-col sm:w-3/4 h-screen">
                    <div className="flex h-screen justify-center flex-col mx-4 sm:mx-6 ">
                        <motion.h1 initial={{x: -30, opacity: 0}} animate={{x: 0, opacity: 1}} className="text-[#0E1624] dark:text-white text-center sm:text-left text-5xl font-bold mb-10 transition-colors ease-in-out">{litle}</motion.h1>
                            <motion.p initial={{y: 60, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{delay: 0.2}} className="text-[#0E1624] dark:text-white text-center sm:text-left sm:w-1/2 transition-colors ease-in-out">{tagline}</motion.p>
                            <motion.p initial={{y: 30, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{delay: 0.4}} className="text-[#0E1624] dark:text-white text-center sm:text-left sm:w-1/2 my-4 transition-colors ease-in-out">{portfolio}</motion.p>
                            <motion.div initial={{y: 30, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{delay: 0.5}} className="flex justify-center sm:justify-start sm:mt-6 mt-2">
                                <motion.div whileHover={{ x: 10 }} whileTap={{ scale: 0.9 }} className="flex flex-nowrap fill-[#0e1624] dark:fill-white transition-colors py-2 px-4 cursor-pointer border border-[#0e1624] dark:border-white hover:bg-[#0e1624] dark:hover:bg-white bg-left hover:bg-right hover:fill-white dark:hover:fill-[#0e1624] dark:hover:text-[#0e1624] hover:text-white text-[#0e1624] dark:text-white">
                                    <Link href="">
                                        <div className="flex flex-nowrap">
                                            <p className="font-bold">{moreinfo}</p>
                                            <svg className=" mt-px ml-1" width="24" height="24" xmlns="http://www.w3.org/2000/svg" clip-rule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg>
                                        </div>
                                    </Link>
                                </motion.div>
                            </motion.div>
                    </div>
                </div>
            </div>
            <div>
                <Services />
            </div>
            <div>
                <Contact />
            </div>
            <div>
                <About />
            </div>
        </div>
    )
}