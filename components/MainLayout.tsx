import { motion } from "framer-motion";
import { Footer } from "./MainComponents/Footer/Footer";
import BackgroundAnimation from "./MainComponents/Animation/BackgroundAnimation";
import MobileMenu from "./Mobile/MobileMenu";
import Header from "./MainComponents/Header/Header";
import Head from "next/head";
import { Services } from "./MainComponents/PageComponents/Services";
import Contact from "./MainComponents/PageComponents/Contact";

interface LayoutProps {
    children: React.ReactNode;
}

function MainLayout({ children }: LayoutProps) {
    return(
        <div className="flex w-screen min-h-screen justify-center transition-colors duration-500">
            <Head>
                <link rel="manifest" href="/manifest.json" />
                <link rel="apple-touch-icon" href="/logo.png"></link>
            </Head>
            <motion.div className="flex flex-col w-screen z-10 transition-colors">
                <div className="flex w-screen justify-center overflow-hidden">
                    <div className="flex py-4 absolute invisible sm:relative -top-80 -left-80 sm:top-0 sm:left-0 sm:visible sm:w-3/4">
                        <Header />
                    </div>
                    <div className="flex sm:absolute overflow-hidden">
                        <MobileMenu />
                    </div>
                </div>
                <div className="flex flex-col justify-center">
                { children }
                </div>
                <Footer />
            </motion.div>
            <div className="flex fixed h-screen w-screen justify-end bg-white dark:bg-[#0E1624] transition-colors duration-500 ease-in-out">
              <BackgroundAnimation />
            </div>
        </div>
    )
}

export default MainLayout;