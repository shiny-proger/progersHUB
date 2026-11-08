import './App.css'
import { Routes, Route } from 'react-router-dom'
import ProgerHub from "../src/pages/progerHUB/ProgerHub.tsx"
import Menu from "./components/layout/Menu/Menu.tsx"
import Lenguages from "./pages/languages/Languages.tsx"
import Login from "../src/pages/login/Login.tsx"
import Signin from "../src/pages/signin/Signin.tsx"
import Footer from './components/layout/footer/Footer.tsx'
import ApiLab from './pages/apiLab/ApiLab.tsx'
import UpButton from './components/ui/upButton/UpButton.tsx'

function App() {

  return (
    <>
    <Menu/>
      <Routes>
            <Route path="/" element={<ProgerHub />} />
            <Route path="/lenguages" element={<Lenguages />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/login" element={<Login />} />
            <Route path="/api-lab" element={<ApiLab />} />
      </Routes>
    <UpButton/> 
    <Footer />
    </>
  )
}

export default App;
