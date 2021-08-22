import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import img1 from './img/logo.jpg';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

export default class Navigation extends Component {
  //Navbar de la aplicación
  //Se intercambia el estado del botón superior derecho si se ha iniciado sesión
  componentDidMount() {
    if(!cookies.get('username')){
      this.setState({textoSesion:'Iniciar Sesión'});
    } else{
      this.setState({textoSesion:'Cerrar Sesión'});
    }
  }
  //Se crea estado para el texto del botón iniciar/cerrar sesión
  state = {
    textoSesion:''

}
//Navbar contiene una imagen, un link a LandPage, un link a ListaIngresos y un link a Panel de Control.
//Además, contiene botón iniciar/cerrar sesión
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg text-white bg-dark">
                <a class="navbar-brand" href="/">
    <img src={img1} width="140" height="50" alt=""/>
  </a>
  <div className="container-fluid">
    <Link className="navbar-brand text-white bg-dark" to="/">Home</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link active text-white bg-dark" aria-current="page" to="/Mall1">Lista de Ingresos</Link>
        <Link className="nav-link active text-white bg-dark" aria-current="page" to="/registrar">Panel de Control</Link>
        </div>
    </div>
    <div class="me-3" align="right">
                <button onClick={()=>this.Sesion()}>{this.state.textoSesion}</button>
                </div>
  </div>
</nav>  
            </div>
        )
    }
    //Botón iniciar/cerrar sesión que valida ambos casos
    Sesion=()=>{
      if(!cookies.get('username')){
        window.location.href="./login";
    } else{
      cookies.remove('username', {path: "/"});
      window.location.href='./';
    }
    }
}
