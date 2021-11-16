import "./App.css";
import { Route } from "react-router-dom";
import MainContainer from "./container/MainContainer";
import SearchContainer from "./container/SearchContainer";
import DetailContainer from "./container/DetailContainer";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import styled from "styled-components";
import Scraping from "./components/Scraping";

function App() {
  const BodyWrap = styled.div`
    min-height: 100vh;
  `;
  return (
    <>
      <Header></Header>
      <BodyWrap>
        <Route path="/" component={MainContainer} exact></Route>
        <Route path="/search" component={SearchContainer}></Route>
        <Route path="/detail" component={DetailContainer}></Route>
        <Route path="/scraping" component={Scraping}></Route>
      </BodyWrap>
      <Footer></Footer>
    </>
  );
}

export default App;
