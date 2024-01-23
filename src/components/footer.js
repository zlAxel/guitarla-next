import Link from "next/link";
import styles from "../styles/footer.module.css";

const links = [
    {
        href: "/",
        label: "Home"
    },
    {
        href: "/tienda",
        label: "Tienda"
    },
    {
        href: "/nosotros",
        label: "Nosotros"
    },
    {
        href: "/blog",
        label: "Blog"
    },
];
export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`contenedor ${styles.contenido}`}>
                <nav>
                    { links.map(link => (
                        <Link key={link.label} href={link.href}>
                            { link.label }
                        </Link>
                    ))}
                </nav>
                <p className={styles.copyright}>
                    Todos los derechos reservados &copy; { new Date().getFullYear() }
                </p>
            </div>
        </footer>
    )
}