import './App.scss';
import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import PublicHomepage from "./components/Homepage/public";
import BookOfShadows from "./components/BookOfShadows";
import Crystals from "./components/Crystals";
import Herbs from "./components/Herbs";
import Tarot from "./components/Tarot";
import Login from "./components/Login";
import Signup from "./components/SignUp"
import PageNotFound from "./components/PageNotFound.js";



function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={PublicHomepage} />
          <Route path="/book-of-shadows" component={BookOfShadows} />
          <Route path="/crystals" component={Crystals} />
          <Route path="/herbs" component={Herbs} />
          <Route path="/tarot" component={Tarot} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route component={PageNotFound} />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
