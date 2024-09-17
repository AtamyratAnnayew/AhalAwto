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

export default function SargytlarThree() {
    // const [toggle, setToggle] = useState(1)
  

  const { selection, setSelection } = useContext(SelectionContext);
  const navigate = useNavigate();
  const handleSelection = (choice) => {
    setSelection({ ...selection, sargytlarThree: choice });
  };

  const handleNext = () => {
    const { sargytlarTwo, sargytlarThree } = selection;
    if (sargytlarTwo === 'Awtobus' && sargytlarThree === 'FizikiSahs') {
      navigate('/Sargytlar/SargytlarTwo/SargytlarThree/MasynSargytlar');
    } 
    else if (sargytlarTwo === 'YukUlagy' && sargytlarThree === 'YuridikiSahs') {
      navigate('/Sargytlar/SargytlarTwo/SargytlarThree/YukUlagyYuridiki');
    } 
    else if (sargytlarTwo === 'Awtobus' && sargytlarThree === 'YuridikiSahs') {
      navigate('/Sargytlar/SargytlarTwo/SargytlarThree/AwtobusYuridiki');
    }
    else if (sargytlarTwo === 'YukUlagy' && sargytlarThree === 'FizikiSahs') {
      navigate('/Sargytlar/SargytlarTwo/SargytlarThree/YukUlagyFiziki');
    } 
    // Add other conditions as necessary
  };

  return (
    <>
      <div className="main">
      <div className="mainContainer px-10 flex flex-col gap-16 mb-56">
          <div onClick={() => navigate('/Sargytlar/SargytlarTwo')} className="returnBack flex flex-row gap-2 items-center cursor-pointer">
            <img src={leftArrow} />
            <span className='font-semibold text-xl'>Yza gecmek</span>
          </div>
          
          <div className="selectContainer flex items-center flex-col gap-7">

            <div className="select flex flex-row gap-5">
              <div onClick={() => handleSelection('FizikiSahs')}   className={`flex flex-row gap-2 justify-start items-center pl-5 cursor-pointer rounded-md w-[350px] h-[60px] border-[1px] border-[#EEEEE] ${selection.sargytlarThree === 'FizikiSahs' ? 'bg-[#EEEE]' : 'bg-[#FFFF]'}`}>
                <img src={selection.sargytlarThree === 'FizikiSahs' ? trueIcon : falseIcon} />
                <span className='text-lg'>Fiziki sahs</span>
              </div>
              <div onClick={() => handleSelection('YuridikiSahs')}  className={`flex flex-row gap-2 justify-start items-center pl-5 cursor-pointer rounded-md w-[350px] h-[60px] border-[1px] border-[#EEEEE] ${selection.sargytlarThree === 'YuridikiSahs' ? 'bg-[#EEEE]' : 'bg-[#FFFF]'}`}>
                <img src={selection.sargytlarThree === 'YuridikiSahs' ? trueIcon : falseIcon} />
                <span className='text-lg'>Yuridiki sahs</span>
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
