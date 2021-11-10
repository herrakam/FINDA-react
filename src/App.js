import "./App.css";
import { Route } from "react-router-dom";
import MainContainer from "./container/MainContainer";
import SearchContainer from "./container/SearchContainer";
import DetailContainer from "./container/DetailContainer";
function App() {
  return (
    <>
      <Route path="/" component={MainContainer} exact></Route>
      <Route path="/search" component={SearchContainer}></Route>
      <Route path="/detail" component={DetailContainer}></Route>
    </>
  );
}

export default App;
