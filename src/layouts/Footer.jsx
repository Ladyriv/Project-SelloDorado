import React from 'react'
import { RiEBike2Fill } from "react-icons/ri";
import { ImWhatsapp } from "react-icons/im";
import Nequi from '../assets/img/Footer/nequi.svg';
import DaviPlata from '../assets/img/Footer/daviplata.svg';
import "./Footer.css";

const Footer = () => {
  return (
    <footer className='bg-gray-100 text-center lg:text-left'>
          <div className='container p-6 text-gray-800'>
              <div className='container'>
                  <div className='mb-6 md:mb-0'>
                      <h5 className='font-medium mb-2 uppercase'>Facatativa - Cundinamarca </h5>

                      <p className='text mb-4 text-center'>
                      <ImWhatsapp/> 310 2156305
                      </p>
                  </div>

                  <div className='mb-6 md:mb-0'>
                      <a className='icon font-medium mb-2 uppercase'><RiEBike2Fill /></a>

                      <p className='text mb-4'> 
                        Envios gratis dentro del perimetro urbano
                      </p>
                  </div>
                  <div className='mb-6 md:mb-0'>
                      <h5 className='font-medium mb-2 uppercase'></h5>
                      <img className='img-footer' src={Nequi}></img>
                      <img className='img-footer' src={DaviPlata}></img>
                  </div>
              </div>
          </div>
    </footer>
  )
}

export default Footer