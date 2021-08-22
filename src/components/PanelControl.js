import React, { Component } from 'react'
import axios from "axios"
import {backend} from '../App'
import Cookies from 'universal-cookie';
import Accordion from 'react-bootstrap/Accordion'
const cookies = new Cookies();
export default class PanelControl extends Component {
    //PanelControl contiene un accordion con 4 formularios para manipular la base de datos
    render() {
        return (
        <div className="formularios">
    <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>Registrar Administrador</Accordion.Header>
    <Accordion.Body>
        <form onSubmit={this.onSubmitAdmin}>
            <div className="form-group">
                <input type="text" className="form-control my-1" value={this.state.usuario} placeholder="Usuario (entre 4 y 12 caracteres alfanuméricos)" onChange={this.onChangeUser}/>
                <input type="text" className="form-control my-1" value={this.state.contraseña} placeholder="Contraseña (entre 4 y 12 caracteres)" onChange={this.onChangePassword}/>
            </div>
            <button className="btn btn-primary my-3" type='submit'>Registrar</button>
        </form>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Registrar Edificio</Accordion.Header>
    <Accordion.Body>
        <form onSubmit={this.onSubmitEdificio}>
            <div className="form-group">
                <input type="text" className="form-control my-1" value={this.state.nombre_edificio} placeholder="Nombre" onChange={this.onChangeNombreEd}/>
            </div>
            <button className="btn btn-primary my-3" type='submit'>Registrar</button>
        </form>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>Eliminar Registro de Ingreso</Accordion.Header>
    <Accordion.Body>
        <form onSubmit={this.onSubmitEliminar}>
            <div className="form-group">
                <input type="number" className="form-control my-1" value={this.state.id} placeholder="Id" onChange={this.onChangeId}/>
            </div>
            <button className="btn btn-primary my-3" type='submit'>Eliminar</button>
        </form>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="3">
    <Accordion.Header>Eliminar Edificio</Accordion.Header>
    <Accordion.Body>
        <form onSubmit={this.onSubmitEliminar}>
            <div className="form-group">
                <input type="number" className="form-control my-1" value={this.state.id} placeholder="Id" onChange={this.onChangeId}/>
            </div>
            <button className="btn btn-primary my-3" type='submit'>Eliminar</button>
        </form>
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
        </div>
        )
    }
    //Cambia estado id
    onChangeId = (e)=>{
        this.setState({
            id: e.target.value
        })
    }
    //cambia estado usuario
    onChangeUser = (e)=>{
        this.setState({
            usuario: e.target.value
        })
    }
    //cambia estado contraseña
    onChangePassword = (e)=>{
        this.setState({
            contraseña: e.target.value
        })
    }
    //cambia estado nombre de edificio
    onChangeNombreEd = (e)=>{
        this.setState({
            nombre_edificio: e.target.value
        })
    }
    //cambia estado id de edifcio
    onChangeEd = (e)=>{
        this.setState({
            id_edificio: e.target.value
        })
    }
    //Función para botón Registrar Administrador
    //Valida los campos ingresados y realiza un post a tabla administrador utilizando axios
    onSubmitAdmin = async (e)=>{
        e.preventDefault();
        if(this.state.usuario==="" || this.state.contraseña===""){
            alert("Llene todos los campos");
        }else{
        if(!this.state.usuario.match("^[a-zA-Z0-9]*$")){
            alert('Ingrese un usuario solo con caracteres alfanumericos');
        } else{
        if(this.state.usuario.length>0 && (this.state.usuario.length<4 || this.state.usuario.length>12)) {
           alert('Ingrese un usuario de entre 4 y 12 caracteres');
        } else{
            if(this.state.usuario.length>0 && (this.state.contraseña.length<4 || this.state.contraseña.length>12)) {
            alert('Ingrese una contraseña de entre 4 y 12 caracteres');
            }else{   
                try {
                    const res = await axios.post("http://entrycheckers.herokuapp.com" + '/login/admin',{
                    user:this.state.usuario,
                    password:this.state.contraseña
                    });
                console.log(res);
                alert("Administrador Registrado");
                } catch (error) {
                    alert(error.response.data);
                }  
            }}}}
        this.setState({usuario:''});
        this.setState({contraseña:''});
    }
    //Función para botón registrar edificio
    //Post en tabla edificio con axios
    //Solo contiene un campo ya que la id tiene autoincrement.
    onSubmitEdificio = async (e)=>{
        e.preventDefault();
        try {
            const res = await axios.post("http://entrycheckers.herokuapp.com"+ '/edificio',{
            nombre:this.state.nombre_edificio
            });
        console.log(res);
        alert("Edificio Registrado");
        } catch (error) {
            alert(error.response.data);
        }
        this.setState({nombre_edificio:''});
    }
    //Función para eliminar registro de ingreso
    //Realiza un delete en ingresos utilizando axios
    onSubmitEliminar = async (e)=>{
        e.preventDefault();
        if(!(this.state.id==="")){
        try {
            const res = await axios.delete("http://entrycheckers.herokuapp.com" + '/Mall1/'+ this.state.id );
        console.log(res);
        alert("Registro Eliminado");
        } catch (error) {
            alert(error.response.data);
        }
    } else{
        alert("Datos incompletos")
    }
        this.setState({id:''});
    }
    //Función para botón Eliminar Edificio
    //Realiza un delete en tabla edificio con axios
    onSubmitEliminarEd = async (e)=>{
        e.preventDefault();
    if(!(this.state.id_edificio==="")){
        try {
            const res = await axios.delete("http://entrycheckers.herokuapp.com" + '/edificio/'+ this.state.id_edificio );
        console.log(res);
        alert("Edificio Eliminado");
        } catch (error) {
            alert(error.response.data);
        }
    } else{
        alert("Datos incompletos");
    }
        this.setState({id_edificio:''});
    }
    //Estados necesarios
    state = {
        users: [],
        id:'',
        nombre_edificio:'',
        usuario:'',
        contraseña:'',
        id_edificio:'',
        valido:false
    }
    //Se redirige a login si no se ha iniciado sesión
    async componentDidMount() {
        if(!cookies.get('username')){
            window.location.href="./login";
        }
    }
}