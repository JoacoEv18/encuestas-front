import React from 'react'
import Formulario from '../componentes/Formulario'
import { Tabla } from './Tabla'

export const Home = () => {
    return (
        <div>
            <h1 className="text-center dia">
                Día con el Pastor
            </h1>
            <Formulario/>
            <Tabla/>
        </div>
    )
}
