import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthContext'; // Asegúrate de tener este componente
import { getAuth, signOut } from 'firebase/auth';

function Navbar() {
    const { currentUser } = useContext(AuthContext);
    const auth = getAuth();

    const handleLogout = async () => {
        try {
            await signOut(auth);
            // Manejar el logout exitoso aquí, si es necesario
        } catch (error) {
            // Manejar errores aquí, si es necesario
        }
    };

    return (
        <nav>
            <Link to="/">Home</Link>
            {currentUser ? (
                <>
                    <Link to="/userprofile">Perfil</Link>
                    <button onClick={handleLogout}>Cerrar Sesión</button>
                </>
            ) : (
                <>
                    <Link to="/login">Iniciar Sesión</Link>
                    <Link to="/register">Registrar</Link>
                </>
            )}
        </nav>
    );
}

export default Navbar;
