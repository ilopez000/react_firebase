import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const auth = getAuth();
    const db = getFirestore();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            // Guardar la información adicional del usuario en Firestore
            await setDoc(doc(db, "users", user.uid), {
                firstName,
                lastName,
                birthDate
            });
            navigate('/'); // Redirigir al usuario a la página de inicio después del registro
        } catch (error) {
            setError('Error al registrar. Por favor, inténtalo de nuevo.');
        }
    };

    return (
        <div>
            <h1>Registro</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="Correo electrónico"
                />
                <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder="Contraseña"
                />
                <input 
                    type="text" 
                    value={firstName} 
                    onChange={(e) => setFirstName(e.target.value
)}
placeholder="Nombre"
/>
<input
type="text"
value={lastName}
onChange={(e) => setLastName(e.target.value)}
placeholder="Apellidos"
/>
<input
type="date"
value={birthDate}
onChange={(e) => setBirthDate(e.target.value)}
placeholder="Fecha de Nacimiento"
/>
<button type="submit">Registrar</button>
</form>
</div>
);
}

export default Register;
