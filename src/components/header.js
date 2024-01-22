'use client'

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/header.module.css";

const links = [
    {
        href: "/",
        label: "Home"
    },
    {
        href: "/nosotros",
        label: "Nosotros"
    },
    {
        href: "/tienda",
        label: "Tienda"
    },
    {
        href: "/blog",
        label: "Blog"
    },
];

export default function Header() {
    const pathname = usePathname();
    return (
        <header className={styles.header}>
            <div className={`contenedor ${styles.barra}`}>
                <Link href={links[0].href}>
                    <Image src="/img/logo.svg" alt="Logotipo GuitarLA" width="300" height="40" />
                </Link>

                <nav className={styles.navegacion}>
                    { links.map(link => (
                        <Link key={link.label} href={link.href} className={`${ pathname === link.href ? styles.link_active : '' }`}>
                            { link.label }
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    )
}