import React from 'react'
// import lo form '/src/assets/logoo.png';
import '../../style/header.css'
import { Link } from 'react-router-dom';

function Hader(){
    return (
        <div className='head'>
            <Link to={`/`}>
        <img src={import.meta.env.BASE_URL+'/src/assets/logoo.png'} alt='logo' id="logo"/></Link>
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="/Recherche">Recherche</Link>
            <Link to="/Ajouter">Ajouter</Link>
            {/* <Link to="/Details">Details</Link> */}
            
        
            
            
        </nav>
        
        </div>
    )
}
export default Hader;