// Importa la función para leer archivos del sistema de archivos de Node.js
import fs from 'fs';
import path from 'path';

// ? Función de manejo de la ruta API
export default function handler(req, res) {
    // * Define la ruta al archivo de datos
    const filePath = path.resolve('.', 'public/data/guitars.json');
    
    // * Lee el archivo de datos
    const jsonDatos = fs.readFileSync(filePath, 'utf8');
    
    // * Convierte los datos JSON a un objeto JavaScript
    const datos = JSON.parse(jsonDatos);
    
    // * Envía los datos como respuesta a cualquier solicitud a esta ruta API
    res.status(200).json(datos.guitarras);
}
