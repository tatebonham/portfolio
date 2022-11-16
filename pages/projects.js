import styles from '../styles/About.module.css'
import Image from 'next/image'

export default function Projects(){
    return(
        <div className={styles.aboutcontainer}>
            <div className={styles.projectcard}>
                <div >
                    <Image
                        className={styles.images}
                        src='/gamescreen.JPG'
                        alt='Dungeon Diver'
                        width={500}
                        height={300}
                    />
                </div>
                <div className={styles.ddtext}>
                    <h2>Dungeon Diver</h2>
                    <p><a href='https://tatebonham.github.io/Dungeon-Diver/'  className={styles.navlink} >Github</a> | <a href='https://tatebonham.github.io/Dungeon-Diver/'  className={styles.navlink} >Live</a></p>
                    <ul>
                        <li>Browser game where you fight waves of mobs to save someone from the dungeon.</li>
                        <li>Javascript, HTML, CSS and DOM Manipulation</li>
                        <li>The project primarily utilizes HTML Canvas through JS, the player model and enemy models are animated frame by frame subject to the browser's speed.</li>
                    </ul>
                </div>
            </div>
            <div className={styles.projectcard}>
            <div >
            <Image
                className={styles.images}
                src='/dndrus.JPG'
                alt='logo'
                width={550}
                height={325}
            />
            </div>
            <div className={styles.dndrustext}>
            <h2>DnDs"R"Us</h2>
            <p><a href='https://github.com/tatebonham/DnDs-R-Us'  className={styles.navlink} >Github</a> | Coming Soon</p>
            <ul>
                <li>A Dungeons and Dragons campaign tracker for players and DMs.</li>
                <li>MERN (Mongoose, Express, React, Node.js), Axios, HTML, CSS, SASS/SCSS, Crypto-js, Bcrypt</li>
                <li>User authentication and hashing implemented for unique users to keep track of their campaign information.</li>
            </ul>
            </div>
            </div>
            <div className={styles.projectcard}>
            <div >
            <Image
                className={styles.images}
                src='/jdimg.JPG'
                alt='logo'
                width={500}
                height={300}
            />
            </div>
            <div className={styles.jdtext}>
            <h2>Judgement Day</h2>
            <p><a href='https://judgement-day-tatebonham.koyeb.app/'  className={styles.navlink} >Github</a> | <a href='https://judgement-day-tatebonham.koyeb.app/'   className={styles.navlink}>Live</a></p>
            <ul>
                <li>DnD forum for players to discuss their new character ideas and get feedback or just have a general discussion.</li>
                <li>JS, Bootstrap framework, Sequelize, Express, Node.js, Crypto-js, Bcrypt, Axios</li>
                <li>User authentication and hashing implemented for unique users to interact with the site and posts.</li>
            </ul>
            </div>
            </div>
            <div className={styles.projectcard}>
            <div >
            <Image
                className={styles.images}
                src='/goaldigger.JPG'
                alt='logo'
                width={500}
                height={300}
            />
            </div>
            <div className={styles.gdtext}>
            <h2>Goal Digger</h2>
            <p><a href='https://github.com/tatebonham/goal-digger'  className={styles.navlink} >Github</a> | <a href='https://helpful-dusk-923e50.netlify.app/' className={styles.navlink}>Live</a></p>
            <ul>
                <li>A one stop shop for all your bucket list ideas! Plan your future goals and keep track of those completed. Get inspired by a random bucket list idea or add your own item.</li>
                <li>MERN (Mongoose, Express, React, Node.js), Axios, HTML, CSS, Bootstrap framework, Crypto-js, Bcrypt</li>
                <li>Made calls to the bucket list API( https://api-ninjas.com/api/bucketlist ) to provide the user with ideas.</li>
            </ul>
            </div>
            </div>
        </div>
    )
}