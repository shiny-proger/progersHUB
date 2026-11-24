import './App.css'
import { Routes, Route } from 'react-router'

import ProgerHub from "../src/pages/progerHUB/ProgerHub.tsx"
import Menu from "./components/layout/Menu/Menu.tsx"
import Languages from "./pages/languages/Languages.tsx"
import Footer from './components/layout/footer/Footer.tsx'
import ApiLab from './pages/apiLab/ApiLab.tsx'
import UpButton from './components/ui/upButton/UpButton.tsx'
import Catalog from './pages/Catalog/Catalog.tsx'
import Profile from './pages/profile/Profile.tsx'
import RepoAll from './pages/RepoAll/RepoAll.tsx'

function App() {

  return (
    <>
    <Menu/>
      <Routes>
            <Route path="/" element={<ProgerHub />} />
            <Route path="/languages" element={<Languages />} />
            <Route path="/Catalog" element={<Catalog />} />
            <Route path="/api-lab" element={<ApiLab />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/repo/:repoName" element={<RepoAll />} />
      </Routes>
    <UpButton/> 
    <Footer />
    </>
  )
}

export default App;
