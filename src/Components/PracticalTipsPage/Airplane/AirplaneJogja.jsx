import React from 'react'
import { useNavigate } from 'react-router-dom'

import Navbar from '../../Landing/Navbar/Navbar'
import BotButton from '../../Landing/Landing-bot/BotButton'
import Footer from '../../Footer/Footer'

const AirplaneJogja = () => {
    const navigateToPracticalTipsPage = useNavigate()

  return (
    <div>
        <div className='bg-[url("/Assets/practical-tips/bg-airplane.png")] w-screen h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center'>
            <Navbar />
            <div className='w-screen sm:w-[70vw] h-[90vh] flex justify-center items-center px-10 pb-[7rem] flex-col'>
                <h1 className='text-white text-5xl lg:text-[72px] italic text-center'>Airplane Tips and Rules</h1>
                <p className='text-white text-[12px] text-center mt-5 lg:w-[50vw] lg:text-[16px]'>Traveling to Jogja with airplane is one of the easiest methods.By following all rules, it's gonna be the best holiday ever.</p>
            </div>
        </div>

        <div className='flex flex-col items-center px-5 pt-10 mb-10 sm:items-start lg:flex-row lg:px-10'>
            <div className='mb-5 lg:w-1/3'>
                <h2 className='border-t-2 pt-2 lg:w-[270px]'>Useful things to know</h2>
            </div>
            <div className='flex flex-col gap-5 lg:w-2/3'>
                <div>
                    <h3 className='mb-2 text-[18px] '>How to get to Jogja with airplane?</h3>
                    <ul>
                        <li><i class='bx bx-chevron-right font-bold text-[20px] relative top-[3px]'></i>Start by booking a flight to Yogyakarta's Adisutjipto International Airport (JOG) or the newer Yogyakarta International Airport (YIA).</li>
                        <li><i class='bx bx-chevron-right font-bold text-[20px] relative top-[3px]'></i>You can search for available flights on various online travel agencies or directly through the official websites of airlines that operate flights to Yogyakarta.</li>
                    </ul>
                </div>
                <div>
                    <h3 className='mb-2 text-[18px]'>Transportation to City Center</h3>
                    <ul>
                        <li><i class='bx bx-chevron-right font-bold text-[20px] relative top-[3px]'></i>Yogyakarta's city center is not far from both Adisutjipto International Airport and Yogyakarta International Airport.</li>
                        <li><i class='bx bx-chevron-right font-bold text-[20px] relative top-[3px]'></i>You can choose from various transportation options, including airport taxis, ride-sharing services (if available), or shuttle buses. Be sure to check the available transportation options at the airport.</li>
                    </ul>
                </div>
                <div>
                    <h3 className='mb-2 text-[18px]'>Passport and Visa requirements</h3>
                    <ul>
                        <li><i class='bx bx-chevron-right font-bold text-[20px] relative top-[3px]'></i>You must have a <b>valid passport</b> to enter Indonesia. Make sure your passport has at least six months of validity from your planned date of entry into the country.</li>
                        <li><i class='bx bx-chevron-right font-bold text-[20px] relative top-[3px]'></i><b>Visa requirements</b> for Indonesia vary depending on your nationality and the purpose and duration of your visit.</li>
                        <li><i class='bx bx-chevron-right font-bold text-[20px] relative top-[3px]'></i>For more information, you can contact the nearest <b>Indonesian Embassy or Consulate</b> or check <b>the official Indonesian government website</b> for the most accurate and up-to-date information regarding passport and visa requirements.</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='flex justify-end px-10'>
            <div className='flex gap-2 items-center bg-button2 rounded-xl w-[300px] cursor-pointer drop-shadow-md my-5'
                onClick={() => navigateToPracticalTipsPage('/practical-tips-page')}>
                <button 
                    id='botButton' 
                    className='text-button  text-3xl px-[6px] py-[1px] w-[3rem] h-[3rem] flex justify-center items-center z-[1] '
                >
                    <i className='bx bx-x'></i>
                </button>
                <p className='font-Poppins'>Back to Practical Tips Page</p>
            </div>
        </div>
        <div className='flex justify-center items-center'>
            <BotButton />
        </div>
        <Footer />
    </div>
  )
}

export default AirplaneJogja
