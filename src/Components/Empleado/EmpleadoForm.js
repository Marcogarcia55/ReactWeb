import React, { useState } from 'react';
import { createEmpleado } from '../../Service/EmpleadoService'; 

export const EmpleadoForm = () => {
    const [empleado, setEmpleado] = useState({
        nombre: '',
        sucursal: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newEmpleado = await createEmpleado(empleado);
            console.log('Empleado creado:', newEmpleado);
        } catch (error) {
            console.error('Error creating employee:', error);
        }
    };

    
    const handleChange = (e) =>{
        const { name, value } = e.target;
        setEmpleado((prev) => ({...prev, [name]: value}));
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nombre:</label>
                <input
                    type="text"
                    name="nombre"
                    value={empleado.nombre}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Sucursal:</label>
                <input
                    type="text"
                    name="sucursal"
                    value={empleado.sucursal}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Crear Empleado</button>
        </form>
    );
};

export default EmpleadoForm;
