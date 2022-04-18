/* eslint-disable import/no-unresolved */
import Header from "@components/Header";
import Home from "@pages/Home";
import Themes from "@pages/Themes";
import { Route, Routes } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Themes />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
