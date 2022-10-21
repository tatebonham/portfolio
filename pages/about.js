import styles from '../styles/About.module.css'
import Image from 'next/image'

export default function About(){
    return(
        <div>
            <h1>About me</h1>

            <p className={styles.extraGreen} >Hi I am Tate, a junior software engineer and professional googler</p>

            <Image
                src='/chop.jpg'
                alt='logo'
                width={500}
                height={500}
            />
            <Image 
                src='https://placekitten.com/400/500'
                alt='cat'
                width={400}
                height={500}
            />
        </div>
    )
}