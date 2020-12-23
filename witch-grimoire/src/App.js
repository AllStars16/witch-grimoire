import './App.scss';
import React from "react";
import { Route } from "react-router-dom";
import PublicHomepage from "./components/Homepage/public/index";
import BookOfShadows from "./components/BookOfShadows/index";
import Crystals from "./components/Crystals/index";
import Herbs from "./components/Herbs/index";
import Tarot from "./components/Tarot/index";

function App() {
  return (
    <React.Fragment>
      <header>
        Header
      </header>
      <main>
        <Route exact path="/" component={PublicHomepage} />
        <Route exact path="/book-of-shadows" component={BookOfShadows} />
        <Route exact path="/crystals" component={Crystals} />
        <Route exact path="/herbs" component={Herbs} />
        <Route exact path="/tarot" component={Tarot} />
      </main>
    </React.Fragment>


  );
}

export default App;
