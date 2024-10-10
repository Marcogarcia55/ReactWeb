import axios from "axios"

const API_URL = 'https://jubilant-space-disco-v5j9w4q4j9xhwpp4-5260.app.github.dev/Empleado';

export const getllAll = async () =>{
    try {
        const response = await axios.get(`${API_URL}`);
        return response.data;
    } catch (error) {
        console.log("Error");
        throw error;
    }
};
export const getById = async (id) =>{
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.log("Error");
        throw error;
    }
};

export const addEmpleado = async (empleado) =>{
    try {
        const response = await axios.get(`${API_URL}`, empleado);
    } catch (error) {
        
    }
};
   
