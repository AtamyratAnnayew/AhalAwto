import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import habarlar from "./Images/habarlar-1-Img.svg"
import eye from "./Images/habarlar-eye.svg"
import data from "./Images/habarlar-date.svg"
import rightArrow from './Images/hemmesi-arrow.svg'

export default function BasSahypaHabarlar() {
    // const navigation = useNavigate();

    // const handleClick =() => {
    //     navigation('/Habarlar')
    // }

  return (
    <>
      <div className="mainContainer mt-10">
        <div className="body px-3 ">
            <div className="textRow flex justify-between pr-3 cursor-pointer">
                <div className="textContainer">
                    <h1 className='text-3xl font-bold'>Habarlar</h1>
                </div>
                <div className="linkHabarlar flex flex-row gap-2 cursor-pointer">
                    <Link to="/Habarlar" className="text-2xl font-bold">Hemmesi</Link>
                    {/* <button className='text-2xl font-bold'>Hemmesi</button> */}
                    <img src={rightArrow} />
                </div>
            </div>
            <div className="parentElement flex flex-row gap-8 px-4 pt-5">
            <div className="firstBlock flex flex-col gap-3">
                <div className="imageBlock">
                  <img src={habarlar} />
                </div>
                <div className="textBlock font-bold pt-6">
                  <p>
                    Italiýanyň Türkmenistandaky ilçihanasy  <br/> administratiw kömekçiniň 
                    wezipesine <br/> boş iş ýerini hödürleýär
                  </p>
                </div>
                <div className="child flex flex-row justify-between pt-5">
                  <div className="flex flex-row gap-2 items-center">
                    <img src={eye} />
                    <span>14</span>
                  </div>
                  <div className=" flex flex-row gap-2 items-center">
                    <img src={data} />
                    <span className="data">06.09.24</span>
                  </div>
                </div>
              </div>

              <div className="secondBlock flex flex-col gap-3">
                <div className="imageBlock">
                  <img src={habarlar} />
                </div>
                <div className="textBlock font-bold pt-6">
                  <p>
                    Italiýanyň Türkmenistandaky ilçihanasy  <br/> administratiw kömekçiniň 
                    wezipesine <br/> boş iş ýerini hödürleýär
                  </p>
                </div>
                <div className="child flex flex-row justify-between pt-5">
                  <div className="flex flex-row gap-2 items-center">
                    <img src={eye} />
                    <span>14</span>
                  </div>
                  <div className="flex flex-row gap-2 items-center">
                    <img src={data} />
                    <span className="data">06.09.24</span>
                  </div>
                </div>
              </div>

              <div className="thirdBlock flex flex-col gap-3">
                <div className="imageBlock">
                  <img src={habarlar} />
                </div>
                <div className="textBlock font-bold pt-6">
                  <p>
                    Italiýanyň Türkmenistandaky ilçihanasy  <br/> administratiw kömekçiniň 
                    wezipesine <br/> boş iş ýerini hödürleýär
                  </p>
                </div>
                <div className="child flex flex-row justify-between pt-5">
                  <div className="flex flex-row gap-2 items-center">
                    <img src={eye} />
                    <span>14</span>
                  </div>
                  <div className="flex flex-row gap-2 items-center">
                    <img src={data} />
                    <span className="data">06.09.24</span>
                  </div>
                </div>
              </div>

              <div className="fourthBlock flex flex-col gap-3">
                <div className="imageBlock">
                  <img src={habarlar} />
                </div>
                <div className="textBlock font-bold pt-6">
                  <p>
                    Italiýanyň Türkmenistandaky ilçihanasy  <br/> administratiw kömekçiniň 
                    wezipesine <br/> boş iş ýerini hödürleýär
                  </p>
                </div>
                <div className="child flex flex-row justify-between pt-5">
                  <div className="flex flex-row gap-2 items-center">
                    <img src={eye} />
                    <span>14</span>
                  </div>
                  <div className="flex flex-row gap-2 items-center">
                    <img src={data} />
                    <span className="data">06.09.24</span>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}
