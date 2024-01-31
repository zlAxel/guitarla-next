import { getGuitar } from "@/app/lib/data";
import { notFound } from "next/navigation";
import styles from '../../../styles/guitarras.module.css';


export default async function GuitarraDetalle({params}) {
    const { id } = params;
    const guitar = await getGuitar(id);

    if ( ! guitar ) {
        notFound();
    }

    const { nombre, descripcion, precio, imagen } = guitar;
    
    return (
        <div className={styles.guitarra}>
            <img 
                src={imagen} 
                alt={`Imagen de ${nombre}`}
                width={250}
                height={150}
            />

            <div className={styles.contenido}>
                <h3>{nombre}</h3>
                <p className={styles.descripcion}>{descripcion}</p>
                <p className={styles.precio}>${precio}</p>
            </div>
        </div>
    )
}

// Devuelve una lista de `params` para poblar el segmento dinámico [id]
export async function generateStaticParams() {
    const guitarras = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/guitars`).then((res) => res.json());
    
    return guitarras.map((guitarra) => ({
        params: { id: guitarra.id },
    }));
}

// Devuelve los parámetros de ruta para generar las páginas de ruta dinámica
export async function generateMetadata({ params }) {
    const { id } = params;
    const guitar = await getGuitar(id);

    return {
        title: `Guitarra ${guitar.nombre}`,
        description: `Detalles de la guitarra ${guitar.nombre}: ${guitar.descripcion}`,
    };
}
