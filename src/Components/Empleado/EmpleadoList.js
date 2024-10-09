import React, { useEffect, useState } from 'react';
import { getAllEmpleados } from '../../Service/EmpleadoService'; // Importa desde Service

const EmpleadosList = () => {
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
            <ul>
                {empleados.map((empleado) => (
                    <li key={empleado.id}>
                        {empleado.nombre} - {empleado.sucursal}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EmpleadosList;
