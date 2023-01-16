import React from 'react'
import imgNectar from '../assets/img/Productos-Aguardientes/Nectarverdemed.png'
import imgAguarAm from "../assets/img/Productos-Aguardientes/AguardienteAmarillo.png";
import imgAguarGn from '../assets/img/Productos-Aguardientes/Nectarverdegrande.png';
import imgAguarCaja from '../assets/img/Productos-Aguardientes/Nectarcajaverde.png';
import Footer from '../layouts/Footer'


const aguardientes = () => {
  return (
    <div>
      <h2>Aguardientes</h2>
      <div className='container-card'>
        <div class="flex flex-wrap -mx-2">
          <div class="rounded-lg shadow-lg bg-white max-w-sm">
            <a href="#!">
              <img class="rounded-t-lg" src={imgNectar} alt="" />
            </a>
          </div>
          <div class="p-6">
            <h5 class="text-gray-900 text-xl font-medium mb-2">Aguardiente Nectar Club 375ml</h5>
            <p class="text-gray-700 text-base mb-4">
              $21.000
            </p>
            <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Agregar al carrito</button>
          </div>
        </div>
        <div class="flex flex-wrap -mx-2">
          <div class="rounded-lg shadow-lg bg-white max-w-sm">
            <a href="#!">
              <img class="rounded-t-lg" src={imgAguarAm} alt="" />
            </a>
          </div>
          <div class="p-6">
            <h5 class="text-gray-900 text-xl font-medium mb-2">Aguardiente Amarillo de Manzanarez 750ml</h5>
            <p class="text-gray-700 text-base mb-4">
              $64.990
            </p>
            <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Agregar al carrito</button>
          </div>
        </div>
        <div class="flex flex-wrap -mx-2">
          <div class="rounded-lg shadow-lg bg-white max-w-sm">
            <a href="#!">
              <img class="rounded-t-lg" src={imgAguarGn} alt="" />
            </a>
          </div>
          <div class="p-6">
            <h5 class="text-gray-900 text-xl font-medium mb-2">Aguardiente Nectar Club 750ml</h5>
            <p class="text-gray-700 text-base mb-4">
              $39.000
            </p>
            <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Agregar al carrito</button>
          </div>
        </div>
        <div class="flex flex-wrap -mx-2">
          <div class="rounded-lg shadow-lg bg-white max-w-sm">
            <a href="#!">
              <img class="rounded-t-lg" src={imgAguarCaja} alt="" />
            </a>
          </div>
          <div class="p-6">
            <h5 class="text-gray-900 text-xl font-medium mb-2">Aguardiente Nectar Club Caja 1000ml</h5>
            <p class="text-gray-700 text-base mb-4">
              <b>$46.000</b>
            </p>
            <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md  hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Agregar al carrito</button>
          </div>
        </div>

      </div>
    <Footer/>
    </div>

    
    
  )
}

export default aguardientes