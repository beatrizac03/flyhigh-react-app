import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";

export default function AppRoutes() {
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/cadastro" element={<Cadastro/>}></Route>
        </Routes>
    </BrowserRouter>
}