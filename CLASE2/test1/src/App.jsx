import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Contador from './Contador'
import Mensaje from './Mensaje'
import TarjetaUsuario from './TarjetaUsuario'

function App() {
  
  return (
    
    <>
      
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
       <Contador />
        
      </section>
      <section >
        <Mensaje texto="Hola, soy un mensaje" descripcion="Esto es una descripcion"/>
        <Mensaje texto="Segundo Mensaje" descripcion="Esta es la descripcion del segundo mensaje"/>
        <Mensaje texto="Tercer Mensaje" descripcion="Esta es la descripcion del tercer mensaje"/>
      </section>

     <section>
      <TarjetaUsuario nombre="Juan" edad="30 años"/>
      <TarjetaUsuario nombre="Pedro" edad="25"/>
      </section>
    </>
  )
}

export default App
