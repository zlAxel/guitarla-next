import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    const { id } = req.query; // Obtiene el ID de la URL

    // Define la ruta al archivo de datos
    const filePath = path.resolve('.', 'public/data/guitars.json');
    
    // Lee el archivo de datos
    const jsonDatos = fs.readFileSync(filePath, 'utf8');
    const datos = JSON.parse(jsonDatos);

    // Encuentra la guitarra por ID
    const guitarra = datos.guitarras.find(g => g.id === parseInt(id));

    // Si no se encuentra la guitarra, devuelve un error 404
    if (!guitarra) {
        return res.status(404).json({ message: 'Guitarra no encontrada' });
    }

    // Envía la guitarra como respuesta
    res.status(200).json(guitarra);
}