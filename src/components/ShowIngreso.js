import React, { Component } from 'react'
import axios from "axios"
import './ShowIngreso.css';
import Cookies from 'universal-cookie';
import Table from 'react-bootstrap/Table'
const cookies = new Cookies();
export default class ShowIngreso extends Component {
    //Se redirige a login si no se ha iniciado sesión
    async componentDidMount() {
        await this.getIngresos();
        await this.getEdificios();
        if(!cookies.get('username')){
            window.location.href="./login";
        }
    }
    //ShowIngreso contiene un texto, un grupo de tabs, y una tabla de datos
    render() {
        return (
            <blockquote class="blockquote text-center">
               <h1>Lista de Ingresos</h1>
                <ul class="nav nav-tabs nav-fill">
                {
                        this.state.edificios.map(user => (
                            <li className="nav-item" key={user.id} id={user.id} onClick={this.filtrar}>
                               {user.nombre}
                            </li>)
                        )
                    }
                <li className="nav-item" onClick={this.reiniciar}>Todos los registros</li>
                </ul>
<Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th>Nombre</th>
      <th>Temperatura</th>
    </tr>
  </thead>
  <tbody>
    {
     this.state.ingresos.map(user => (
    <tr key={user.id} id={user.id}> 
    <td>{user.id}</td>
    <td>{user.nombre}</td>
    <td>{user.temperatura}</td>
    </tr>)
    )
    }
  </tbody>
</Table>
        </blockquote>
        )
    }
    //Función reiniciar para reestablecer la tabla a forma inicial
    reiniciar = async (e)=>{
        const res = await axios.get('http://entrycheckers.herokuapp.com/Mall1');
        this.setState({ingresos:res.data});
    }
   //Función filtrar para mostrar en la tabla solo los datos del edificio deseado 
    filtrar = async (e)=>{
        const res = await axios.get('http://entrycheckers.herokuapp.com/edificio/'+ e.target.getAttribute('id') );
        this.setState({ingresos:res.data});
    }
    //Estados necesarios
    state = {
        ingresos: [],
        edificios: [],
    }
    //Función para tomar todos los registros de la base de datos de la tabla ingresos
    async getIngresos() {
        const res = await axios.get('http://entrycheckers.herokuapp.com/Mall1');
        this.setState({ingresos:res.data});
    }
    //Función para tomar todos los registros de la base de datos de la tabla edificio
    async getEdificios() {
        const res = await axios.get('http://entrycheckers.herokuapp.com/edificio');
        this.setState({edificios:res.data});
    }
}