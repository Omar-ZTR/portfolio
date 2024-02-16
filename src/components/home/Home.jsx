import React from 'react';
import "./home.css";
import Social from './Social';
import Data from './Data';
import ScrollDown from './ScrollDown';

const Home = () => {
    return (
        <div className='shap'>
        
        <section className="home section" id="home">
            <div className="home__container container grid">
            <div className="shape"></div>
                <div className="home__content grid">
                    <Social />
                    <div className="home__img">
                    </div>
                    <Data />

                </div>
                <ScrollDown />
            </div>
            {/* <svg id="visual" viewBox="0 0 900 800" xmlns="http://www.w3.org/2000/svg" link="http://www.w3.org/1999/xlink" version="1.1">
            <g>
<clipPath id="myClip">
                <path d="M643 0L610 0L610 33L694 33L694 67L489 67L489 100L650 100L650 133L393 133L393 167L648 167L648 200L692 200L692 233L305 233L305 267L304 267L304 300L700 300L700 333L492 333L492 367L519 367L519 400L653 400L653 433L646 433L646 467L485 467L485 500L600 500L600 533L398 533L398 567L313 567L313 600L0 600L0 567L0 567L0 533L0 533L0 500L0 500L0 467L0 467L0 433L0 433L0 400L0 400L0 367L0 367L0 333L0 333L0 300L0 300L0 267L0 267L0 233L0 233L0 200L0 200L0 167L0 167L0 133L0 133L0 100L0 100L0 67L0 67L0 33L0 33L0 0L0 0Z" fill="red"></path><path d="M474 0L253 0L253 33L490 33L490 67L329 67L329 100L253 100L253 133L571 133L571 167L299 167L299 200L479 200L479 233L370 233L370 267L270 267L270 300L558 300L558 333L531 333L531 367L571 367L571 400L357 400L357 433L443 433L443 467L295 467L295 500L570 500L570 533L420 533L420 567L403 567L403 600L0 600L0 567L0 567L0 533L0 533L0 500L0 500L0 467L0 467L0 433L0 433L0 400L0 400L0 367L0 367L0 333L0 333L0 300L0 300L0 267L0 267L0 233L0 233L0 200L0 200L0 167L0 167L0 133L0 133L0 100L0 100L0 67L0 67L0 33L0 33L0 0L0 0Z" fill="#fac5a5"></path><path d="M107 0L283 0L283 33L234 33L234 67L158 67L158 100L174 100L174 133L139 133L139 167L314 167L314 200L258 200L258 233L423 233L423 267L338 267L338 300L182 300L182 333L146 333L146 367L325 367L325 400L253 400L253 433L188 433L188 467L350 467L350 500L393 500L393 533L142 533L142 567L312 567L312 600L0 600L0 567L0 567L0 533L0 533L0 500L0 500L0 467L0 467L0 433L0 433L0 400L0 400L0 367L0 367L0 333L0 333L0 300L0 300L0 267L0 267L0 233L0 233L0 200L0 200L0 167L0 167L0 133L0 133L0 100L0 100L0 67L0 67L0 33L0 33L0 0L0 0Z" fill="#fd9f61"></path><path d="M25 0L228 0L228 33L154 33L154 67L152 67L152 100L182 100L182 133L169 133L169 167L2 167L2 200L96 200L96 233L58 233L58 267L150 267L150 300L30 300L30 333L269 333L269 367L243 367L243 400L81 400L81 433L203 433L203 467L182 467L182 500L54 500L54 533L273 533L273 567L235 567L235 600L0 600L0 567L0 567L0 533L0 533L0 500L0 500L0 467L0 467L0 433L0 433L0 400L0 400L0 367L0 367L0 333L0 333L0 300L0 300L0 267L0 267L0 233L0 233L0 200L0 200L0 167L0 167L0 133L0 133L0 100L0 100L0 67L0 67L0 33L0 33L0 0L0 0Z" fill="#f7770f"></path>
                </clipPath>
                </g></svg> */}
 </section></div>
    )
}

export default Home