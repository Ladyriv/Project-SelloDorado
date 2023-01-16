import React from 'react'
import imgSmirn from '../assets/img/Productos-varios/Smirnofflulo.png';
import imgSmirnv from '../assets/img/Productos-varios/Smirnoffvodka.png';
import BacardiCB from '../assets/img/Productos-varios/BacardiCartaBlanca.png';
import BacardiAn from '../assets/img/Productos-varios/BacardiAnejo.png';
import Footer from '../layouts/Footer';

const varios = () => {
  
  return (
    <div>
      <h2>Varios Productos</h2>
      
      
      <div className='container-card'>
        <div class="flex flex-wrap -mx-2">
          <div class="rounded-lg shadow-lg bg-white max-w-sm">
            <a href="#!">
              <img class="rounded-t-lg" src={imgSmirn} alt="" />
            </a>
          </div>
          <div class="p-6">
            <h5 class="text-gray-900 text-xl font-medium mb-2">Smirnoff Lulo 750ml</h5>
            <p class="text-gray-700 text-base mb-4">
              $41.990
            </p>
            <button 
             type="button" 
             class=" inline-block px-6 py-2.5 bg-yellow-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Agregar al carrito
            </button>
          </div>
        </div>
        <div class="flex flex-wrap -mx-2">
          <div class="rounded-lg shadow-lg bg-white max-w-sm">
            <a href="#!">
              <img class="rounded-t-lg" src={imgSmirnv} alt="" />
            </a>
          </div>
          <div class="p-6">
            <h5 class="text-gray-900 text-xl font-medium mb-2">Smirnoff Vodka 700ml</h5>
            <p class="text-gray-700 text-base mb-4">
              $84.990
            </p>
            <button 
             type="button" 
             class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Agregar al carrito
             </button>
          </div>
        </div>
        <div class="flex flex-wrap -mx-2">
          <div class="rounded-lg shadow-lg bg-white max-w-sm">
            <a href="#!">
              <img class="rounded-t-lg" src={BacardiCB} alt="" />
            </a>
          </div>
          <div class="p-6">
            <h5 class="text-gray-900 text-xl font-medium mb-2">Bacardi Carta Blanca 750ml</h5>
            <p class="text-gray-700 text-base mb-4">
              $54.900
            </p>
            <button 
             type="button"  
             class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Agregar al carrito
            </button>
          </div>
        </div>
        <div class="flex flex-wrap -mx-2">
          <div class="rounded-lg shadow-lg bg-white max-w-sm">
            <a href="#!">
              <img class="rounded-t-lg" src={BacardiAn} alt="" />
            </a>
          </div>
          <div class="p-6">
            <h5 class="text-gray-900 text-xl font-medium mb-2">Bacardi Añejo</h5>
            <p class="text-gray-700 text-base mb-4">
              $46.000
            </p>
            <button 
             type="button" 
             class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Agregar al carrito
            </button>
          </div>
        </div>
      </div>
      <Footer/>
    </div>


  )
}

export default varios