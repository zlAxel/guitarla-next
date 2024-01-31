
export async function getGuitars() {
    try {
        const respuesta = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/guitars`);
        const guitarras = await respuesta.json();
    
        if ( ! respuesta.ok ) throw new Error('Error al buscar las guitarras');
    
        return guitarras;
    } catch (error) {
        console.log(error);
    }
};

export async function getGuitar(id) {
    try {
        const respuesta = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/guitars/${id}`);
        const guitarra  = await respuesta.json();
    
        if ( ! respuesta.ok ) throw new Error('Error al buscar la guitarra');
        
        return guitarra;
    } catch (error) {
        console.log(error);
    }
};
