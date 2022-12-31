import CardGame from "./CardGame/CardGame";
import { getAllGames, SetCurrentPage } from "../redux/Actions/actions";
import React from "react";
import Loader from "./Loader/Loader";
import Pagination from "./Pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Col from "react-bootstrap/Col";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
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
    <div >
      {restGame.length !== 0 && !restGame[0].message ? (
        <div>
          <Container >
            <Row className="justify-content-center ">
              <Col lg="12" className="mt-lg-3">
                <Navbar />
              </Col>
              <Col lg="12" className="mt-lg-3 mb-lg-3">
                <Pagination
                  gamePerPage={gamePerPage}
                  allGames={allGames.length}
                  pagination={pagination}
                />
              </Col>
            </Row>
            <Row className="justify-content-center d-flex flex-wrap">
              {currentGames.length !== 0 && !currentGames[0].message ? (
                currentGames.map((game) => {
                  if (typeof game === "object") {
                    return (
                      <Col lg="3" xl="3" className=" my-3  mx-lg-3 ms-xl-5  ">
                        <CardGame
                          id={game.id}
                          key={game.id}
                          image={game.image}
                          name={game.name}
                          genres={game.generos}
                        />
                      </Col>
                    );
                  }
                })
              ) : currentGames.length === 0 ? (
                restGame.length === 0 ? (
                  <h1>Loading...</h1>
                ) : (
                  <div>
                    <h1>No hay Juegos!</h1>
                  </div>
                )
              ) : (
                <h1>{allGames[0] && allGames[0].message}</h1>
              )}
            </Row>
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
