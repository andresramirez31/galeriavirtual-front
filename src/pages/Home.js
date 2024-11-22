import React from "react";
import '../styles/main.css';
import '../styles/Home.css';
import { useRole } from '../context/role_context';
import AdminLayout from './layouts/adminLayout';
import EvaluadorLayout from './layouts/evaluadorLayout';
import VisitanteLayout from './layouts/visitanteLayout';
import GuestLayout from './layouts/guestLayout';


const Home = () => {

  const { role } = useRole();
  
  if (!role){
    return <GuestLayout />;
  }

  switch(role.role){
    case "visitante":
      return <VisitanteLayout />;

    case "admin":
      return <AdminLayout />;

    case "evaluador":
      return <EvaluadorLayout />;
    
    default:
      return <GuestLayout />;

  }
    
};

export default Home;


