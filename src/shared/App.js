// App.js

// *** 패키지 import
import React from "react";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";
import styled from "styled-components";

// *** 컴포넌트 또는 CSS import
import Main from "../pages/Main";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Seoul from "../pages/Seoul";
import Detail from "../pages/Detail";
import Navigation from "../components/Navigation";


function App() {
  return (
    <div className="App">
      <Wrap>
      <ConnectedRouter history={history}>
      {/* <Navigation/> */}
        <Route path="/" exact component={Main}></Route>
        <Route path="/login" exact component={Login}></Route>
        <Route path="/signup" exact component={Signup}></Route>
        <Route path="/postList" exact component={Seoul}></Route>
        <Route path="/postList/:postId" exact component={Detail}></Route>
      </ConnectedRouter>
      </Wrap>
    </div>
  );
}

const Wrap = styled.div`
  width: 1440;
  margin: auto;
`

export default App;
