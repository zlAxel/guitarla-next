import Image from "next/image"
import styles from "./nosotros.module.css"

export const metadata = {
    title: 'Nosotros',
    description: "Sitio web dedicado a la venta de guitarras",
}

export default function NosotrosPage() {
    return (
        <main className="contenedor">
            <h2 className="heading">Nosotros</h2>
            <div className={styles.contenido}>
                <Image src="/img/nosotros.jpg" width={1000} height={400} alt="Nosotros" />
                <div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a justo rhoncus, vulputate eros ut, condimentum elit. Ut vel tortor at nibh facilisis lacinia. Aliquam congue urna sit amet augue bibendum consequat eu et augue. Fusce vitae iaculis nisi, id hendrerit dui. Nulla nec eros eget turpis laoreet cursus. Pellentesque sed massa leo. Maecenas lobortis quam id neque lacinia gravida. In eu hendrerit orci, eu venenatis nibh. Aliquam sit amet enim ac odio maximus condimentum ut ut velit.
                    </p>
                    <br />
                    <p>
                        Mauris ut tempus nibh. Morbi consectetur ultricies dolor et volutpat. Duis fringilla quis diam vitae dictum. Donec pharetra placerat nibh eu scelerisque.
                    </p>
                </div>
            </div>
        </main>
    )
}