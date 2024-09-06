import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
// import {useNavigate} from 'react-router-dom';
import sargytlarImg from './Images/sargytlar-img.svg'
import circleCheck from './Images/tanysdym-check.svg'


export default function Sargytlar() {
  // const navigate = useNavigate();
  return (
    <>
      <div className="main">
        <div className="mainContainer px-10 flex flex-col gap-5">

          <div className="aboutContainer flex flex-row gap-4">
            <div className="img w-[703.2px] h-[386.1px]">
              <img src={sargytlarImg} />
            </div>
            <div className="sentence flex flex-col gap-3 w-[716px] h-[242px]">
              <div className="name">
                <h1 className='text-4xl font-semibold'>Uns berin!</h1>
              </div>

              <div className="text-lg font-sans">
                <p>
                  Edara-kärhanalaryň we raýatlaryň dykgatyna!
                  Býujetden sarp edijilere awtomobil ulaglary bilen ýükleri daşamak hyzmaty 
                  boýunça nyrhlar 2024-nji ýylyň maýl aýynyň 1-den güýje giren 
                  № 17/2-2024 NYRHNAMA esasynda amala aşyrylýar.<br/>
                  Sargytlar azyndan 24 sagat öňünden edilmelidir.
                </p>
              </div>
              
              <div className='bg-[#059B36] flex flex-row justify-center items-center gap-2 rounded-md h-[34px] w-[139px] cursor-pointer '>
                <Link to="/Sargytlar/SargytlarTwo" className='text-[#ffff]'>Tanysdym</Link>
                <img src={circleCheck} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}


