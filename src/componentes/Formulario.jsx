import React from 'react'
import { useForm} from 'react-hook-form';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Formulario = () => {
    const URL = 'https://encuestas-back-production.up.railway.app/crear';
    const {register, formState: {errors}, handleSubmit} = useForm({
        defaultValues: {
            nombre: '',
            apellido: '',
            preferencia: ''
        }
    })

    const onSubmit = (data) => {
        console.log(data);
        axios.post(URL, data)
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="form">
                <div>
                    <label>Nombre</label>
                    <Form.Control type="text" {...register('nombre', {
                        required: true
                    })}/>
                    {errors.nombre?.type === 'required' && <p>El Nombre es Requerido</p>}
                </div>
                <div>
                    <label>Apellido</label>
                    <Form.Control type="text" {...register('apellido', {
                        required: true
                    })}/>
                    {errors.apellido?.type === 'required' && <p>El Apellido es Requerido</p>}
                </div>
                <div>
                    <label>Preferencia</label>
                    <Form.Select {...register('preferencia', {
                        required: true
                    })}>
                        <option value="Feriado">Feriado</option>
                        <option value="Sábado">Sábado</option>
                    </Form.Select>
                    {errors.preferencia?.type === 'required' && <p>La Preferencia es Requerida</p>}
                </div>
                <div className="boton" >
                <Button variant="success" type="submit" value="Enviar">Enviar</Button>
                </div>
            </form>
        </div>
    )
}

export default Formulario