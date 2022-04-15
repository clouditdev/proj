import { motion } from "framer-motion";
import { useRouter } from "next/router";


export function Landing() {
    let router = useRouter()

    let whywe =
    router.locale === "en-US" ? "What tasks are solved by the Landing page?" : 
    router.locale === "de" ? "Welche Aufgaben werden durch eine Landing Page gelöst?" :
    router.locale === "ru" ? "Какие задачи решает Landing page?"
    : ''

    let transparent =
    router.locale === "en-US" ? "Quick Start" : 
    router.locale === "de" ? "Schnellstart" :
    router.locale === "ru" ? "Быстрый старт"
    : ''

    let transparent_descr =
    router.locale === "en-US" ? "Launching a landing page will ensure that you receive applications/sales as quickly as possible, compared to launching an online store or business website." : 
    router.locale === "de" ? "Die Einrichtung einer Landing Page sorgt dafür, dass Sie im Vergleich zur Einrichtung eines Online-Shops oder einer Unternehmenswebsite so schnell wie möglich Bestellungen/Verkäufe erhalten." :
    router.locale === "ru" ? "Запуск лендинга обеспечит получение заявок/продаж максимально быстро, по сравнению с запуском интернет-магазина или бизнес сайта."
    : ''

    let pay =
    router.locale === "en-US" ? "Conversion" : 
    router.locale === "de" ? "Konvertierung" :
    router.locale === "ru" ? "Конверсия"
    : ''

    let pay_descr =
    router.locale === "en-US" ? "The landing page works great for sales. The page completely focuses attention on the product or service." : 
    router.locale === "de" ? "Eine Landing Page eignet sich hervorragend für den Verkauf. Die Seite richtet die Aufmerksamkeit vollständig auf das Produkt oder die Dienstleistung." :
    router.locale === "ru" ? "Лендинг прекрасно работает на продажи. Страница полностью концентрирует внимание на продукте или услуге."
    : ''

    let ver =
    router.locale === "en-US" ? "Increased profits" : 
    router.locale === "de" ? "Steigende Gewinne" :
    router.locale === "ru" ? "Увеличение прибыли"
    : ''

    let ver_descr =
    router.locale === "en-US" ? "With the help of a landing page, you can launch new products or services separately from the main site." : 
    router.locale === "de" ? "Mit einer Landing Page können Sie neue Produkte oder Dienstleistungen unabhängig von der Hauptwebsite anbieten." :
    router.locale === "ru" ? "С помощью лендинга, вы можете запускать новые продукты или услуги отдельно от основного сайта."
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