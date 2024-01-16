import React from 'react';

function Footer() {
    const year = new Date().getFullYear(); // Año actual para los derechos de autor

    return (
        <footer style={{ textAlign: 'center', marginTop: '20px', padding: '20px', backgroundColor: '#f8f8f8' }}>
            <p>© {year} Tu Compañía o Nombre de la Aplicación</p>
            {/* Aquí puedes agregar más información o enlaces */}
            <p>
                <a href="/contacto">Contacto</a> | <a href="/privacidad">Política de Privacidad</a>
            </p>
            {/* Enlaces a redes sociales, si son necesarios */}
        </footer>
    );
}

export default Footer;
