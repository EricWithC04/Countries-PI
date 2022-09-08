import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => {
    return (
        <div>
            <h1>Error 404: not found!</h1>
            <p>Lo sentimos, la ruta a la que estás queriendo acceder no existe o 
               aún no se encuentra implementada, 
               <Link to="/Home">haz click aquí para volver a la pagina de inicio</Link>
            </p>
        </div>
    );
};

export default Error404;