import React from "react";
import CardGame from "./CardGame/CardGame";

function testing() {
  return (
    <div>
      <CardGame
        genres={["Adventure", "Simulation"]}
        name={"Final Fantasy V"}
        image={`https://my4kwallpapers.com/wp-content/uploads/2021/06/Anime-Wallpaper.jpg`}
      ></CardGame>
    </div>
  );
}

export default testing;
