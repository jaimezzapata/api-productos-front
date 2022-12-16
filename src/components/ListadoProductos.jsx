import axios from "axios";
import { useState, useEffect } from "react";

const apiProductos = 'http://localhost:3100/productos'

const ListadoProductos = () => {

    const [productos, setProductos] = useState([])

    useEffect(()=> {
        listarProductos()
    })

    const listarProductos = async() => {
        const datos = await axios.get(apiProductos)
        setProductos(datos.data)
    }

  return (
    <section>
      <h1>Listado Productos</h1>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Referencia</th>
            <th scope="col">Nombre</th>
            <th scope="col">Descripcion</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Valor</th>
          </tr>
        </thead>
        <tbody>
            {
             productos.map((producto)=>(
                <tr>
                    <td>{producto.referencia}</td>
                    <td>{producto.nombre}</td>
                    <td>{producto.descripcion}</td>
                    <td>{producto.cantidad}</td>
                    <td>{producto.valor}</td>
                </tr>
             ))   
            }
        </tbody>
      </table>
    </section>
  );
};

export default ListadoProductos;
