import { motion } from "framer-motion";
import { useRouter } from "next/router";


export function Bussines() {
    let router = useRouter()

    let whywe =
    router.locale === "en-US" ? "What tasks are solved by the corporate website?" : 
    router.locale === "de" ? "Welche Aufgaben löst eine Unternehmenswebsite?" :
    router.locale === "ru" ? "Какие задачи решает корпоративный сайт?"
    : ''

    let transparent =
    router.locale === "en-US" ? "Positioning" : 
    router.locale === "de" ? "Positionierung" :
    router.locale === "ru" ? "Позиционирование"
    : ''

    let transparent_descr =
    router.locale === "en-US" ? "The site creates a first impression and conveys the philosophy of the company, improving the image in the market." : 
    router.locale === "de" ? "Die Website vermittelt einen ersten Eindruck und die Unternehmensphilosophie, wodurch das Image auf dem Markt verbessert wird." :
    router.locale === "ru" ? "Сайт создаёт первое впечатление и транслирует философию компании, улучшая имидж на рынке."
    : ''

    let pay =
    router.locale === "en-US" ? "Marketing" : 
    router.locale === "de" ? "Marketing" :
    router.locale === "ru" ? "Маркетинг"
    : ''

    let pay_descr =
    router.locale === "en-US" ? "With the help of the site is possible advertising campaign to promote your business on the Internet." : 
    router.locale === "de" ? "Eine Werbekampagne zur Förderung Ihres Unternehmens im Internet ist mit Hilfe der Website möglich." :
    router.locale === "ru" ? "С помощью сайта возможна рекламная кампания по продвижению вашего бизнеса в интернете."
    : ''

    let ver =
    router.locale === "en-US" ? "Scale" : 
    router.locale === "de" ? "Maßstab" :
    router.locale === "ru" ? "Масштаб"
    : ''

    let ver_descr =
    router.locale === "en-US" ? "You have the opportunity to attract new customers and partners from other regions and countries, thereby scaling your business" : 
    router.locale === "de" ? "Sie haben die Möglichkeit, neue Kunden und Partner aus anderen Regionen und Ländern zu gewinnen und so Ihr Geschäft auszuweiten." :
    router.locale === "ru" ? "Вы имеете возможность привлечь новых клиентов и партнеров с других регионов и стран, тем самым масштабируя свой бизнес"
    : ''

    return(
        <div className="flex w-screen justify-center dark:bg-white bg-[#0E1624] py-8 pb-20">
            <div className="flex w-3/4 flex-col justify-center">
                <div className="px-4 py-8">
                    <motion.h1 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { opacity: 1, x: 0 }, hidden: { opacity: 0, x: -150 }}} transition={{ duration: 1 }} className="font-bold text-4xl text-white dark:text-[#0e1624]">{whywe}</motion.h1>
                </div>
                <div className="flex flex-wrap justify-center">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y:50 }}} transition={{ duration: 1 }} className="flex flex-col w-72 p-4 fill-white dark:fill-[#0e1624] text-white dark:text-[#0e1624]">
                        <p className="font-bold text-2xl">{transparent}</p>
                        <p className="text-sm py-4">{transparent_descr}</p>
                    </motion.div>
                    <motion.div  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y:50 }}} transition={{ duration: 1 }} className="flex flex-col w-72 p-4 fill-white dark:fill-[#0e1624] text-white dark:text-[#0e1624]">
                        <p className="font-bold text-2xl">{pay}</p>
                        <p className="text-sm py-4">{pay_descr}</p>
                    </motion.div>
                    <motion.div  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y:50 }}} transition={{ delay: 0.2, duration: 0.7 }} className="flex flex-col w-72 p-4 fill-white dark:fill-[#0e1624] text-white dark:text-[#0e1624]">
                        <p className="font-bold text-2xl">{ver}</p>
                        <p className="text-sm py-4">{ver_descr}</p>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}