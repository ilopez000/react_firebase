import React, { useState, useEffect, useContext } from 'react';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { AuthContext } from './AuthContext'; // Asegúrate de tener este componente

function UserProfile() {
const { currentUser } = useContext(AuthContext);
const [userData, setUserData] = useState({});
const [loading, setLoading] = useState(true);
const db = getFirestore();

useEffect(() => {
    const fetchUserData = async () => {
        if (currentUser) {
            const docRef = doc(db, "users", currentUser.uid);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                setUserData(docSnap.data());
            } else {
                console.log("No se encontraron datos del usuario.");
}
setLoading(false);
}
};

    fetchUserData();
}, [currentUser, db]);

if (loading) {
    return <div>Cargando...</div>;
}

return (
    <div>
        <h1>Perfil del Usuario</h1>
        {userData && (
            <>
                <p>Nombre: {userData.firstName}</p>
                <p>Apellidos: {userData.lastName}</p>
                <p>Fecha de Nacimiento: {userData.birthDate}</p>
            </>
        )}
    </div>
);

}

export default UserProfile;


