import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Loader from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBriefcase,
  faCode,
  faUniversity
} from '@fortawesome/free-solid-svg-icons'
import Background from '../../assets/images/background.png'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  })

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>

          <p align="LEFT" style={{fontSize:"16px", fontWeight:"Bold", margin:"18px 0 -6px 0"}}>
          <FontAwesomeIcon icon={faBriefcase} />&nbsp;&nbsp;Experience
          </p>
          <p style={{fontSize:"14px", lineHeight:"22px"}}>
            UniMetrix - Full-stack Developer <br/>
            <div>
              <span>Link:&nbsp;</span>
              <a className='link-font' target="_blank" rel="noreferrer" href="https://https://unimetrix.github.io/">
             UniMetrix
              </a>
            </div>
            Main contents:<br/>
            <ul style={{marginTop:"0px"}}>
              <li>Design a user-friendly interface using React.</li>
              <li>blockchain data retrieval with API</li>
              <li>Using Vis library for indicator </li>
              <li>Set up a continuous integration and continuous deployment pipeline.</li>
            </ul>
          </p>
                    
          <p align="LEFT" style={{fontSize:"16px", fontWeight:"Bold", margin:"18px 0 -6px 0"}}>
          <FontAwesomeIcon icon={faCode} />&nbsp;&nbsp;Languages & Frameworks
          </p>
          <p style={{fontSize:"14px", lineHeight:"22px"}}>
          Web: Javascript/TypeScript, NodeJS, React, HTML, CSS <br/>
          Blockchain: Solidity, Openzeppelin, Remix, Hardhat & Ethers <br/>
          Human: English & French <br/>
          </p>
          
          <p align="LEFT" style={{fontSize:"16px", fontWeight:"Bold", margin:"18px 0 -6px 0"}}>
          <FontAwesomeIcon icon={faUniversity} />&nbsp;&nbsp;Education
          </p>
          <p style={{fontSize:"14px", lineHeight:"22px"}}>
          Master of Engineering - ENSIATE, France <br/>
          Training course DEcentralized FInance - Alyra blockchain school, France<br/>
          Bootcamp Web developpement  - O'clock, France
          </p>

        </div>

        <div className='background-cont'>
          <img className="background" src={Background} alt="Background" />
        </div>

      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
