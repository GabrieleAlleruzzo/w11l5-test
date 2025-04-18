import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Player from "./Components/Player";
import Novità from "./Components/Novità";
import Tabs from "./Components/Tabs";
import Navbar2 from "./Components/Navbar2";
import NuoveUscite from "./Components/NuoveUscite";
import EpisodiRadio from "./Components/EpisodiRadio";
import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <Navbar />
      </header>
      <div className="d-flex flex-column min-vh-100">
        <main className="flex-grow-1">
          <Novità />
          <EpisodiRadio />
          <Player />
          <NuoveUscite />
          <Tabs />
        </main>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
