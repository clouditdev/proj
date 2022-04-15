import Link from "next/link"
import { useRouter } from "next/router"
import { motion } from "framer-motion"

export function Services() {
    let router = useRouter()

    let services =
    router.locale === "en-US" ? "Services" : 
    router.locale === "de" ? "Dienstleistungen" :
    router.locale === "ru" ? "Услуги"
    : ''

    let landing =
    router.locale === "en-US" ? "Landing Page" : 
    router.locale === "de" ? "Landing Seite" :
    router.locale === "ru" ? "Лендинг Пейдж"
    : ''
    
    let bussines =
    router.locale === "en-US" ? "Business Site" : 
    router.locale === "de" ? "Unternehmensseiten" :
    router.locale === "ru" ? "Корпоративный Сайт"
    : ''

    let moreinfo =
    router.locale === "en-US" ? "More Info" : 
    router.locale === "de" ? "Mehr Information" :
    router.locale === "ru" ? "Узнать больше"
    : ''

    let landingdesc =
    router.locale === "en-US" ? "We create sellable web pages with a memorable design and maximum conversion rate." : 
    router.locale === "de" ? "Wir erstellen verkaufsfähige Frontends mit einprägsamem Design und maximaler Konversionsrate." :
    router.locale === "ru" ? "Создаем продающие лендинги с запоминающимся дизайном и максимальной конверсией."
    : ''

    let bussinesdesc =
    router.locale === "en-US" ? "We develop corporate projects of varying complexity and scale." : 
    router.locale === "de" ? "Wir entwickeln Unternehmensprojekte von unterschiedlicher Komplexität und Größe." :
    router.locale === "ru" ? "Разрабатываем корпоративные проекты различной сложности и масштаба."
    : ''

    let marketdesc =
    router.locale === "en-US" ? "We make the work of the online store easy and fast thanks to special tools." : 
    router.locale === "de" ? "Wir machen die Bedienung des Online-Shops mit speziellen Tools einfach und schnell." :
    router.locale === "ru" ? "Делаем работу интернет-магазина простой и быстрой благодаря специальным инструментам."
    : ''

    let market =
    router.locale === "en-US" ? "Marketplace" : 
    router.locale === "de" ? "Marktplatz" :
    router.locale === "ru" ? "Интернет магазин"
    : ''

    let app =
    router.locale === "en-US" ? "Creating Apps" : 
    router.locale === "de" ? "Apps Erstellung" :
    router.locale === "ru" ? "Создание Приложений"
    : ''

    let appdesc =
    router.locale === "en-US" ? "We implement web applications of different complexity: from small services and APIs to complex systems." : 
    router.locale === "de" ? "Wir implementieren Webanwendungen von unterschiedlicher Komplexität, von kleinen Diensten und APIs bis hin zu komplexen Systemen." :
    router.locale === "ru" ? "Мы реализуем веб-приложения различной сложности: от небольших служб и API до сложных систем."
    : ''

    let designdesc =
    router.locale === "en-US" ? "We use simple and bold solutions that will be remembered by visitors and set you apart from your competitors." : 
    router.locale === "de" ? "Wir verwenden einfache und mutige Lösungen, die den Besuchern im Gedächtnis bleiben und Sie von Ihren Mitbewerbern abheben." :
    router.locale === "ru" ? "Используем простые и смелые решения, которые запомнятся посетителям и выделят вас среди конкурентов."
    : ''

    let redesigndesc =
    router.locale === "en-US" ? "We help clients stay ahead of the competition. We update the design, add new features." : 
    router.locale === "de" ? "Wir helfen unseren Kunden, der Konkurrenz einen Schritt voraus zu sein. Wir aktualisieren das Design und fügen neue Funktionen hinzu." :
    router.locale === "ru" ? "Помогаем клиентам быть впереди конкурентов. Обновляем дизайн, добавляем новые фишки"
    : ''

    let redesign =
    router.locale === "en-US" ? "Redesign Website" : 
    router.locale === "de" ? "Webseite Redesign" :
    router.locale === "ru" ? "Редизайн Сайта"
    : ''

    let design =
    router.locale === "en-US" ? "Design Website" : 
    router.locale === "de" ? "Webseite Design" :
    router.locale === "ru" ? "Дизайн Сайта"
    : ''

    return(
        <div className="flex w-screen justify-center dark:bg-white bg-[#0E1624] py-8 pb-20">
            <div className="flex w-3/4 flex-col justify-center">
                <div className="px-4 py-8">
                    <h1 className="font-bold text-4xl text-white dark:text-[#0e1624]">{services}</h1>
                </div>
                <div className="flex flex-wrap justify-center">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y:50 }}} transition={{ delay: 0.2, duration: 0.7 }} className="flex flex-col w-72 p-4 fill-white dark:fill-[#0e1624] hover:fill-[#0e1624] dark:hover:fill-white text-white dark:text-[#0e1624] hover:bg-white hover:text-[#0e1624] dark:hover:bg-[#0E1624] transition-colors duration-400 ease-in-out hover:dark:text-white">
                        <p className="font-bold text-2xl">{landing}</p>
                        <p className="text-sm py-4">{landingdesc}</p>
                        <Link href="/services/landing-page">
                            <motion.div whileHover={{ x: 10 }} whileTap={{ scale: 0.9 }} className="flex flex-nowrap">
                                <p className="cursor-pointer font-bold">{moreinfo}</p>
                                <svg className=" mt-px ml-1" width="24" height="24" xmlns="http://www.w3.org/2000/svg" clip-rule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg>
                            </motion.div>
                        </Link>
                    </motion.div>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y:50 }}} transition={{ delay: 0.3, duration: 0.7 }} className="flex flex-col w-72 p-4 fill-white dark:fill-[#0e1624] hover:fill-[#0e1624] dark:hover:fill-white text-white dark:text-[#0e1624] hover:bg-white hover:text-[#0e1624] dark:hover:bg-[#0E1624] transition-colors duration-400 ease-in-out hover:dark:text-white">
                        <p className="font-bold text-2xl">{bussines}</p>
                        <p className="text-sm py-4">{bussinesdesc}</p>
                        <Link href="/services/bussines">
                            <motion.div whileHover={{ x: 10 }} whileTap={{ scale: 0.9 }} className="flex flex-nowrap">
                                <p className="cursor-pointer font-bold">{moreinfo}</p>
                                <svg className=" mt-px ml-1" width="24" height="24" xmlns="http://www.w3.org/2000/svg" clip-rule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg>
                            </motion.div>
                        </Link>
                    </motion.div>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y:50 }}} transition={{ delay: 0.4, duration: 0.7 }} className="flex flex-col w-72 p-4 fill-white dark:fill-[#0e1624] hover:fill-[#0e1624] dark:hover:fill-white text-white dark:text-[#0e1624] hover:bg-white hover:text-[#0e1624] dark:hover:bg-[#0E1624] transition-colors duration-400 ease-in-out hover:dark:text-white">
                        <p className="font-bold text-2xl">{market}</p>
                        <p className="text-sm py-4">{marketdesc}</p>
                        <Link href="">
                            <motion.div whileHover={{ x: 10 }} whileTap={{ scale: 0.9 }} className="flex flex-nowrap">
                                <p className="cursor-pointer font-bold">{moreinfo}</p>
                                <svg className=" mt-px ml-1" width="24" height="24" xmlns="http://www.w3.org/2000/svg" clip-rule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg>
                            </motion.div>
                        </Link>
                    </motion.div>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y:50 }}} transition={{ delay: 0.2, duration: 0.7 }} className="flex flex-col w-72 p-4 fill-white dark:fill-[#0e1624] hover:fill-[#0e1624] dark:hover:fill-white text-white dark:text-[#0e1624] hover:bg-white hover:text-[#0e1624] dark:hover:bg-[#0E1624] transition-colors duration-400 ease-in-out hover:dark:text-white">
                        <p className="font-bold text-2xl">{app}</p>
                        <p className="text-sm py-4">{appdesc}</p>
                        <Link href="">
                            <motion.div whileHover={{ x: 10 }} whileTap={{ scale: 0.9 }} className="flex flex-nowrap">
                                <p className="cursor-pointer font-bold">{moreinfo}</p>
                                <svg className=" mt-px ml-1" width="24" height="24" xmlns="http://www.w3.org/2000/svg" clip-rule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg>
                            </motion.div>
                        </Link>
                    </motion.div>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y:50 }}} transition={{ delay: 0.3, duration: 0.7 }} className="flex flex-col w-72 p-4 fill-white dark:fill-[#0e1624] hover:fill-[#0e1624] dark:hover:fill-white text-white dark:text-[#0e1624] hover:bg-white hover:text-[#0e1624] dark:hover:bg-[#0E1624] transition-colors duration-400 ease-in-out hover:dark:text-white">
                        <p className="font-bold text-2xl">{design}</p>
                        <p className="text-sm py-4">{designdesc}</p>
                        <Link href="">
                            <motion.div whileHover={{ x: 10 }} whileTap={{ scale: 0.9 }} className="flex flex-nowrap">
                                <p className="cursor-pointer font-bold">{moreinfo}</p>
                                <svg className=" mt-px ml-1" width="24" height="24" xmlns="http://www.w3.org/2000/svg" clip-rule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg>
                            </motion.div>
                        </Link>
                    </motion.div>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y:50 }}} transition={{ delay: 0.4, duration: 0.7 }} className="flex flex-col w-72 p-4 fill-white dark:fill-[#0e1624] hover:fill-[#0e1624] dark:hover:fill-white text-white dark:text-[#0e1624] hover:bg-white hover:text-[#0e1624] dark:hover:bg-[#0E1624] transition-colors duration-400 ease-in-out hover:dark:text-white">
                        <p className="font-bold text-2xl">{redesign}</p>
                        <p className="text-sm py-4">{redesigndesc}</p>
                        <Link href="">
                            <motion.div whileHover={{ x: 10 }} whileTap={{ scale: 0.9 }} className="flex flex-nowrap">
                                <p className="cursor-pointer font-bold">{moreinfo}</p>
                                <svg className=" mt-px ml-1" width="24" height="24" xmlns="http://www.w3.org/2000/svg" clip-rule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg>
                            </motion.div>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}