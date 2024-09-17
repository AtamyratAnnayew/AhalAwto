import React from 'react'
import firstServiceIcon from './Images/first-service-icon.svg'
import secondServiceIcon from './Images/ygtybarly-hyzmatdas.svg'
import thirdServiceIcon from './Images/calt-we-amatly.svg'
import fourthServiceIcon from './Images/isine-okde-surujiler.svg'

export default function Hyzmatlarymyz() {
  return (
    <>
      <div className="mainContainer px-10">
        <div className='flex gap-5'>

            <div className='bg-[#EEEEEE] w-[23.8%] h-24 rounded-lg px-5 flex flex-col items-start justify-center  cursor-pointer hover:bg-[#059B36] transition delay-200 duration-300 ease-in-out text-black hover:text-white'>
              <div>
                <img className='fill-current text-blue-500' src={firstServiceIcon}/>
              </div>
              <div className=''>
                <h1 className='text-lg font-bold'>Baý tejribe</h1>
              </div>
            </div>

            <div className='bg-[#EEEEEE] w-[23.8%] h-24 rounded-lg px-5 flex flex-col items-start justify-center cursor-pointer hover:bg-[#059B36] transition delay-200 duration-300 ease-in-out text-black hover:text-white'>
              <div>
                <img src={secondServiceIcon} className='fill-black'/>
              </div>
              <div className=''>
                <h1 className='text-lg font-bold'>Ygtybarly hyzmatdaş</h1>
              </div>
            </div>

            <div className='bg-[#EEEEEE] w-[23.8%] h-24 rounded-lg px-5 flex flex-col items-start justify-center cursor-pointer hover:bg-[#059B36] transition delay-200 duration-300 ease-in-out text-black hover:text-white'>
              <div>
                <img src={thirdServiceIcon}/>
              </div>
              <div>
                <h1 className="text-lg font-bold">Çalt we amatly</h1>
              </div>
            </div>

            <div className='bg-[#EEEEEE] w-[23.8%] h-24 rounded-lg px-5 flex flex-col items-start justify-center cursor-pointer hover:bg-[#059B36] transition delay-200 duration-300 ease-in-out text-black hover:text-white'>
              <div>
                <img src={fourthServiceIcon}/>
              </div>
              <div>
                <h1 className="text-lg font-bold">Işine ökde sürijiler</h1>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}
