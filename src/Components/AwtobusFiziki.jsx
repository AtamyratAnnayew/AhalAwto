import React from 'react'
import leftArrow from './Images/lesft-arrow.svg'
import ugratmakIcon from './Images/ugratmakIcon.svg'


export default function AwtobusFiziki() {
    
  return (
    <>
      <div className="main">
        <div className="mainContainer px-10 ">
          <div>

          <div className="returnBack flex flex-row gap-3 items-center cursor-pointer">
            <img src={leftArrow} />
            <span className='text-xl'>Yza gecmek</span>
          </div>

          <div className="bodyContainer pt-5 flex flex-col gap-6">
            <div className="parentFirst ">
              <form action="#" className='flex flex-row gap-5'>
                <div className='firstChild flex flex-col gap-2 w-[422px] h-[81.50px]'>
                  <label className='text-lg'> Jogapkarin Familyasy, ady <span className='text-red-500 text-xl'>*</span></label>
                  <input type="text" name='name' placeholder='Jogapkarin Familyasy, ady' className=' pl-3 flex items-center  border-[2px] border-[#EEEE] rounded-lg h-[43px]'/>
                </div>
                
                <div className='secondChild flex flex-col gap-2 w-[422px] h-[81.50px]'>
                  <label className='text-lg'> Nirden</label>
                  <input type="text" name='nirden' placeholder='Nirden' className=' pl-3 flex items-center  border-[2px] border-[#EEEE] rounded-lg h-[43px]'/>
                </div>

                <div className='thirdChild flex flex-col gap-2 w-[422px] h-[81.50px]'>
                  <label className='text-lg'> Nira</label>
                  <input type="text" name='nira' placeholder='Nira' className=' pl-3 flex items-center  border-[2px] border-[#EEEE] rounded-lg h-[43px]'/>
                </div>

              </form>
            </div>

            <div className="parentSecond ">
              <form action="#" className='flex flex-row gap-5'>
                <div className='firstChild flex flex-col gap-2 w-[422px] h-[81.50px]'>
                  <label className='text-lg'> Telefon belgi</label>
                  <input type="number" name='number' placeholder='+993' className=' pl-3 flex items-center  border-[2px] border-[#EEEE] rounded-lg h-[43px]'/>
                </div>
                
                <div className='secondChild flex flex-col gap-2 w-[422px] h-[81.50px]'>
                  <label className='text-lg'> E-mail</label>
                  <input type="email" name='email' placeholder='E-mail' className=' pl-3 flex items-center  border-[2px] border-[#EEEE] rounded-lg h-[43px]'/>
                </div>

                <div className='thirdChild flex flex-col gap-2 w-[422px] h-[81.50px]'>
                  <label className='text-lg'> Orunlaryn sany</label>
                  <input type="text" name='orunlaryn sany' placeholder='Orunlaryn sany' className=' pl-3 flex items-center  border-[2px] border-[#EEEE] rounded-lg h-[43px]'/>
                </div>

              </form>
            </div>

            <div className="parentThird">
              <form action="#" className='flex flex-row gap-5'>
                <div className='firstChild flex flex-col gap-2 w-[422px] h-[81.50px]'>
                  <label className='text-lg'> Ady</label>
                  <input type="text" name='ady' placeholder='Ady' className=' pl-3 flex items-center  border-[2px] border-[#EEEE] rounded-lg h-[43px]'/>
                </div>
                
                <div className='secondChild flex flex-col gap-2 w-[422px] h-[81.50px]'>
                  <label className='text-lg'> Sargydyn dowamlylygy</label>
                  <input type="text" name='dowamlylyk' placeholder='Sargydyn dowamlylygy' className=' pl-3 flex items-center  border-[2px] border-[#EEEE] rounded-lg h-[43px]'/>
                </div>

                <div className='thirdChild flex flex-col gap-2 w-[422px] h-[81.50px]'>
                  <label className='text-lg'> Ulagyn barmaly senesi</label>
                  <input type="data" name='wagty' placeholder='dd.mm.yyyy' className=' pl-3 flex items-center  border-[2px] border-[#EEEE] rounded-lg h-[43px]'/>
                </div>

              </form>
            </div>
            <div className="bellik flex flex-col gap-2">
              <label>Bellik</label>
              <textarea placeholder='Bellik' className='pl-5 border-[2px] border-[#EEEE] h-[174px] rounded-lg'>
                
              </textarea>
            </div>
          </div>
          </div>

          <div className="nextBtn mt-5 flex items-center justify-center flex-row gap-2 bg-[#059B36] rounded-lg w-[120px] h-[44px]">
            <span>Ugratmak</span>
            <img src={ugratmakIcon} />
          </div>
        </div>
      </div>
    </>
  )
}
