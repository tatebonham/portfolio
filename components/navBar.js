import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function NavBar(){
    return (
        <nav className={styles.bar}>
            <div className={styles.navlink}><Link href='/'>Home</Link></div>
            <div className={styles.navlink}><Link href='/about'>About Me</Link></div>
            <div className={styles.navlink}><Link href='/projects'>My Work</Link></div>
        </nav>
    )
}