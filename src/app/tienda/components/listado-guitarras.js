export default function ListadoGuitarras({ guitarras }) {
    return (
        <div>
            {guitarras.map((guitarra) => (
                <div key={guitarra.id}> 
                    <h3>{guitarra.nombre}</h3>
                </div>
            ))}
        </div>
    )
}
