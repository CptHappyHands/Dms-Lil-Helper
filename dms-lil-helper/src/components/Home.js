import React from "react";

import { Routes, Route } from "react-router-dom";
import BattleOrder from "./BattleOrder";

const Home = () => {
  return (
    <div className="App">
      <header>
        <h1>DMs Lil Helper</h1>
        <div className="character-input">
          <input
            id="name-input"
            type="text"
            name="name"
            // onChange={onChange}
            // value={values.name}
            placeholder="name"
          />
        </div>
        <div className="initiative-input">
          <input
            id="initiative-input"
            type="number"
            name="initiative"
            // onChange={onChange}
            // value={values.initiative}
            placeholder="initiative"
          />
        </div>
        <div className="button-holder">
          <button>Submit</button>
        </div>
      </header>
      <Routes>
        <Route exact path="/" element={<BattleOrder />} />
      </Routes>
    </div>
  );
};

export default Home;
