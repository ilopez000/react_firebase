import React from 'react';
import { BrowserRouter as Router, Routes, Route } from react-router-dom;
import { AuthProvider } from './AuthContext'; // Asegúrate de tener este componente
import Home from './Home';
import Login from './Login';
import Register from './Register';
import UserProfile from './UserProfile';
import PrivateRoute from './PrivateRoute'; // Asegúrate de tener este componente

function App() {
return (
<AuthProvider>
<Router>
<div>
{/* Aquí puedes colocar tu Navbar si tienes uno /}
<Routes>
<Route exact path="/" element={<Home />} />
<Route path="/login" element={<Login />} />
<Route path="/register" element={<Register />} />
<Route
path="/userprofile"
element={
<PrivateRoute>
<UserProfile />
</PrivateRoute>
}
/>
{/ Añade aquí más rutas según sea necesario */}
</Routes>
</div>
</Router>
</AuthProvider>
);
}

export default App

;
