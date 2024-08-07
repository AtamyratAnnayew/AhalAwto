import React, { Component } from 'react'
import baner from './Images/Bizbarada-uly-Baner.svg'


export default class BizBarada extends Component {
  render() {
    return (
      <div className='flex items-center justify-center my-10'>
        <div className='flex flex-col justify-center items-center gap-5'>
          <div className="">
            <img src={baner} />
          </div>
          <div className="flex justify-center items-center">
            <p className='w-[756px] font-sans text-lg '>Berkarar döwletiň täze eýýamynyň Galkynyşy döwründe ýurdumyzyň ykdysady ösüşine goşant goşýan awtoulag sürüjileriniň hünär ussatlyklaryny ýüze çykarmak, şeýle-de, olaryň iş tejribelerini baýlaşdyrmak maksady bilen birnäçe işler alnyp barylýar.
              Şol asylly işleriň netijesinde awtoulag sürüjileri ýol hereketiniň düzgünlerini berjaý etmek, zähmeti goramak we tehniki howpsuzlyk düzgünlerini ýerine ýetirmek, ilkinji lukmançylyk kömegini bermek babatda baý tejribe topladylar.
              “Ahalawtoulag” önümçilik birleşiginiň hödürleýän hyzmatlaryndan peýdalanjak raýatlarymyz şu salgy boýunça habarlaşyp, özlerine gerekli ulaglary sargyt edip bilerler: <br/>
              Ahal welaýatynyň Gökdepe etrabynyň Gökdepe şäheriniň A.Annanyýazow köçesiniň 48-nji jaýy <br/>
              Tel: (+993 132) 4-09-06 <br/>
              Faks: (+993 132) 4-09-06 <br/>
            </p>
          </div>
        </div>
      </div>
    )
  }
}
