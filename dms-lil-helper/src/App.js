import React, { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { init } from "./store/table";
import styles from "./App.module.scss";

import Home from "./components/Home";

const App = () => {
  const dispatch = useDispatch();

  const { characters, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(init());
  }, [dispatch]);

  return (
    <div className="App">
      <Home />
      {error && <div className={styles.error}>{error}</div>}

      <div>{characters}</div>
    </div>
  );
};

export default App;
