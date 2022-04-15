import { motion } from "framer-motion"
import { NextPage } from "next"
import Head from "next/head"
import { useRouter } from "next/router"
import MainLayout from "../components/MainLayout"

const project: NextPage = () => {
    let router = useRouter()

    let projects =
     router.locale === "en-US" ? "Projects" : 
     router.locale === "de" ? "Projekten" :
     router.locale === "ru" ? "Проекты"
     : ''

     let titles =
     router.locale === "en-US" ? "Titles" : 
     router.locale === "de" ? "Titles" :
     router.locale === "ru" ? "Название"
     : ''

     let cloud =
     router.locale === "en-US" ? "Projects — CloudITdev" : 
     router.locale === "de" ? "Projekte — CloudITdev" :
     router.locale === "ru" ? "Проекты — CloudITdev"
     : ''

    return (
      <div className="flex overflow-x-hidden">
        <Head>
            <title>{cloud}</title>
            <link rel="icon" href="favicon.svg" />
        </Head>
      <MainLayout>
        <div className="flex w-screen justify-center">
                <div className="flex w-3/4 sm:h-screen justify-center">
                    <div className="flex flex-col w-screen justify-center">
                        <div className="flex text-3xl sm:text-4xl justify-center font-bold px-4 sm:py-6 pb-6 pt-20 text-[#0E1624] dark:text-white">
                            <p>{projects}</p>
                        </div>
                        <div className="flex flex-wrap justify-center">
                                <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} className="flex m-4">
                                    <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col text-center w-72 border rounded-xl shadow-lg">
                                        <img className="flex rounded-t-xl w-72" src="https://creacity.it/wp-content/uploads/2020/11/struttura-landing-page.jpg" />
                                        <div className="flex flex-col dark:bg-[#0E1624] bg-white rounded-b-xl">
                                            <p className="text-2xl font-bold text-[#0E1624] dark:text-white py-4 px-2">{titles}</p>
                                            <p className="font-bold text-sm text-[#0E1624] dark:text-white px-6 pb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                            <div className="flex justify-center pb-4">
                                                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="bg-gradient-to-l from-[#8D5DD2] to-[#18A9C8] px-4 py-1 w-20 rounded-xl font-bold text-white dark:text-[#0E1624]">Source</motion.button>
                                            </div>
                                        </div>
                                    </motion.div>
                                </motion.div>
                                <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }} className="flex m-4">
                                    <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col text-center w-72 border rounded-xl shadow-lg">
                                        <img className="flex rounded-t-xl w-72" src="https://gianlucagentile.com/wp-content/uploads/2019/06/Cos%E2%80%99%C3%A8-una-Landing-page-e-a-cosa-serve-1200x675.jpg" />
                                        <div className="flex flex-col dark:bg-[#0E1624] bg-white rounded-b-xl">
                                            <p className="text-2xl font-bold text-[#0E1624] dark:text-white py-4 px-2">{titles}</p>
                                            <p className="font-bold text-sm text-[#0E1624] dark:text-white px-6 pb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                            <div className="flex justify-center pb-4">
                                                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="bg-gradient-to-l from-[#8D5DD2] to-[#18A9C8] px-4 py-1 w-20 rounded-xl font-bold text-white dark:text-[#0E1624]">Source</motion.button>
                                            </div>
                                        </div>
                                    </motion.div>
                                </motion.div>
                                <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="flex m-4">
                                    <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col text-center w-72 border rounded-xl shadow-lg">
                                        <img className="flex rounded-t-xl w-72" src="https://d85wutc1n854v.cloudfront.net/live/products/icons/WB0X617B2.jpg?v=1.2.0" />
                                        <div className="flex flex-col dark:bg-[#0E1624] bg-white rounded-b-xl">
                                            <p className="text-2xl font-bold text-[#0E1624] dark:text-white py-4 px-2">{titles}</p>
                                            <p className="font-bold text-sm text-[#0E1624] dark:text-white px-6 pb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                            <div className="flex justify-center pb-4">
                                                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="bg-gradient-to-l from-[#8D5DD2] to-[#18A9C8] px-4 py-1 w-20 rounded-xl font-bold text-white dark:text-[#0E1624]">Source</motion.button>
                                            </div>
                                        </div>
                                    </motion.div>
                                </motion.div>
                        </div>
                    </div>
                </div>
            </div>
      </MainLayout>
      </div>
    )
  }
  
  export default project