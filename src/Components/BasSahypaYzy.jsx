import React from 'react'
import { useNavigate } from "react-router-dom";
import baner from './Images/biz-barada.svg'
import icon from './Images/doly-okamak-arrow.svg'
import {Link} from "react-router-dom";

export default function BasSahypaYzy() {
  //   const navigate = useNavigate();

  //   const handleSeeMoreClick = () => {
  //   navigate("/BizBarada");
  // };
  return (
    <>
      <div className="mainContainer h-[420px] px-10 bg-[#E7E7E7] mt-8">
        <div className="navBar h-96 flex items-center ">
          <div className='h-96 flex justify-start items-center w-2/4'>
            <img src={baner}/>
          </div>

          <div className='w-2/4 h-96 flex flex-col justify-start items-start pt-3 gap-5 '>
            <div className="text-2xl font-semibold leading-relaxed"><h1>Biz barada</h1></div>
              <p className='text-lg'>Türkmenistanyň Ministrler Kobinetiniň ýanyndaky Ulag we kommuniskasiýalar agentligine degişli 
                bolan "Türkmenawtoulaglary" agentliginiň we onuň garamagyndaky kärhanalaryň ýerine ýetirýän 
                edilýan talap gün saýyn artýar. Ahal welaýatynda ýerleşýän "Ahalawtoulag" önumçilik birleşiginde
                hem döwrüň talabyna laýyk gelýän işler alnyp barylýar.
                Birleşik döredilen gününden bäri ilata ýolagçy we ýük gatnaw hyzmatlary yzygiderli hödürlenip,
                müşderileriň islegleri kanagatlandyrylýar. Kärhananyň köp ýyllyk baý tejribesinde raýatlara 
                sürüjileriň medeniýetli hyzmat etmegi bilen işler has kämilleşdirildi. Şonun esasynda bolsa awtoulag kysymlary
                hem-de olary sany bilen baglylykda düýpli özgertmeler amala aşyryldy.  
              </p>

              <div className="button flex justify-start items-end h-14">
                <Link to="/BizBarada" className='bg-[#059B36] h-9 w-40 flex justify-center items-center gap-3 text-white  rounded-lg hover:bg-[#22c55e]'>Doly okamak <img src={icon}/></Link>
                {/* <button type='submit' onClick={handleSeeMoreClick} className='bg-[#059B36] h-10 w-36 flex justify-center items-center gap-3 text-white  rounded-lg'>Doly okamak <img src={icon}/></button>
               */}
              </div>
          </div>
        </div>
      </div>
    </>
  )
}
