import './App.css'
import { Routes, Route } from 'react-router-dom'
import ProgerHub from "../src/pages/progerHUB/ProgerHub.tsx"
import Menu from "./components/Menu/Menu.tsx"
import Catalog from "./pages/catalog/Catalog.tsx"
import Login from "../src/pages/login/Login.tsx"
import Signin from "../src/pages/signin/Signin.tsx"
import Footer from '../src/components/footer/Footer.tsx'

function App() {

  return (
    <>
    <Menu/>
      <Routes>
            <Route path="/" element={<ProgerHub />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/login" element={<Login />} />
      </Routes>
    <Footer />
    </>
  )
}

export default App
