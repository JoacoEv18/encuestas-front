import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Table from 'react-bootstrap/Table';

export const Tabla = () => {
    const [gente, setGente] = useState([])
    const URL = 'https://encuestas-back-production.up.railway.app/';
    
    const getGente = async () => {
        try {
            const { data } = await axios.get(URL);
            setGente(data.personas)
            console.log(data.personas);
        } catch (error) {
            console.error(error);
        }
    }
    
    useEffect(() => {
        getGente()
    },[]);

    return (
        <div>
            <h1 className='text-center mt-2'>
                Ya Anotados
            </h1>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Preferencia</th>
                    </tr>
                </thead>
                <tbody>
                {gente.map((p) => ( 
                    <tr key={p._id}>
                        <td>{p.nombre}</td>
                        <td>{p.apellido}</td>
                        <td>{p.preferencia}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </div>
    )
}
