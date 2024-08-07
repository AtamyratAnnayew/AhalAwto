import React from 'react'
import baherdenImg from './Images/baherdenImage.svg'

export default function Baherden() {
  return (
    <>
      <div className="main">
        <div className="mainContainer px-10">
            <div className="parentElement">
                <div className="firstChild">
                    <div className="content">
                        <h1>Baherden awtotoplumy</h1>
                    </div>
                    <div className="about">
                        <div className="image">
                            <img src={baherdenImg} />
                        </div>
                        <div className="sentences">
                            <p>

                            </p>
                        </div>
                    </div>
                </div>

                <div className="secondChild">

                </div>

                <div className="thirdChild">

                </div>
            </div>
        </div>
      </div>
    </>
  )
}
