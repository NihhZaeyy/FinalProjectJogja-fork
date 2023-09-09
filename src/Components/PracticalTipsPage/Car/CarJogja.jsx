import React from 'react'
import { useNavigate } from 'react-router-dom'

import Navbar from '../../Landing/Navbar/Navbar'
import BotButton from '../../Landing/Landing-bot/BotButton'
import Footer from '../../Footer/Footer'

const CarJogja = () => {
  const navigateToPracticalTipsPage = useNavigate()

  return (
    <div>
        <div className='bg-[url("/Assets/practical-tips/bg-car.png")] w-screen h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center'>
            <Navbar />
            <div className='w-screen sm:w-[70vw] h-[90vh] flex justify-center items-center px-10 pb-[7rem] flex-col'>
                <h1 className='text-white text-5xl lg:text-[72px] italic text-center'>Car Tips and Rules</h1>
                <p className='text-white text-[12px] text-center mt-5 lg:w-[50vw] lg:text-[16px]'>Traveling to Jogja by car provides the flexibility to explore the scenic landscapes and cultural attractions of Central Java at your own pace.</p>
            </div>
        </div>

        <div className='flex flex-col items-center px-5 pt-10 mb-10 sm:items-start lg:flex-row lg:px-10'>
            <div className='mb-5 lg:w-1/3'>
                <h2 className='border-t-2 pt-2 lg:w-[270px]'>Useful things to know</h2>
            </div>
            <div className='flex flex-col gap-5 lg:w-2/3'>
                <div>
                    <h3 className='mb-2 text-[18px] '>Check Your Vahicles</h3>
                    <ul>
                        <li><i class='bx bx-chevron-right font-bold text-[20px] relative top-[3px]'></i>Ensure that your car is in good condition, with all necessary maintenance, such as brakes, tires, and engine, up to date.</li>
                    </ul>
                </div>
                <div>
                    <h3 className='mb-2 text-[18px]'>Driving License</h3>
                    <ul>
                        <li><i class='bx bx-chevron-right font-bold text-[20px] relative top-[3px]'></i>Carry a valid international driving license if required, along with your regular driving license.</li>
                    </ul>
                </div>
                <div>
                    <h3 className='mb-2 text-[18px]'>Traffic Rules</h3>
                    <ul>
                        <li><i class='bx bx-chevron-right font-bold text-[20px] relative top-[3px]'></i>Familiarize yourself with Indonesian traffic rules, including driving on the left side of the road, obeying traffic signs, and using seat belts.</li>
                    </ul>
                </div>
                <div>
                    <h3 className='mb-2 text-[18px]'>Navigation</h3>
                    <ul>
                        <li><i class='bx bx-chevron-right font-bold text-[20px] relative top-[3px]'></i>Use GPS or maps to plan your route and avoid getting lost. Consider downloading offline maps for areas with poor signal reception.</li>
                    </ul>
                </div>
                <div>
                    <h3 className='mb-2 text-[18px]'>Weather</h3>
                    <ul>
                        <li><i class='bx bx-chevron-right font-bold text-[20px] relative top-[3px]'></i>Check weather forecasts, as heavy rainfall can affect road conditions and visibility in certain seasons.</li>
                    </ul>
                </div>
                <div>
                    <h3 className='mb-2 text-[18px]'>Accommodation</h3>
                    <ul>
                        <li><i class='bx bx-chevron-right font-bold text-[20px] relative top-[3px]'></i>Plan your accommodation in advance, especially during peak tourist seasons, and ensure you have parking arrangements if necessary.</li>
                    </ul>
                </div>
                <div>
                    <h3 className='mb-2 text-[18px]'>Emergency Contacts</h3>
                    <ul>
                        <li><i class='bx bx-chevron-right font-bold text-[20px] relative top-[3px]'></i>Keep a list of emergency contact numbers, including local police, medical services, and your country's embassy or consulate.</li>
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

export default CarJogja
