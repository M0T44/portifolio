import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/header/header.js"

import Home from "./pages/home/home.js"
import Projetos from "./pages/projects/projetos.js";
import Contato from "./pages/contato/contato.js";

export default function Rotas() {
    return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/projetos" element={<Projetos />}/>
          <Route path="/contato" element={<Contato />}/>
        </Routes>
      </BrowserRouter>
    );
  }