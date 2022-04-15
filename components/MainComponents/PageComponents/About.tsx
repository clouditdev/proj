import { motion } from "framer-motion";
import { useRouter } from "next/router";


export function About() {
    let router = useRouter()

    let whywe =
    router.locale === "en-US" ? "Why choose us?" : 
    router.locale === "de" ? "Warum wir?" :
    router.locale === "ru" ? "Почему мы?"
    : ''

    let transparent =
    router.locale === "en-US" ? "Transparent Working Conditions" : 
    router.locale === "de" ? "Transparente Arbeitsbedingungen" :
    router.locale === "ru" ? "Прозрачные условия работы"
    : ''

    let transparent_descr =
    router.locale === "en-US" ? "We provide a contract with guarantees and obligations." : 
    router.locale === "de" ? "Wir bieten einen Vertrag mit Garantien und Verpflichtungen." :
    router.locale === "ru" ? "Мы предоставляем контракт с гарантиями и обязательствами."
    : ''

    let pay =
    router.locale === "en-US" ? "Flexible payment system" : 
    router.locale === "de" ? "Ein flexibles Zahlungssystem" :
    router.locale === "ru" ? "Гибкая система оплаты"
    : ''

    let pay_descr =
    router.locale === "en-US" ? "70/30, 60/40, 50/50 per stage." : 
    router.locale === "de" ? "70/30, 60/40, 50/50 pro Stufe." :
    router.locale === "ru" ? "70/30, 60/40, 50/50 за этап."
    : ''

    let ver =
    router.locale === "en-US" ? "Constant feedback" : 
    router.locale === "de" ? "Ständige Rückmeldungen" :
    router.locale === "ru" ? "Постоянная обратная связь"
    : ''

    let ver_descr =
    router.locale === "en-US" ? "In channels of communication that are convenient for you." : 
    router.locale === "de" ? "In den Kommunikationskanälen, die Sie gewohnt sind." :
    router.locale === "ru" ? "В удобных для вас каналах коммуникации."
    : ''

    let bel =
    router.locale === "en-US" ? "Learning to work with the site, technical support" : 
    router.locale === "de" ? "Website-Schulung, technische Unterstützung" :
    router.locale === "ru" ? "Обучение работе с сайтом, тех. поддержка"
    : ''

    let bel_descr =
    router.locale === "en-US" ? "Advice and recommendations after the launch." : 
    router.locale === "de" ? "Ratschläge und Empfehlungen nach der Einführung." :
    router.locale === "ru" ? "Консультации и рекоммендации после запуска."
    : ''

    let del =
    router.locale === "en-US" ? "Maximum involvement in your business" : 
    router.locale === "de" ? "Maximale Beteiligung an Ihrem Unternehmen" :
    router.locale === "ru" ? "Максимальная вовлеченность в ваш бизнес"
    : ''

    let del_descr =
    router.locale === "en-US" ? "We get into business processes, we design conversion design." : 
    router.locale === "de" ? "Wir befassen uns mit Geschäftsprozessen und entwerfen Umsetzungen." :
    router.locale === "ru" ? "Вникаем в бизнес-процессы, проектируем конверсионный дизайн."
    : ''

    let der =
    router.locale === "en-US" ? "Custom design and development" : 
    router.locale === "de" ? "Kundenspezifisches Design und Entwicklung" :
    router.locale === "ru" ? "Индивидуальный дизайн и разработка"
    : ''

    let der_descr =
    router.locale === "en-US" ? "Clean and optimized code, responsive design to your needs." : 
    router.locale === "de" ? "Sauberer und optimierter Code, responsives Design für Ihre Bedürfnisse." :
    router.locale === "ru" ? "Чистый и оптимизированный код, отзывчивый дизайн под ваши нужды."
    : ''

    return(
        <div className="flex w-screen justify-center dark:bg-white bg-[#0E1624] py-8 pb-20">
            <div className="flex w-3/4 flex-col justify-center">
                <div className="px-4 py-8">
                    <h1 className="font-bold text-4xl text-white dark:text-[#0e1624]">{whywe}</h1>
                </div>
                <div className="flex flex-wrap justify-center">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y:50 }}} transition={{ delay: 0.2, duration: 0.7 }} className="flex flex-col w-72 p-4 fill-white dark:fill-[#0e1624] text-white dark:text-[#0e1624]">
                        <p className="font-bold text-2xl">{transparent}</p>
                        <p className="text-sm py-4">{transparent_descr}</p>
                    </motion.div>
                    <motion.div  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y:50 }}} transition={{ delay: 0.3, duration: 0.7 }} className="flex flex-col w-72 p-4 fill-white dark:fill-[#0e1624] text-white dark:text-[#0e1624]">
                        <p className="font-bold text-2xl">{pay}</p>
                        <p className="text-sm py-4">{pay_descr}</p>
                    </motion.div>
                    <motion.div  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y:50 }}} transition={{ delay: 0.4, duration: 0.7 }} className="flex flex-col w-72 p-4 fill-white dark:fill-[#0e1624] text-white dark:text-[#0e1624]">
                        <p className="font-bold text-2xl">{ver}</p>
                        <p className="text-sm py-4">{ver_descr}</p>
                    </motion.div>
                    <motion.div  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y:50 }}} transition={{ delay: 0.2, duration: 0.7 }} className="flex flex-col w-72 p-4 fill-white dark:fill-[#0e1624] text-white dark:text-[#0e1624]">
                        <p className="font-bold text-2xl">{bel}</p>
                        <p className="text-sm py-4">{bel_descr}</p>
                    </motion.div>
                    <motion.div  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y:50 }}} transition={{ delay: 0.3, duration: 0.7 }} className="flex flex-col w-72 p-4 fill-white dark:fill-[#0e1624] text-white dark:text-[#0e1624]">
                        <p className="font-bold text-2xl">{del}</p>
                        <p className="text-sm py-4">{del_descr}</p>
                    </motion.div>
                    <motion.div  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y:50 }}} transition={{ delay: 0.4, duration: 0.7 }} className="flex flex-col w-72 p-4 fill-white dark:fill-[#0e1624] text-white dark:text-[#0e1624]">
                        <p className="font-bold text-2xl">{der}</p>
                        <p className="text-sm py-4">{der_descr}</p>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}