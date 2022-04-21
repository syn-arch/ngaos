import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import ListSurah from "../pages/ListSurah";
import Surah from "../pages/Surah";

function Index(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/surah" element={<ListSurah />} exact />
        <Route path="/surah/:id" element={<Surah />} exact />
      </Routes>
    </BrowserRouter>
  );
}

export default Index;
