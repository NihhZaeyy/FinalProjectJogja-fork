import React from 'react'
import { useNavigate } from 'react-router-dom'

import Navbar from '../../Landing/Navbar/Navbar'

import Footer from '../../Footer/Footer'

const MotorJogja = () => {
  const navigateToPracticalTipsPage = useNavigate()

  return (
    <div>
        <div className='bg-[url("/Assets/practical-tips/bg-motor.png")] w-screen h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center'>
            <Navbar />
            <div className='w-screen sm:w-[70vw] h-[90vh] flex justify-center items-center px-10 pb-[7rem] flex-col'>
                <h1 className='text-white text-5xl lg:text-[72px] italic text-center'>Motorcycles Tips and Rules</h1>
                <p className='text-white text-[12px] text-center mt-5 lg:w-[50vw] lg:text-[16px]'>When traveling to Jogja with motorcycles, always wear helmets, follow traffic rules, and be cautious on the road to ensure a safe and enjoyable journey.</p>
            </div>
        </div>

        <div className='flex flex-col items-center px-5 pt-10 mb-10 sm:items-start lg:flex-row lg:px-10'>
            <div className='mb-5 lg:w-1/3'>
                <h2 className='border-t-2 pt-2 lg:w-[270px]'>Useful things to know</h2>
            </div>
            <div className='flex flex-col gap-5 lg:w-2/3'>
                <div>
                    <h3 className='mb-2 text-[18px] '>Safety Gear</h3>
                    <ul>
                        <li><i class='bx bx-chevron-right font-bold text-[20px] relative top-[3px]'></i>Always wear appropriate safety gear, including helmets, gloves, and protective clothing, to ensure your safety while riding.</li>
                    </ul>
                </div>
                <div>
                    <h3 className='mb-2 text-[18px]'>License</h3>
                    <ul>
                        <li><i class='bx bx-chevron-right font-bold text-[20px] relative top-[3px]'></i>Carry a valid motorcycle license and necessary documents, such as vehicle registration and insurance.</li>
                    </ul>
                </div>
                <div>
                    <h3 className='mb-2 text-[18px]'>Road Rules</h3>
                    <ul>
                        <li><i class='bx bx-chevron-right font-bold text-[20px] relative top-[3px]'></i>Familiarize yourself with Indonesian road rules and traffic signs, and adhere to speed limits and local driving customs.</li>
                    </ul>
                </div>
                <div>
                    <h3 className='mb-2 text-[18px]'>Motorcycle Condition</h3>
                    <ul>
                        <li><i class='bx bx-chevron-right font-bold text-[20px] relative top-[3px]'></i>Ensure your motorcycle is in good condition, with functioning brakes, lights, and tires.</li>
                    </ul>
                </div>
                <div>
                    <h3 className='mb-2 text-[18px]'>Maintenance</h3>
                    <ul>
                        <li><i class='bx bx-chevron-right font-bold text-[20px] relative top-[3px]'></i>Perform regular maintenance checks on your motorcycle throughout the journey to avoid breakdowns.</li>
                    </ul>
                </div>
                <div>
                    <h3 className='mb-2 text-[18px]'>Emergency Kit</h3>
                    <ul>
                        <li><i class='bx bx-chevron-right font-bold text-[20px] relative top-[3px]'></i>Carry an emergency kit with essential supplies, such as a flashlight, basic tools, and a first-aid kit.</li>
                    </ul>
                </div>
                <div>
                    <h3 className='mb-2 text-[18px]'>Local Etiquette</h3>
                    <ul>
                        <li><i class='bx bx-chevron-right font-bold text-[20px] relative top-[3px]'></i>Be respectful of local customs and cultures, particularly when visiting rural areas and villages.</li>
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
        <Footer />
    </div>
  )
}

export default MotorJogja
