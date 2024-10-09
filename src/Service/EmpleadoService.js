import axios from 'axios';

const API_URL = 'https://jubilant-space-disco-v5j9w4q4j9xhwpp4-5260.app.github.dev/Empleado'; // Cambia esto por tu URL de la API

// Obtener todos los empleados
export const getAllEmpleados = async () => {
    try {
        const response = await axios.get(`${API_URL}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching employees:', error);
        throw error;
    }
};

// Obtener empleados por sucursal
export const getEmpleadosBySucursal = async (sucursalId) => {
    try {
        const response = await axios.get(`${API_URL}/bySucursal/${sucursalId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching employees by sucursal:', error);
        throw error;
    }
};

// Obtener empleado por ID
export const getEmpleadoById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching employee by ID:', error);
        throw error;
    }
};

// Crear un nuevo empleado
export const createEmpleado = async (empleado) => {
    try {
        const response = await axios.post(`${API_URL}`, empleado);
        return response.data;
    } catch (error) {
        console.error('Error creating employee:', error);
        throw error;
    }
};

// Actualizar empleado
export const updateEmpleado = async (empleado) => {
    try {
        const response = await axios.put(`${API_URL}`, empleado);
        return response.data;
    } catch (error) {
        console.error('Error updating employee:', error);
        throw error;
    }
};

// Eliminar empleado
export const deleteEmpleado = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting employee:', error);
        throw error;
    }
};
