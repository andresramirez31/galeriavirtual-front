import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
      <div>
      <h1>GALERIA VIRTUAL UDEA</h1>
      <p>Para exhibir tus proyectos academicos al mundo!</p>

      <Link to="/createGallery">
        <button style={{ padding: '10px 20px', fontSize: '16px' }}>
          Ir a creacion de salon
        </button>
      </Link>

      <Link to="/login">
        <button style={{ padding: '10px 20px', fontSize: '16px' }}>
          Ir a Login
        </button>
      </Link>
    </div>
    );
};

export default Home;


