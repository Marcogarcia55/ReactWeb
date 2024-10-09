import React from 'react';
import EmpleadosList from './Components/Empleado/EmpleadoList';
import EmpleadoForm from './Components/Empleado/EmpleadoForm';

function App() {
    return (
        <div className="App">
            <h1>Gestión de Empleados</h1>
            <EmpleadoForm />
            <EmpleadosList />
        </div>
    );
}

export default App;
