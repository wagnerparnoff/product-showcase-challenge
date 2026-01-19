import { Navigate, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div className='app-root'>
      <Routes>
        <Route path='/' element={<Navigate to="/ofertas" replace />} />
        <Route path='/ofertas' element={<Offers />} />
        <Route path='*' element={<Navigate to="/ofertas" replace/>} />
      </Routes>
    </div>
  )
}

export default App
