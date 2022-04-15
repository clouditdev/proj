import { useRouter } from "next/router"
import { motion } from "framer-motion"
import { ChangeEvent, useState } from "react"

const Contact = () => {
    let router = useRouter()

    let yourname =
    router.locale === "en-US" ? "Enter your name" : 
    router.locale === "de" ? "Ihren Namen eintragen" :
    router.locale === "ru" ? "Введите ваше имя"
    : ''

    let email =
    router.locale === "en-US" ? "Enter your Email" : 
    router.locale === "de" ? "Ihre E-Mail eingeben" :
    router.locale === "ru" ? "Введите свой Email"
    : ''

    let phone =
    router.locale === "en-US" ? "Enter your Phone" : 
    router.locale === "de" ? "Ihre Telefonnummer" :
    router.locale === "ru" ? "Введите свой номер"
    : ''

    let message =
    router.locale === "en-US" ? "Project details" : 
    router.locale === "de" ? "Details zum Projekt" :
    router.locale === "ru" ? "Подробности проекта"
    : ''

    let conactus =
    router.locale === "en-US" ? "Contact us" : 
    router.locale === "de" ? "Kontakt aufnehmen" :
    router.locale === "ru" ? "Свяжитесь с нами"
    : ''

    let title =
    router.locale === "en-US" ? "Do you want to do something great?" : 
    router.locale === "de" ? "Möchten Sie etwas Großes tun?" :
    router.locale === "ru" ? "Хотите сделать что-то великое?"
    : ''

    let subtitle =
    router.locale === "en-US" ? "Let us help you" : 
    router.locale === "de" ? "Lassen Sie uns Ihnen helfen" :
    router.locale === "ru" ? "Позвольте помочь вам"
    : ''

    let subsubtitle =
    router.locale === "en-US" ? "Ready? Get in contact today!" : 
    router.locale === "de" ? "Sind Sie bereit? Nehmen Sie noch heute Kontakt auf!" :
    router.locale === "ru" ? "Готовы? Свяжитесь с нами сегодня!"
    : ''

    const [values, setValues] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    })

    const [errors, setErrors] = useState<{name ?: string; email ?: string; phone ?: string; message ?: string; }>()

    const onChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
        setValues((prev) => ({...prev, [e.target.name]: e.target.value}))
    }

    const handleSumbit = async (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        try {
            const res = await fetch("/api/send", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            })
            if(!res.ok){
                setValues({name: "", email: "", phone: "", message: ""})
            }
        } catch (error) {
            console.log(error)
        }
        window.location.reload();
    }

    return(
        <div className="flex w-screen h-screen justify-center">
            <div className="flex w-3/4 flex-col justify-center">
                <div className="flex flex-col justify-center w-full text-center">
                    <motion.h1  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { opacity: 1, x: 0 }, hidden: { opacity: 0, x: -100 }}} transition={{ delay: 0.1, duration: 0.5 }} className="font-bold text-5xl my-2">{title}</motion.h1>
                    <motion.h2  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y:50 }}} transition={{ delay: 0.2, duration: 0.5 }} className="font-bold text-2xl my-3">{subtitle}</motion.h2>
                    <motion.h3 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: -50 }}} transition={{ delay: 0.2, duration: 0.5 }} className="font-bold text-sm">{subsubtitle}</motion.h3>
                </div>
                <div className="flex w-full justify-center">
                    <div className="flex flex-col w-full justify-center">
                        <div className="flex justify-center w-full">
                            <div onSubmit={handleSumbit} className="flex flex-col sm:w-1/2">
                                <motion.form  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y:50 }}} transition={{ delay: 0.4, duration: 0.5 }} className="flex flex-col" method="post">
                                    <input onChange={onChange} name="name" value={values.name} className="focus:outline-none border-b border-[#0e1624] dark:border-white input h-10 placeholder-[#0e1624] dark:placeholder-white" placeholder={yourname} type="text" id="name" required/>
                                    <input onChange={onChange} name="email" value={values.email} className="focus:outline-none border-b border-[#0e1624] dark:border-white input h-10 placeholder-[#0e1624] dark:placeholder-white" placeholder={email} type="email" id="email" required/>
                                    <input onChange={onChange} name="phone" value={values.phone} className="focus:outline-none border-b border-[#0e1624] dark:border-white input h-10 placeholder-[#0e1624] dark:placeholder-white" placeholder={phone} type="phone" id="phone" required/>
                                    <textarea onChange={onChange} name="message" value={values.message} className="input focus:outline-none border-b border-[#0e1624] dark:border-white placeholder-[#0e1624] dark:placeholder-white" id="message" placeholder={message}></textarea>
                                    <button type="submit" className="flex mt-4 justify-center">
                                        <motion.div whileHover={{ x: 10 }} whileTap={{ scale: 0.9 }} className="flex flex-nowrap fill-[#0e1624] dark:fill-white transition-colors py-2 px-4 cursor-pointer border border-[#0e1624] dark:border-white hover:bg-[#0e1624] dark:hover:bg-white bg-left hover:bg-right hover:fill-white dark:hover:fill-[#0e1624] dark:hover:text-[#0e1624] hover:text-white text-[#0e1624] dark:text-white">
                                                    <div className="flex flex-nowrap">
                                                        <p className="font-bold">{conactus}</p>
                                                        <svg className=" mt-px ml-1" width="24" height="24" xmlns="http://www.w3.org/2000/svg" clip-rule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg>
                                                    </div>
                                        </motion.div>
                                    </button>
                                </motion.form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact