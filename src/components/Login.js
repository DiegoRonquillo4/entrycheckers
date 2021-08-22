import React, { Component } from 'react';
import axios from "axios"
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
class Login extends Component {
    //Se crean estados para usuario y contraseña
    state={
        form:{
            username: '',
            password: ''
        }
    }
    //Se actualizan los estados
    handleChange=async e=>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    }
    //Función iniciar sesión que valida las credenciales ingresadas utilizando axios
iniciarSesion=async()=>{ 
    if(this.state.form.username==="" || this.state.form.password===""){
        alert("Llene todos los campos");
    } else{
    try {
        const res = await axios.post('http://entrycheckers.herokuapp.com/login',{user:this.state.form.username})
        if (res.data.length>0){
            if(res.data[0].password===this.state.form.password){
            alert(`Bienvenido ${this.state.form.username}`);
            window.location.href="./";
            cookies.set('username', this.state.form.username, {path: "/"})
            } else{
                alert('Contraseña incorrecta');
        }} else{
            alert('Usuario inexistente');
    }
    } catch (error) {
        alert(error);
    }
}
}
//Si se inicia sesión se redirige al LandPage
    componentDidMount() {
        if(cookies.get('username')){
            window.location.href="./";
        }
    }
    //Sección Login contiene un formulario con dos campos y un botón para iniciar sesión
    render() {
        return (
    <div className="containerPrincipal">
        <div className="containerSecundario">
          <div className="form-group">
            <label>Usuario: </label>
            <br />
            <input
              type="text"
              className="form-control"
              name="username"
              onChange={this.handleChange}
            />
            <br />
            <label>Contraseña: </label>
            <br />
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={this.handleChange}
            />
            <br />
            <button className="btn btn-primary" onClick={()=> this.iniciarSesion()}>Iniciar Sesión</button>
          </div>
        </div>
      </div>
        );
    }
}

export default Login;
