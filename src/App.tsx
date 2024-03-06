
import './App.css'
import MainLayouts from './components/layout/MainLayouts'
import ProtectedRoutes from './components/layout/ProtectedRoutes'

function App() {
  return (
    <>
   <ProtectedRoutes>
   <MainLayouts></MainLayouts>
   </ProtectedRoutes>

    </>
  )
}

export default App
