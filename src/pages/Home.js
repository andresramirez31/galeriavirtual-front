import React from "react";
import { Link } from "react-router-dom";
import '../styles/main.css';
import '../styles/Home.css';

const Home = () => {
    return (
      <div>
      <h2>GALERÍA VIRTUAL UDEA</h2>
      <p>Para exhibir tus proyectos académicos al mundo!</p>
      
      <div className="HomeBox">

        <h3 className="Greeting">Bienvenido usuario/a</h3>

        

          <Link to="/createGallery">
            <button className='btn_event' style={{ padding: '10px 20px', fontSize: '16px' }}>
              Ir a la creación de salón
            </button>
          </Link>

          <Link to="/SalonAccess">
            <button className="btn_event" style={{ padding: '10px 20px', fontSize: '16px' }}>
              Entrar a Salón de exposiciones
            </button>
          </Link>

          <Link to="/login">
            <button className="btn_event" style={{ padding: '10px 20px', fontSize: '16px' }}>
              Iniciar Sesión
            </button>
          </Link>

      </div>
    </div>
    );
};

export default Home;


