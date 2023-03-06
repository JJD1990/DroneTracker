import React from "react";
import app from "./firebase";
import Map from "./Map";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <Map />
      <button onClick={() => app.auth().signOut()}>Sign out</button>
    </>
  );
};

export default Home;