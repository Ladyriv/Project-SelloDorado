import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css'
import Navbar from './layouts/Navbar';
import PageWelcome from './components/PageWelcome'
import Cervezas from './components/Cervezas';
import Aguardientes from './components/Aguardientes';
import Varios from './components/Varios';
import PrivateRoutes from './components/Utils/PrivateRoutes';
import Cartlist from './components/Cart/Cartlist';


function App() {
  
  return (
    <div className='App'>
      
      <Navbar/>
      <Routes>
        
        <Route path='/' element={<PageWelcome />} />
         
        <Route path='/Cervezas' 
           element={
           <PrivateRoutes>
            <Cervezas /> 
           </PrivateRoutes>
          }/>
         
        <Route path='/Aguardientes' element={<Aguardientes />} />
        <Route path='/Varios' element={<Varios />} />
        <Route path='/Cartlist' element={<Cartlist />} />
        <Route path='*' element={<Navigate to='/' />} />
        
        

      </Routes>


    </div>
  )
}

export default App
