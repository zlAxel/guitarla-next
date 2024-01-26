import { getGuitars } from "../lib/data";
import Guitarra from "./components/guitarra"
import styles from '../../styles/grid.module.css';

export const metadata = {
    title: 'Tienda',
    description: "La tienda de guitarras más grande de México",
}

export default async function TiendaPage() {
    const guitarras = await getGuitars();
    return (
        <main className="contenedor">
            <h1 className="heading">Nuestra Colección</h1>

            <div className={styles.grid}>
                { guitarras?.map((guitarra) => (
                    <Guitarra key={guitarra.id} guitarra={guitarra} />
                ))}
            </div>
        </main>
    )
}