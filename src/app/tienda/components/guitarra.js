import Link from "next/link";
import styles from '../../../styles/guitarras.module.css';

export default function Guitarra({ guitarra }) {
    const { nombre, descripcion, precio, imagen } = guitarra;
    return (
        <div className={styles.guitarra}>
            <img 
                src={imagen} 
                alt={`Imagen de ${nombre}`}
                width={150}
                height={50}
            />

            <div className={styles.contenido}>
                <h3>{nombre}</h3>
                <p className={styles.descripcion}>{descripcion}</p>
                <p className={styles.precio}>${precio}</p>
                <Link href={`/guitarras/${guitarra.id}`} className={styles.enlace}>
                    Ver guitarra
                </Link>
            </div>
        </div>
    )
}
