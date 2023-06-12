import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <section>
      <h1>Home</h1>
      <div>
        <span>
          <Link to={"/signin"}>login</Link>
        </span>
        <span>
          <Link to={"/signup"}>Register</Link>
        </span>
      </div>
    </section>
  );
};

export default Home;
