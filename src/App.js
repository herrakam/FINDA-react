import "./App.css";
import { Route } from "react-router-dom";
import MainContainer from "./container/MainContainer";
import SearchContainer from "./container/SearchContainer";
import DetailContainer from "./container/DetailContainer";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import styled from "styled-components";
import Scraping from "./components/Scraping";
import axios from "axios";
import { useEffect } from "react";

function App() {
  const BodyWrap = styled.div`
    width: 100%;
    min-height: 100vh;
    background: skyblue;
    /* display: grid; */
    justify-content: center;
  `;
  const callApi = async () => {
    axios.get("/").then((res) => console.log("연결됬음"));
  };

  useEffect(() => {
    callApi();
  }, []);
  return (
    <>
      <Header></Header>
      <BodyWrap>
        <Route path="/" component={MainContainer} exact></Route>
        <Route path="/search" component={SearchContainer}></Route>
        <Route path="/detail/:moviename" component={DetailContainer}></Route>
        <Route path="/scraping" component={Scraping}></Route>
      </BodyWrap>
      <Footer></Footer>
    </>
  );
}

export default App;
