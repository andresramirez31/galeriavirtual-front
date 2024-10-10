import React from "react";
import { Link } from "react-router-dom";
import '../styles/main.css';
import '../styles/Home.css';

const Home = () => {
    return (
      <div>
      <h2>GALERIA VIRTUAL UDEA</h2>
      <p>Para exhibir tus proyectos academicos al mundo!</p>
      
      <div className="HomeBox">

        <h3 className="Greeting">Bienvenido usuario/a</h3>

        

          <Link to="/createGallery">
            <button className='btn_event' style={{ padding: '10px 20px', fontSize: '16px' }}>
              Ir a la creacion de salon
            </button>
          </Link>

          <Link to="/SalonAccess">
            <button className="btn_event" style={{ padding: '10px 20px', fontSize: '16px' }}>
              Entrar a Salon de exposiciones
            </button>
          </Link>

          <Link to="/login">
            <button className="btn_event" style={{ padding: '10px 20px', fontSize: '16px' }}>
              Iniciar Sesion
            </button>
          </Link>

      </div>
    </div>
    );
};

export default Home;


