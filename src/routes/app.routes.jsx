import { Routes, Route } from "react-router-dom"

import { Home }  from "../pages/Home"
import { Create }  from "../pages/Create"
import { Preview }  from "../pages/Preview"
import { Perfil }  from "../pages/Perfil"

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/create" element={<Create/>} />
      <Route path="/perfil" element={<Perfil/>} />
      <Route path="/preview/:id" element={<Preview/>} />
    </Routes>
  )
}