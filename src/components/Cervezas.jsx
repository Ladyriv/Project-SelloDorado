import React from 'react'
import AguilaLat from '../assets/img/Productos-cervezas/Aguilasixpack.png';
import PokerLat from '../assets/img/Productos-cervezas/Pokersixpack.png';
import AndinaLat from '../assets/img/Productos-cervezas/Andinasixpack.png';
import PokerLatg from '../assets/img/Productos-cervezas/Pokerlatamax.png';
import Footer from '../layouts/Footer';

const cervezas = () => {
  return (
    <div>
      <h2>Cervezas</h2>
      <div className='container-card'>
      <div class="flex flex-wrap -mx-2">
        <div class="rounded-lg shadow-lg bg-white max-w-sm">
          <a href="#!">
            <img class="rounded-t-lg" src={AguilaLat} alt="" />
          </a>
        </div>
        <div class="p-6">
            <h5 class="text-gray-900 text-xl font-medium mb-2">Aguila en lata sixpack x 6</h5>
            <p class="text-gray-700 text-base mb-4">
              $21.000
            </p>
            <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Agregar al carrito</button>
        </div>
      </div>
      <div class="flex flex-wrap -mx-2">
        <div class="rounded-lg shadow-lg bg-white max-w-sm">
          <a href="#!">
            <img class="rounded-t-lg" src={PokerLat} alt="" />
          </a>
        </div>
        <div class="p-6">
            <h5 class="text-gray-900 text-xl font-medium mb-2"> Cerveza Poker Sixpack</h5>
            <p class="text-gray-700 text-base mb-4">
              $17.990
            </p>
            <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Agregar al carrito</button>
        </div>
      </div>
      <div class="flex flex-wrap -mx-2">
        <div class="rounded-lg shadow-lg bg-white max-w-sm">
          <a href="#!">
            <img class="rounded-t-lg" src={AndinaLat} alt="" />
          </a>
        </div>
        <div class="p-6">
            <h5 class="text-gray-900 text-xl font-medium mb-2"> Cerveza Andina Sixpack</h5>
            <p class="text-gray-700 text-base mb-4">
              $15.900
            </p>
            <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Agregar al carrito</button>
        </div>
      </div>
      <div class="flex flex-wrap -mx-2">
        <div class="rounded-lg shadow-lg bg-white max-w-sm">
          <a href="#!">
            <img class="rounded-t-lg" src={PokerLatg} alt="" />
          </a>
        </div>
        <div class="p-6">
            <h5 class="text-gray-900 text-xl font-medium mb-2"> Poker Lata x 24</h5>
            <p class="text-gray-700 text-base mb-4">
              <b>$64.800</b>
            </p>
            <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md  hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Agregar al carrito</button>
        </div>
      </div>

      </div>
      <Footer/>
    </div>
  )
}

export default cervezas