import { motion } from "framer-motion"
import { NextPage } from "next"
import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import Contact from "../../../components/MainComponents/PageComponents/Contact"
import MainLayout from "../../../components/MainLayout"
import ScrollIntoView from 'react-scroll-into-view'
import { Bussines } from "../../../components/MainComponents/PageComponents/Bussines"

const bussines: NextPage = () => {
    let router = useRouter()

    let title =
     router.locale === "en-US" ? "Order landing site | сreating and developing a corporate website  by CloudITdev" : 
     router.locale === "de" ? "Erstellung und Entwicklung einer Unternehmenswebsite | Erstellung und Entwicklung von CloudITdev" :
     router.locale === "ru" ? "Создание и разработка корпоративного сайта | создание и разработка Landing Page от CloudITdev"
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
     router.locale === "en-US" ? "Bussines Site" : 
     router.locale === "de" ? "Busse Seite" :
     router.locale === "ru" ? "Корпоративный Сайт"
     : ''

     let main =
     router.locale === "en-US" ? "Creation and development of the Bussines site" : 
     router.locale === "de" ? "Erstellen und Entwickeln einer Busse Seite" :
     router.locale === "ru" ? "Создание и разработка Корпоративного сайта"
     : ''

     let desc =
     router.locale === "en-US" ? "The task of a corporate website is the proper presentation of information about the company, its services and products. This type of site will improve the image, recognition and communication between users and the company. The site becomes the only official face of your company on the Internet." : 
     router.locale === "de" ? "Die Aufgabe einer Unternehmenswebsite besteht darin, Informationen über das Unternehmen, seine Dienstleistungen und Produkte angemessen zu präsentieren. Diese Art von Website verbessert das Image, die Sichtbarkeit und die Kommunikation zwischen den Nutzern und dem Unternehmen. Die Website ist das einzige offizielle Gesicht Ihres Unternehmens im Internet." :
     router.locale === "ru" ? "Задача корпоративного сайта - правильная подача информации о компании, ее услугах и товарах. Такой тип сайта позволит улучшить имидж, узнаваемость и коммуникацию между пользователями и компанией. Сайт становится единственным официальным лицом вашей компании в интернете."
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
                <Bussines />
            </div>
            <div id="contact-form">
                <Contact />
            </div>
          </div>
        </MainLayout>
        </div>
      )
    }
  
  export default bussines