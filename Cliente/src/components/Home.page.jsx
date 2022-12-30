import CardGame from "./CardGame/CardGame";
import Container from "@mui/material/Container";
import { getAllGames, SetCurrentPage } from "../redux/Actions/actions";
import { Grid } from "@mui/material";
import React from "react";
import Loader from "./Loader/Loader";
import Pagination from "./Pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllGames());
  }, [dispatch]);

  const allGames = useSelector((state) => state.games);
  const restGame = useSelector((state) => state.allgames);
  const currentPage = useSelector((state) => state.currentPage);
  const gamePerPage = useSelector((state) => state.gamePerPage);
  const indexOfLastGame = currentPage * gamePerPage;
  const indexOfFirstGame = indexOfLastGame - gamePerPage;
  const currentGames = allGames.slice(indexOfFirstGame, indexOfLastGame);

  const pagination = (pageNumber) => {
    dispatch(SetCurrentPage(pageNumber));
  };

  return (
    <div>
      {restGame.length !== 0 && !restGame[0].message ? (
        <div >
          <Container>
            <Grid container justifyContent="center">
              <Navbar />
              <Pagination
                gamePerPage={gamePerPage}
                allGames={allGames.length}
                pagination={pagination}
              />
            </Grid>
            <Grid container spacing={4} justifyContent="center">
              {currentGames.length !== 0 && !currentGames[0].message ? (
                currentGames.map((game) => {
                  if (typeof game === "object") {
                    return (
                      <CardGame
                        id={game.id}
                        key={game.id}
                        image={game.image}
                        name={game.name}
                        genres={game.generos}
                      />
                    );
                  }
                })
              ) : currentGames.length === 0 ? (
                restGame.length === 0 ? (
                  <h1>Loading...</h1>
                ) : (
                  <h1>No hay Juegos!</h1>
                )
              ) : (
                <h1>{allGames[0] && allGames[0].message}</h1>
              )}
            </Grid>
          </Container>
          <Footer></Footer>
        </div>
      ) : (
        <Loader></Loader>
      )}
     
    </div>
  );
}

export default Home;
