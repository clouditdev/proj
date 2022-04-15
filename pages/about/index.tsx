import { NextPage } from "next"
import Head from "next/head"
import { useRouter } from "next/router"
import MainLayout from "../../components/MainLayout"

const about: NextPage = () => {
    let router = useRouter()

    let title =
     router.locale === "en-US" ? "About us — CloudITdev" : 
     router.locale === "de" ? "Über uns — CloudITdev" :
     router.locale === "ru" ? "О нас — CloudITdev"
     : ''

    return (
      <div className="flex overflow-x-hidden">
        <Head>
            <link rel="manifest" href="/manifest.json" />
            <link rel="apple-touch-icon" href="/logo.png"></link>
            <title>{title}</title>
            <link rel="icon" href="favicon.svg" />
        </Head>
      <MainLayout>
        
      </MainLayout>
      </div>
    )
  }
  
  export default about