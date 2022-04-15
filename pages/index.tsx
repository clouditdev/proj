import type { NextPage } from 'next'
import MainLayout from '../components/MainLayout'
import { MainPage } from '../components/Pages/MainPage'

const Home: NextPage = () => {
  return (
    <div className="flex overflow-x-hidden">
    <MainLayout>
      <div className="flex">
        <MainPage />
      </div>
    </MainLayout>
    </div>
  )
}

export default Home
