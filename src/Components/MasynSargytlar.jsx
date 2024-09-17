import React from 'react'
import {Link} from 'react-router-dom'
import awtobusIcon from './Images/Awtobus-icon.png'

export default function MasynSargytlar() {
  return (
    <>
      <div className="main">
        <div className="mainContainer px-5">
          <div className="upperText">
            <h1 className="text-3xl font-bold">Awtoulagalr</h1>
          </div>
          <div className="cars flex flex-row gap-5 mt-10">
            <Link to="/Sargytlar/SargytlarTwo/SargytlarThree/MasynSargytlar/AwtobusFiziki" className="hunday p-2 border-[1px] border-[#E7E7E7] rounded-md hover:bg-[#d4d4d4] cursor-pointer">
              <div className="parentElement">
                <div className="first">
                  <span className="font-semibold">Hundaý New Super Aero City</span> 
                  <img src="" alt="" />
                </div>
                <div className="flex flex-row gap-5 mt-10">
                  <div className="flex flex-col gap-4">
                    <div className="bg-[#e5e5e5] rounded-md text-sm w-48 h-9 flex items-center justify-center font-semibold">Orunlaryn sany: 27 orun</div>
                    <div className="bg-[#e5e5e5] rounded-md text-sm w-48 h-9 flex items-center justify-center font-semibold">Bahasy: 1 sagat. | 130 TMT</div>
                  </div>
                  <div className="image w-24 h-24">
                    <img src={awtobusIcon} />
                  </div>
                </div>
              </div>
            </Link>


            <div className="iran-hodro p-2 border-[1px] border-[#E7E7E7] rounded-md hover:bg-[#d4d4d4] cursor-pointer">
              <div className="parentElement">
                <div className="first">
                  <span className="font-semibold">Iran-Hodro 0-457</span> 
                  <img src="" alt="" />
                </div>
                <div className="flex flex-row gap-5 mt-10">
                  <div className="flex flex-col gap-4">
                    <div className="bg-[#e5e5e5] rounded-md text-sm w-48 h-9 flex items-center justify-center font-semibold">Orunlaryn sany: 34 orun</div>
                    <div className="bg-[#e5e5e5] rounded-md text-sm w-48 h-9 flex items-center justify-center font-semibold">Bahasy: 1 sagat. | 110 TMT</div>
                  </div>
                  <div className="image w-24 h-24">
                    <img src={awtobusIcon} />
                  </div>
                </div>
              </div>
            </div>

            <div className="paz-32 p-2 border-[1px] border-[#E7E7E7] rounded-md hover:bg-[#d4d4d4] cursor-pointer">
              <div className="parentElement">
                <div className="first">
                  <span className="font-semibold">Paz-32054</span> 
                  <img src="" alt="" />
                </div>
                <div className="flex flex-row gap-5 mt-10">
                  <div className="flex flex-col gap-4">
                    <div className="bg-[#e5e5e5] rounded-md text-sm w-48 h-9 flex items-center justify-center font-semibold">Orunlaryn sany: 23 orun</div>
                    <div className="bg-[#e5e5e5] rounded-md text-sm w-48 h-9 flex items-center justify-center font-semibold">Bahasy: 1 sagat. | 83 TMT</div>
                  </div>
                  <div className="image w-24 h-24">
                    <img src={awtobusIcon} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
