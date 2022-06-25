import { Fragment, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Formulario from './components/Formulario'
import Mensaje from './components/Mensaje'
import Resultado from './components/Resultado'
import Spinner from './components/Spinner'

function App() {
  const [cantidad, setCantidad] = useState(0)
  const [plazo, setPlazo] = useState(0)
  const [total, setTotal] = useState(0)
  const [cargando, setCargando] = useState(false)

  let componente
  if (cargando) {
    componente = <Spinner />
  } else if (total === 0) {
    componente = <Mensaje />
  } else {
    componente = <Resultado total={total} plazo={plazo} cantidad={cantidad} />
  }

  return (
    <Fragment>
      <Header titulo={'Cotizador de Prestamos'} />
      <div className="container">
        <Formulario
          cantidad={cantidad}
          setCantidad={setCantidad}
          plazo={plazo}
          setPlazo={setPlazo}
          setTotal={setTotal}
          setCargando={setCargando}
        />
        <div className="mensajes">{componente}</div>
      </div>
    </Fragment>
  )
}

export default App
