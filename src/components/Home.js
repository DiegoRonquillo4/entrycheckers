import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
export default class Home extends Component {
  //Sección Home contiene un Carousel con tres imágenes que se muestran de forma dinámica
    render() {
        return (
            <div>
                <blockquote class="blockquote text-center">
                <Carousel>
  <Carousel.Item interval={500}>
    <img className="d-block w-100" src="https://imagenes.expreso.ec/files/image_700_402/uploads/2020/06/01/5ed524d5ec4d0.jpeg" alt="First slide"/>
    <Carousel.Caption>
      <h3>EntryCheckers</h3>
      <h1>Registros de Temperatura Corporal</h1>
      <p>Registros de temperatura corporal tomada al ingreso de los distintos centros comerciales de la ciudad de Guayaquil.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img className="d-block w-100" src="https://imagenes.expreso.ec/files/image_700_402/uploads/2020/06/30/5efbd71c5ff21.jpeg" alt="Second slide"/>
    <Carousel.Caption>
      <h3>EntryCheckers</h3>
      <h1>Registros de Temperatura Corporal</h1>
      <p>Registros de temperatura corporal tomada al ingreso de los distintos centros comerciales de la ciudad de Guayaquil.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img className="d-block w-100" src="https://www.peru-retail.com/wp-content/uploads/mall-policentro05-ecuador-1-1024x503.jpg" alt="Third slide"/>
    <Carousel.Caption>
      <h3>EntryCheckers</h3>
      <h1>Registros de Temperatura Corporal</h1>
      <p>Registros de temperatura corporal tomada al ingreso de los distintos centros comerciales de la ciudad de Guayaquil.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
                </blockquote>
        </div>
        )
    }
    
}