import React, { useEffect, useState } from 'react';
import { getAllEmpleados } from '../../Service/EmpleadoService';

export const EmpleadosList = () => {
    const [empleados, setEmpleados] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEmpleados = async () => {
            try {
                const data = await getAllEmpleados();
                setEmpleados(data);
            } catch (error) {
                setError('Error fetching employees');
            } finally {
                setLoading(false);
            }
        };

        fetchEmpleados();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h1>Lista de Empleados</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Sucursal</th>
                    </tr>
                </thead>
                <tbody>
                {empleados.map((em) => (
                        <tr key={em.id}>
                            <td>{em.nombre}</td>
                            <td>{em.apellido}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
};

export default EmpleadosList;
