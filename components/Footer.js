import React from 'react'
import { AiFillLinkedin } from "react-icons/ai"
import { AiFillGithub } from "react-icons/ai"
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <h3 className='social-text'>Socials</h3>
        <a className='linkedin' href='https://www.linkedin.com/in/ethan-blanco-0b5829248/'><AiFillLinkedin size={30}/></a>
        <a className='github' href='https://github.com/Riggzz'><AiFillGithub size={30}/></a>
    </div>
  )
}

export default Footer