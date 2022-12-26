import "./App.css";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Home from "./components/Home.page";
import Details from "./components/DetailPage/Details.page";
import Lading from "./components/Lading.page";
import GamesCreate from "./components/GameCreate/GamesCreate";
import Testing from "./components/Testing.page";
function App() {
  return (
    <div>
      <Routes>
      <Route path="/testing" element={<Testing />} />
        <Route path="/lading" element={<Lading />} />
        <Route path="/" exact element={<Home />} />
        <Route path="/:id" element={<Details />} />
        <Route path="/create" element={<GamesCreate />} />
      </Routes>
    </div>
  );
}

/*
{videogames.data.map((game) => {
        return <p>{game.name}</p>;
      })} */

export default App;
