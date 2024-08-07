import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { useState, useContext } from 'react';
import {useNavigate} from 'react-router-dom';
import leftArrow from './Images/lesft-arrow.svg'
import rightArrow from './Images/right-dowamEtmek.svg'
import trueIcon from './Images/radio_button_checked-true.svg'
import falseIcon from './Images/radio-button-checked-false.svg'
import { SelectionContext } from '../App';


export default function SargytlarTwo() {
  // const [toggle, setToggle] = useState(1)
  

  const { selection, setSelection } = useContext(SelectionContext);
  const navigate = useNavigate();
  const handleSelection = (choice) => {
    setSelection({ ...selection, sargytlarTwo: choice });
  };

  const handleNext = () => {
    navigate('/Sargytlar/SargytlarTwo/SargytlarThree');
  };

  return (
    <>
      <div className="main">
        <div className="mainContainer px-10 flex flex-col gap-16 mb-56">
          <div onClick={() => navigate('/Sargytlar')} className="returnBack flex flex-row gap-2 items-center cursor-pointer">
            <img src={leftArrow} />
            <span className='font-semibold text-xl'>Yza gecmek</span>
          </div>
          
          <div className="selectContainer flex items-center flex-col gap-7">

            <div className="select flex flex-row gap-5">
              <div onClick={() => handleSelection('Awtobus')}   className={`flex flex-row gap-2 justify-start items-center pl-5 cursor-pointer rounded-md w-[350px] h-[60px] border-[1px] border-[#EEEEE] ${selection.sargytlarTwo === 'Awtobus' ? 'bg-[#EEEE]' : 'bg-[#FFFF]'}`}>
                <img src={selection.sargytlarTwo === 'Awtobus' ? trueIcon : falseIcon}/>
                <span className='text-lg'>Awtobus</span>
              </div>
              <div onClick={() => handleSelection('YukUlagy')}  className={`flex flex-row gap-2 justify-start items-center pl-5 cursor-pointer rounded-md w-[350px] h-[60px] border-[1px] border-[#EEEEE] ${selection.sargytlarTwo === 'YukUlagy' ? 'bg-[#EEEE]' : 'bg-[#FFFF]'}`}>
                <img src={selection.sargytlarTwo === 'YukUlagy' ? trueIcon : falseIcon}  />
                <span className='text-lg'>Yuk ulagy</span>
              </div>
            </div>

            <div className=" flex justify-end items-end w-[57%] ">
              <div onClick={handleNext} className="nextButton bg-[#059B36] cursor-pointer px-4 rounded-[4px] flex gap-4 justify-center items-centerw-[150px] h-[44px] ">
                <Link to="/Sargytlar/SargytlarTwo/SargytlarThree" className='text-[#ffff] text-lg flex items-center justify-center'>Dowam etmek</Link>
                <div className=" flex justify-center items-center">
                  <img src={rightArrow} className='w-[24px] h-[24px]'/>
                </div> 
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
