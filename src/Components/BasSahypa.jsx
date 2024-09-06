import React from 'react'
import { useState, useEffect } from 'react'
import carousel from "./Images/circle-img.svg"
import baner from './Images/baner.svg'
import yearName from './Images/inside of baner.svg'
import secondBaner from './Images/baner-2.svg'
import firstServiceIcon from './Images/first-service-icon.svg'
import secondServiceIcon from './Images/ygtybarly-hyzmatdas.svg'
import thirdServiceIcon from './Images/calt-we-amatly.svg'
import fourthServiceIcon from './Images/isine-okde-surujiler.svg'
import ellipsIcon from './Images/EllipseCarousel.svg'
import recIcon from './Images/RectangleCarousel.svg'
import leftArrow from './Images/left-arrow-icon.svg'
import rightArrow from './Images/right-arrow-icon.svg'
// import baner from './Images/biz-barada.svg'
import icon from './Images/doly-okamak-arrow.svg'
// import BasSahypaYzy from './BasSahypaYzy'


export default function BasSahypa() {
  const images = [carousel, carousel, carousel, carousel];
 
  const [currentSlide, setCurrentSlide] = useState(0);
   
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change interval to 2000 for 2 seconds

    return () => clearInterval(intervalId); // Cleanup function for interval
  }, []);

  const handleNext = () => {
    setCurrentSlide((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  return (
    <>
      <div className='mainContainer '>
        <div className="parentContainer w-full z-10">
          <div className="images flex flex-row gap-5 ">

            <div className="carousel-img relative">
              {images.map((image, index) => (
              <img
                key={image}
                src={image}
                alt={`Slide ${index + 1}`}
                className={
                index === currentSlide ? "block w-full h-full object-cover" : "hidden"
              }
              />
              ))}
              <div className='iconsCarousel h-10 w-full absolute top-[430px] flex flex-row items-center justify-between px-5'> 

                <div className="circleIcons flex flex-row justify-center items center gap-1">
                  <img src={ellipsIcon} />
                  <img src={recIcon} />
                  <img src={ellipsIcon} />
                  <img src={ellipsIcon} />
                </div>

                <div className="arrowIcons flex flex-row gap-1">
                  <span onClick={handlePrev} className='leftIcon backdrop-blur-sm bg-white/30 rounded-lg cursor-pointer'>
                    <img src={leftArrow} />
                  </span>

                  <span onClick={handleNext} className='rightIcon backdrop-blur-sm bg-white/30 rounded-lg cursor-pointer'>
                    <img src={rightArrow} />
                  </span>
                </div>

              </div>
            </div>

            <div className='baner-container flex flex-col gap-5'>
              <div className='relative '>
                <img src={baner}/>
                <div className='absolute top-[20px] left-5'>
                  <img src={yearName} />
                </div>
              </div>

              <div className='second-baner-container relative '>
                <div className=''>
                  <img src={secondBaner} />
                </div>

                <div className='absolute top-[150px] left-2'>
                  <div className='bg-[#059B36] w-[85px] h-7 flex justify-center text-white italic rounded-t-lg '>
                    Habar
                  </div>

                  <div className='flex flex-row gap-2 w-[420px] h-[80px] backdrop-blur-xl bg-white/30 py-2 px-5 justify-start items-center rounded-bl-lg rounded-r-lg '>
                    
                    <div className='w-[5px] h-[50px] rounded-sm bg-[#059B36]'> </div>
                    
                    <div className='letter text-white'>
                        Daşoguz welayatynyň ilatyna döwrebap yolagçy <br/> awtobusynyň ençemesi sowgat berildi
                    </div>
      
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className='service-container w-full h-44 '>
          <div className='h-16 flex items-center'>
            <p className='text-2xl bold'>Hyzmatlarymyz</p>
          </div>

          <div className='flex gap-5'>

            <div className='bg-[#EEEEEE] w-[23.8%] h-24 rounded-lg px-5 flex flex-col items-start justify-center  cursor-pointer hover:bg-[#059B36] transition delay-200 duration-300 ease-in-out text-black hover:text-white'>
              <div>
                <img src={firstServiceIcon}/>
              </div>
              <div className=''>
                Baý tejribe
              </div>
            </div>

            <div className='bg-[#EEEEEE] w-[23.8%] h-24 rounded-lg px-5 flex flex-col items-start justify-center cursor-pointer hover:bg-[#059B36] transition delay-200 duration-300 ease-in-out text-black hover:text-white'>
              <div>
                <img src={secondServiceIcon} className='fill-black'/>
              </div>
              <div className=''>
                Ygtybarly hyzmatdaş
              </div>
            </div>

            <div className='bg-[#EEEEEE] w-[23.8%] h-24 rounded-lg px-5 flex flex-col items-start justify-center cursor-pointer hover:bg-[#059B36] transition delay-200 duration-300 ease-in-out text-black hover:text-white'>
              <div>
                <img src={thirdServiceIcon}/>
              </div>
              <div>
                Çalt we amatly
              </div>
            </div>

            <div className='bg-[#EEEEEE] w-[23.8%] h-24 rounded-lg px-5 flex flex-col items-start justify-center cursor-pointer hover:bg-[#059B36] transition delay-200 duration-300 ease-in-out text-black hover:text-white'>
              <div>
                <img src={fourthServiceIcon}/>
              </div>
              <div>
                Işine ökde sürijiler
              </div>
          </div>
        </div>
        

      </div> 
    </div>
    </>
  )
}

