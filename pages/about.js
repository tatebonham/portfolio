import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function About(){
    return(
        <div className={styles.container}>
        <div className={styles.grid}>
        <div className={styles.profilecard}>
            <div className={styles.pfp}>
                <Image
                    className={styles.pfpimg}
                    src='/portrait.jpg'
                    alt='Tate Bonham'
                    width={400}
                    height={500}
                />
            </div>
            <div className={styles.info}>
                <p>Phone: 480-452-5737</p>
                <p>Email: tatebonham@gmail.com</p>
                <p>Slack: @tatebonham</p>
                <div> 
                <a className={styles.icon} href='https://github.com/tatebonham' >
                  <Image
                        className={styles.iconimg}
                        src='/github.png'
                        alt='Tate Bonham'
                        width={100}
                        height={100}
                      />
                      </a>
                      <a className={styles.icon} href='https://www.linkedin.com/in/tate-bonham/'  ><Image
                        className={styles.iconimg}
                        src='/linkedin.png'
                        alt='Tate Bonham'
                        width={100}
                        height={100}
                      /></a>
                      <a className={styles.icon} href='/Resume-TateBonham.pdf'  ><Image
                        className={styles.iconimg}
                        src='/Resume.png'
                        alt='Tate Bonham'
                        width={100}
                        height={100}
                      /></a></div>
            </div>
        </div>
        <div className={styles.headertext}>
          <div>
            <h1>Tate Bonham</h1>
          </div>
          <p>Hey I'm Tate, a Full Stack Software Engineer from Arizona.</p>
          <p> Former: Manager, Project Lead, IT Specialist, and Data Entry</p>
          <p>My current hobbies are game design, embroidery, woodworking and D&D but they change every few months so I'm always learning something new!</p>
          <div>
            <p><a href='/Resume-TateBonham.pdf' className={styles.navlink}  >Check out my resume here!</a></p>
          </div>
        </div>
        <div className={styles.skilltext}><h2 className={styles.skillh2}>Skills</h2></div>
      <div className={styles.skills}><h4>HTML | CSS | Javascript | React | Express | Node | Git | MongoDB | SQL | SASS/SCSS | Axios </h4></div>
        
      </div>
      </div>
    )
}