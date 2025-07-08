import { useState } from "react"
import Header from "./components/Header"
import Account from "./pages/Account"
import Home from "./pages/Home"
import Login from "./pages/Login"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={ <Login />} />
        <Route path="/account/:subpage" element={ <Account />} />
      </Routes>
    </BrowserRouter> 
  )
}

export default App
