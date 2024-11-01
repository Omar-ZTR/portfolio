import React, { useEffect, useState } from "react";
import "./skills.css";
import Frontend from "./Frontend";
import angular from "../../asset/angular.png";
import node from "../../asset/node.png";
import figma from "../../asset/figma.png";
import react from "../../asset/react.png";
import js from "../../asset/js.png";
import flutter from "../../asset/flutter.png";
import Ts from "../../asset/TS.png";

// import { Flat, Heat, Nested } from '@alptugidin/react-circular-progress-bar'

const Skills = () => {
  // let levelProgress = document.querySelector(".skills__levels");
  // const skillValue = document.querySelector(".skill__value");
  const [startVal1, setStartVal1] = useState(0);
  const [startVal2, setStartVal2] = useState(0);
  const [startVal3, setStartVal3] = useState(0);
  const [startVal4, setStartVal4] = useState(0);

  const endVal1 = 80;
  const endVal2 = 70;
  const endVal3 = 50;
  const endVal4 = 10;
  const speed = 90;

  useEffect(() => {
    const interval1 = setInterval(() => {
      if (startVal1 < endVal1) {
        setStartVal1((prevStartVal) => {
          const newStartVal = prevStartVal + 1;
          return newStartVal;
        });
      } else {
        return () => clearInterval(interval1);
      }
      console.log("ss1ss", startVal1);
    }, speed);

    const interval2 = setInterval(() => {
      if (startVal2 < endVal2) {
        setStartVal2((prevStartVal) => {
          const newStartVal = prevStartVal + 1;
          return newStartVal;
        });
      } else {
        return () => clearInterval(interval2);
      }
      console.log("ss2ss", startVal2);
    }, speed);

    const interval3 = setInterval(() => {
      if (startVal3 < endVal3) {
        setStartVal3((prevStartVal) => {
          const newStartVal = prevStartVal + 1;
          return newStartVal;
        });
      } else {
        return () => clearInterval(interval3);
      }
      console.log("ss3ss", startVal3);
    }, speed);

    const interval4 = setInterval(() => {
      if (startVal4 < endVal4) {
        setStartVal4((prevStartVal) => {
          const newStartVal = prevStartVal + 1;
          return newStartVal;
        });
      } else {
        return () => clearInterval(interval4);
      }
      console.log("sss4s", startVal4);
    }, speed);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
      clearInterval(interval4);
    };
  }, [
    startVal1,
    endVal1,
    startVal2,
    endVal2,
    startVal3,
    endVal3,
    startVal4,
    endVal4,
  ]);

  const backgroundStyle1 = {
    background: `conic-gradient(#ff6a3d ${startVal1 * 3.6}deg, #ededed 0deg)`,
  };
  const backgroundStyle2 = {
    background: `conic-gradient(#ff6a3d ${startVal2 * 3.6}deg, #ededed 0deg)`,
  };
  const backgroundStyle3 = {
    background: `conic-gradient(#ff6a3d ${startVal3 * 3.6}deg, #ededed 0deg)`,
  };
  // const backgroundStyle4 = {
  //   background: `conic-gradient(#ff6a3d ${startVal4 * 3.6}deg, #ededed 0deg)`,
  // };
  return (
    <div
      className="boxWithBAck"
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
    >
      {/* <Qualification/> */}
      <section className="skills  " id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My technical level</span>

        {/* <h3>My Advantages</h3> */}
        <p>
          As a junior Full Stack Web Developer, I specialize in a variety of
          technologies, with a strong emphasis on writing clean, efficient code.
          Through of experience as a freelancer, I've demonstrated flexibility
          and a commitment to delivering top-notch solutions. In addition, my
          expertise in UI/UX design enables me to create visually appealing and
          user-friendly experiences.
        </p>
        <div className="TopSkill" 
     >

        <div className="skills__Itm" data-aos="fade-up"
      data-aos-delay="100"  >
            <img src={angular} alt="hhh" />
            <h3 className="skills__name">Angular</h3>
          </div>

          <div className="skills__Itm" data-aos="fade-up"
      data-aos-delay="250"  >
            <img src={react} alt="hhh" />
            <h3 className="skills__name">React</h3>
          </div>
          <div className="skills__Itm" data-aos="fade-up"
      data-aos-delay="400"  >
            <img src={Ts} alt="hhh" />
            <h3 className="skills__name">TypeScript</h3>
          </div>
          <div className="skills__Itm" data-aos="fade-up"
     data-aos-delay="550"  >
            <img src={node} alt="hhh" />
            <h3 className="skills__name">NodeJs</h3>
          </div>

          <div className="skills__Itm" data-aos="fade-up"
     data-aos-delay="700"  >
            <img src={js} alt="hhh" />
            <h3 className="skills__name">JavaScript</h3>
          </div>
          <div className="skills__Itm" data-aos="fade-up"
      data-aos-delay="850"  >
            <img src={flutter} alt="hhh" />
            <h3 className="skills__name">Flutter</h3>
          </div>
          <div className="skills__Itm" data-aos="fade-up"
      data-aos-delay="1000"  >
            <img src={figma} alt="hhh" />
            <h3 className="skills__name">Figma</h3>
          </div>



</div>
        <div style={{ marginBottom: "50px" }}>
          <div className="face__Skills">
            <div className="top__skills"  >
              {/* <img src={frontendLog} alt="hhh" /> */}
              <span className="skill__name">Frontend </span>
              <div className="skills__levels" style={backgroundStyle1}>
                <span
                  className="skill__value"
                  data-values={22}
                >{`${startVal1}%`}</span>
              </div>
            </div>

            <div className="top__skills"  >
              {/* <img src={backendLog} alt="hhh" /> */}
              <span className="skill__name">Backend </span>
              <div className="skills__levels" style={backgroundStyle2}>
                <span
                  className="skill__value"
                  data-values={22}
                >{`${startVal2}%`}</span>
              </div>
            </div>

            <div className="top__skills"  >
              {/* <img src={designLog} alt="hhh" /> */}
              <span className="skill__name">Design</span>
              <div className="skills__levels" style={backgroundStyle3}>
                <span
                  className="skill__value"
                  data-values={22}
                >{`${startVal3}%`}</span>
              </div>
            </div>

            {/* <div className='top__skills'>
            <img src={html} alt="hhh" />
            <div className='skills__levels' style={backgroundStyle4}>
              <span className='skill__value' data-values={22}>{`${startVal4}%`}</span>
            </div>
            <span className='skill__name'>44 </span>
          </div> */}
          </div>
        </div>
        <div className="skills__container  grid">
          <Frontend />
    
        </div>
      </section>
    </div>
  );
};

export default Skills;
