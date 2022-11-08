import React from 'react'
import { BsFacebook, BsGithub, BsReddit, BsTwitter, } from 'react-icons/bs'
import { AiOutlineMedium } from 'react-icons/ai'
import { FaInstagram, FaDiscord } from 'react-icons/fa'
import { RiSendPlaneFill } from 'react-icons/ri'

const Footer = () => {
  return (
    <>
      <div className="footer-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 ">
              <h2 className="left-footer-heading h1">YOUR STEPS COUNT <br /> WITH Marathon!</h2>
              <div className="mt-3">
                <img src="https://farms.marathoncash.com/assets/mobileapp.svg" alt="" />
                <img src="https://farms.marathoncash.com/assets/mobileapp1.svg" alt="" className="mx-4" />
              </div>
            </div>
            <div className="col-md-6 text-end">
              <h2 className="h1">Join Our Comunity</h2>
              <div className="footer-icons py-5">
                <ul className="list-unstyled d-flex justify-content-end">
                  <li><a target="_BLANK" href="/"><AiOutlineMedium /> </a></li>
                  <li><a target="_BLANK" href="/"><BsTwitter /> </a></li>
                  <li><a target="_BLANK" href="/"><RiSendPlaneFill /> </a></li>
                  <li><a target="_BLANK" href="/"><FaDiscord /> </a></li>
                  <li><a target="_BLANK" href="/"><FaInstagram /> </a></li>
                  <li><a target="_BLANK" href="/"><BsGithub /> </a></li>
                  <li><a target="_BLANK" href="/"><BsReddit /> </a></li>
                  <li><a target="_BLANK" href="/"><BsFacebook /> </a></li>
                </ul>
              </div>
              <div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-dark d-flex flex-wrap justify-content-around">
          <div className="logo">
            <img src="https://farms.marathoncash.com/assets/logo.png" className='img-fluid' width={150} alt="" />
          </div>
          <div className="copyright text-white py-3 text-center text-md-start">
            <p>Copyright © 2022  MarathonCash.Com Company All rights reserved.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer