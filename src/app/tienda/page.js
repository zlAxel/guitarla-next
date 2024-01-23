import ListadoGuitarras from "./components/listado-guitarras"

export const metadata = {
    title: 'Tienda',
    description: "La tienda de guitarras más grande de México",
}

export default async function TiendaPage() {
    const guitarras = await getGuitars();
    return (
        <main className="contenedor">
            <h1 className="heading">Nuestra Colección</h1>

            <ListadoGuitarras guitarras={guitarras} />
        </main>
    )
}

async function getGuitars() {
    let respuesta = await fetch('http://localhost:3000/api/guitars');
    respuesta = await respuesta.json();
    respuesta = respuesta.guitarras;

    if( ! respuesta ) throw new Error(respuesta.statusText);

    return respuesta;
};