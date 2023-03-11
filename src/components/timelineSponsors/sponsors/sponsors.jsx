import React from 'react'
import img1 from "./imagessposi/img1.png"
import img2 from "./imagessposi/img2.png"
import img3 from "./imagessposi/img3.png"
import img4 from "./imagessposi/img4.png"
import img5 from "./imagessposi/img5.png"
import img6 from "./imagessposi/img6.png"
import img7 from "./imagessposi/img7.png"
import img8 from "./imagessposi/img8.jpeg"
import img9 from "./imagessposi/img9.png"
import img10 from "./imagessposi/img10.png"
import img11 from "./imagessposi/img11.png"
import img12 from "./imagessposi/img12.webp"
import img13 from "./imagessposi/img13.png"
import img14 from "./imagessposi/img14.png"
import img15 from "./imagessposi/img15.png"
import img16 from "./imagessposi/img16.png"
import SponsorsCard from './sponsorsCard'
import "../stylels.css"
import Heading from '../../Heading/Heading'

function sponsors() {
  const sponsor = {
    platinum: [
      img1,
      img2
    ], gold: [
      img6,
      img7,
      img3
    ], education: [
      img3,
      img4,
      img5
    ], others: [
      img1,
      img2,
      img3,
      img7
    ], pastsponsors1:[
      img1,
      img2,
      img3,
      img4,
      img5,
      img6,
      img7
    ], pastsponsors2:[
      img8,
      img9,
      img10,
      img11,
      img16,
      img13,
      img14
    ]
  }
  return (
  <>
  <div className="sponsors-contain" style={{color : "white"}} id="sponsors">
    {/* <div class="sponsors-container">
      <Heading name = "EVENT PARTNERS"/>
      <h2 class="sponsors-type">PLATINUM PARTNERS</h2>
      <div className="sponsor-container-div">
        {sponsor.platinum.map((detail, index) => <SponsorsCard key={index} sponsors={detail} />)}
      </div>
      <h2 class="sponsors-type">GOLD PARTNERS</h2>
      <div className="sponsor-container-div">
        {sponsor.gold.map((detail, index) => <SponsorsCard key={index} sponsors={detail} />)}
      </div>
      <h2 class="sponsors-type">EDUCATION PARTNERS</h2>
      <div className="sponsor-container-div">
        {sponsor.education.map((detail, index) => <SponsorsCard key={index} sponsors={detail} />)}
      </div>
      <h2 class="sponsors-type">OTHER SPONSORS</h2>
      <div className="sponsor-container-div">
        {sponsor.others.map((detail, index) => <SponsorsCard key={index} sponsors={detail} />)}
      </div> */}
      <h1 class="sponsors-type">OUR PAST SPONSORS</h1>

      <div className="slider-div">
      <div class="slider">
        <div class="slide-track">
          {sponsor.pastsponsors1.map((detail,index)=>
            <div class="slide">
              <img class="sponsors-slider-img" src={detail} alt="" />
            </div>
          )}
          {sponsor.pastsponsors1.map((detail,index)=>
            <div class="slide">
              <img class="sponsors-slider-img" src={detail} alt="" />
            </div>
          )}
          {/* <div class="slide">
            <img class="sponsors-slider-img" src={img1} alt="" />
          </div>
          <div class="slide">
            <img class="sponsors-slider-img" src={img2} alt="" />
          </div>
          <div class="slide">
            <img class="sponsors-slider-img" src={img3} alt="" />
          </div>
          <div class="slide">
            <img class="sponsors-slider-img" src={img4} alt="" />
          </div>
          <div class="slide">
            <img class="sponsors-slider-img" src={img5} alt="" />
          </div>
          <div class="slide">
            <img class="sponsors-slider-img" src={img6} alt="" />
          </div>
          <div class="slide">
            <img class="sponsors-slider-img" src={img7} alt="" />
          </div>
          <div class="slide">
            <img class="sponsors-slider-img" src={img1} alt="" />
          </div>
          <div class="slide">
            <img class="sponsors-slider-img" src={img2} alt="" />
          </div>
          <div class="slide">
            <img class="sponsors-slider-img" src={img3} alt="" />
          </div>
          <div class="slide">
            <img class="sponsors-slider-img" src={img4} alt="" />
          </div>
          <div class="slide">
            <img class="sponsors-slider-img" src={img5} alt="" />
          </div>
          <div class="slide">
            <img class="sponsors-slider-img" src={img6} alt="" />
          </div>
          <div class="slide">
            <img class="sponsors-slider-img" src={img7} alt="" />
          </div> */}
        </div>
      </div>

      <div class="slider">
        <div class="slide-track2">
        {sponsor.pastsponsors2.map((detail,index)=>
            <div class="slide">
              <img class="sponsors-slider-img" src={detail} alt="" />
            </div>
          )}
          {sponsor.pastsponsors2.map((detail,index)=>
            <div class="slide">
              <img class="sponsors-slider-img" src={detail} alt="" />
            </div>
          )}
          {/* <div class="slide">
            <img class="sponsors-slider-img" src={img1} alt="" />
          </div>
          <div class="slide">
            <img class="sponsors-slider-img" src={img2} alt="" />
          </div>
          <div class="slide">
            <img class="sponsors-slider-img" src={img3} alt="" />
          </div>
          <div class="slide">
            <img class="sponsors-slider-img" src={img4} alt="" />
          </div>
          <div class="slide">
            <img class="sponsors-slider-img" src={img5} alt="" />
          </div>
          <div class="slide">
            <img class="sponsors-slider-img" src={img6} alt="" />
          </div>
          <div class="slide">
            <img class="sponsors-slider-img" src={img7} alt="" />
          </div>
          <div class="slide">
            <img class="sponsors-slider-img" src={img1} alt="" />
          </div>
          <div class="slide">
            <img class="sponsors-slider-img" src={img2} alt="" />
          </div>
          <div class="slide">
            <img class="sponsors-slider-img" src={img3} alt="" />
          </div>
          <div class="slide">
            <img class="sponsors-slider-img" src={img4} alt="" />
          </div>
          <div class="slide">
            <img class="sponsors-slider-img" src={img5} alt="" />
          </div>
          <div class="slide">
            <img class="sponsors-slider-img" src={img6} alt="" />
          </div>
          <div class="slide">
            <img class="sponsors-slider-img" src={img7} alt="" />
          </div> */}
        </div>
      </div>
    </div>
    
    </div>
    {/* </div> */}
    </>
  )
}

export default sponsors