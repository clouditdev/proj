import { motion } from "framer-motion"
import { NextPage } from "next"
import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import ScrollIntoView from 'react-scroll-into-view'
import Contact from "../../../components/MainComponents/PageComponents/Contact"
import { Landing } from "../../../components/MainComponents/PageComponents/Landing"
import MainLayout from "../../../components/MainLayout"

const landingpage: NextPage = () => {
    let router = useRouter()

    let title =
     router.locale === "en-US" ? "Order landing site | creation and development of Landing Page by CloudITdev" : 
     router.locale === "de" ? "Bestellen eine Landing Page | Erstellung und Entwicklung der Landing Page von CloudITdev" :
     router.locale === "ru" ? "Заказать лендинг сайт | создание и разработка Landing Page от CloudITdev"
     : ''

     let web =
     router.locale === "en-US" ? "Web Studio" : 
     router.locale === "de" ? "Web Studio" :
     router.locale === "ru" ? "Веб студия"
     : ''

     let dev =
     router.locale === "en-US" ? "Creating Websites" : 
     router.locale === "de" ? "Websites erstellen" :
     router.locale === "ru" ? "Создание сайтов"
     : ''

     let land =
     router.locale === "en-US" ? "Landing Page" : 
     router.locale === "de" ? "Landing Seite" :
     router.locale === "ru" ? "Лендинг Сайт"
     : ''

     let main =
     router.locale === "en-US" ? "Creation and development of the Landing Page site" : 
     router.locale === "de" ? "Erstellen und Entwickeln einer Landing Page-Seite" :
     router.locale === "ru" ? "Создание и разработка Landing Page сайта"
     : ''

     let desc =
     router.locale === "en-US" ? "Landing page - a one-page landing page, whose task is to prompt the user to take a targeted action. This action can be aimed at ordering, online payment or just to get the data of the potential client. We develop high conversion web pages with an emphasis on design and ease of user perception." : 
     router.locale === "de" ? "Eine Landing Page ist eine einseitige Zielseite, deren Aufgabe es ist, den Nutzer zu einer gezielten Aktion zu veranlassen. Diese Aktion kann darauf abzielen, eine Bestellung aufzugeben, eine Online-Zahlung vorzunehmen oder einfach Daten von einem potenziellen Kunden zu erhalten. Wir entwickeln Webseiten mit hoher Konversionsrate, wobei der Schwerpunkt auf Design und Benutzerfreundlichkeit liegt." :
     router.locale === "ru" ? "Landing page - это одностраничная посадочная страница, задача которой, побудить пользователя совершить целевое действие. Такое действие может быть направлено на оформление заказа, онлайн оплату или просто на получение данных потенциального клиента. Мы занимаемся разработкой лендингов c высокой конверсией, с упором на дизайн и легкость восприятия информации пользователем."
     : ''

     let by =
     router.locale === "en-US" ? "Order a project" : 
     router.locale === "de" ? "Projekt bestellen" :
     router.locale === "ru" ? "Заказать проект"
     : ''



     return (
        <div className="flex overflow-x-hidden">
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.svg" />
            </Head>
        <MainLayout>
          <div className="flex flex-col w-screen">
            <div className="flex flex-wrap sm:flex-col justify-center sm:mt-0 px-4">
                    <div className="flex w-screen justify-center">
                        <div className=" flex flex-col h-screen w-3/4 justify-center">
                            <div className="flex flex-wrap my-5">
                                <Link href="/"><p className="cursor-pointer text-xs	sm:text-sm text-[#0e1624] dark:text-white transition-colors">{web} » </p></Link>
                                <Link href=""><p className="cursor-pointer text-xs sm:text-sm text-[#0e1624] dark:text-white transition-colors">{dev} » </p></Link>
                                <Link href="/services/landing-page"><p className="cursor-pointer text-xs sm:text-sm text-[#0e1624] dark:text-white transition-colors">{land}</p></Link>
                            </div>
                            <div className="flex sm:flex-nowrap flex-wrap sm:mt-10">
                                <div className="flex flex-wrap sm:flex-col sm:justify-center">
                                    <motion.h1 initial={{x: -30, opacity: 0}} animate={{x: 0, opacity: 1}}  className="font-bold sm:text-5xl text-3xl text-[#0e1624] dark:text-white transition-colors">{main}</motion.h1>
                                    <motion.div initial={{y: 60, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{delay: 0.5}} className="flex">
                                        <motion.div whileHover={{ x: 10 }} whileTap={{ scale: 0.9 }} className="flex flex-nowrap fill-[#0e1624] dark:fill-white sm:mt-36 transition-colors py-2 px-4 cursor-pointer border border-[#0e1624] dark:border-white hover:bg-[#0e1624] dark:hover:bg-white bg-left hover:bg-right hover:fill-white dark:hover:fill-[#0e1624] dark:hover:text-[#0e1624] hover:text-white text-[#0e1624] dark:text-white  h-10 mx-2 my-10">
                                            <ScrollIntoView selector="#contact-form">
                                                <button>
                                                    <div className="flex flex-nowrap">
                                                        <p className="font-bold">{by}</p>
                                                        <svg className=" mt-px ml-1" width="24" height="24" xmlns="http://www.w3.org/2000/svg" clip-rule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg>
                                                    </div>
                                                </button>
                                            </ScrollIntoView>
                                        </motion.div>
                                    </motion.div>
                                </div>
                                <motion.div initial={{x: 100, opacity: 0}} animate={{x: 0, opacity: 1}} transition={{delay: 0.2}} className="flex sm:w-11/12 xl:w-1/3 sm:mx-4 mx-2 text-[#0e1624] dark:text-white transition-colors">
                                    <p>{desc}</p>
                                </motion.div>
                            </div>
                        </div>
                    </div>
            </div>
            <div>
                <Landing />
            </div>
            <div id="contact-form">
                <Contact />
            </div>
          </div>
        </MainLayout>
        </div>
      )
    }
  
  export default landingpage