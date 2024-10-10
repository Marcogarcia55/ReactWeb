import React, { useEffect, useState } from "react";
import { getllAll } from '../../Service/Prueba';

export const ListPrueba = () => {
    const [empleado, setEmpleado] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEmpleados = async () => {
            try {
                const data = await getllAll();
                setEmpleado(data);
            } catch (error) {
                setError('Error');
            } finally {
                setLoading(false);
            }
        };
        fetchEmpleados();
    }, []);

    if (loading) {
        return <p>Cargando...</p>
    }
    if (error) {
        return <p>{error}</p>
    }

    return (
        <div>
            <h1>Lista de Empleados</h1>
            <ul>
                {empleado.map((emp, index) => (
                    <li key={index}>{emp.name}</li>
                ))}
            </ul>
        </div>
    );

};


export default ListPrueba;