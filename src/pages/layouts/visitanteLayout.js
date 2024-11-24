import React from "react";
import { Link } from "react-router-dom";
import '../../styles/main.css';
import '../../styles/Home.css';
import { useRole } from '../../context/role_context';


const VisitanteLayout = () => { 
    const { role } = useRole();

    return(
        <div>
            <h2>GALERÍA VIRTUAL UDEA</h2>
            <p>Para exhibir tus proyectos académicos al mundo!</p>
            
            <div className="HomeBox">

                <h3 className="Greeting">Bienvenido {role.role}</h3>

                <Link to="/SalonAccess">
                    <button className="btn_event" style={{ padding: '10px 20px', fontSize: '16px' }}>
                    Entrar a Salón de exposiciones
                    </button>
                </Link>

            </div>
        </div>
    )
}

export default VisitanteLayout;