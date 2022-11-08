import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>{`Tate's Portfolio`}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* useRef + scrolling for one page scrolling to different pages */}

      <div className={styles.grid}>
        <div className={styles.pfp}>
          <Image
                className={styles.pfpimg}
                  src='/pfp2.jpeg'
                  alt='Tate Bonham'
                  width={400}
                  height={500}
              />
        </div>
        <div className={styles.headertext}>
          <div>
            <h1>Tate Bonham</h1>
          </div>
          <p>Hey I'm Tate, a Full Stack Software Engineer from Arizona.</p>
          <p> Former: Manager, IT Specialist, and Data Entry</p>
          <p>Most recent hobbies are embroidery, woodworking and D&D </p>
          <p>but they change every few months so I'm always learning something new!</p>
          <div>
            <p><a href='/resume.pdf' className={styles.link}  >Check out my resume here!</a></p>
          </div>
        </div>
        <div className={styles.info}>
          <p>Phone: 480-452-5737</p>
          <p>Email: tatebonham@gmail.com</p>
          <p>Github: <a className={styles.link} href='https://github.com/tatebonham'  >github.com/tatebonham</a></p>
          <p>LinkedIn: <a className={styles.link} href='https://www.linkedin.com/in/tate-bonham/'  >in/tatebonham</a></p>
          <p>Slack: @tatebonham</p>
          
          </div>
        <div className={styles.skilltext}><h2 className={styles.skillh2}>Skills</h2></div>
      <div className={styles.skills}><h4>HTML | CSS | Javascript | React | Express | Node | Git | MongoDB | SQL | SASS/SCSS | Axios </h4></div>
        <div className={styles.exptext}><h2 className={styles.exph2}>Past Projects</h2></div>
        <div className={styles.ddimg}>
          <Image
              src='/gamescreen.JPG'
              alt='Dungeon Diver'
              width={500}
              height={250}
          />
        </div>
        <div className={styles.ddtext}>
          <h2>Dungeon Diver</h2>
          <p><a href='https://tatebonham.github.io/Dungeon-Diver/'  className={styles.link} >Github</a> | <a href='https://tatebonham.github.io/Dungeon-Diver/'  className={styles.link} >Live</a></p>
          <ul>
            <li>Browser game where you fight waves of mobs to save someone from the dungeon.</li>
            <li>Javascript, HTML, CSS and DOM Manipulation</li>
            <li>The project primarily utilizes HTML Canvas through JS, the player model and enemy models are animated frame by frame subject to the browser's speed.</li>
          </ul>
        </div>
        <div className={styles.dndrusimg}>
          <Image
              src='/dndrus.JPG'
              alt='logo'
              width={550}
              height={300}
          />
        </div>
        <div className={styles.dndrustext}>
        <h2>DnDs"R"Us</h2>
        <p><a href='https://github.com/tatebonham/DnDs-R-Us'  className={styles.link} >Github</a></p>
          <ul>
            <li>A Dungeons and Dragons campaign tracker for players and DMs.</li>
            <li>MERN (Mongoose, Express, React, Node.js), Axios, HTML, CSS, SASS/SCSS, Crypto-js, Bcrypt</li>
            <li>User authentication and hashing implemented for unique users to keep track of their campaign information.</li>
          </ul>
        </div>
        <div className={styles.jdimg}>
          <Image
              src='/jdimg.JPG'
              alt='logo'
              width={500}
              height={250}
          />
        </div>
        <div className={styles.jdtext}>
        <h2>Judgement Day</h2>
        <p><a href='https://judgement-day-tatebonham.koyeb.app/'  className={styles.link} >Github</a> | <a href='https://judgement-day-tatebonham.koyeb.app/'   className={styles.link}>Live</a></p>
          <ul>
            <li>DnD forum for players to discuss their new character ideas and get feedback or just have a general discussion.</li>
            <li>JS, Bootstrap framework, Sequelize, Express, Node.js, Crypto-js, Bcrypt, Axios</li>
            <li>User authentication and hashing implemented for unique users to interact with the site and posts.</li>
          </ul>
        </div>
        <div className={styles.gdimg}>
          <Image
              src='/goaldigger.JPG'
              alt='logo'
              width={500}
              height={300}
          />
        </div>
        <div className={styles.gdtext}>
          <h2>Goal Digger</h2>
          <p><a href='https://github.com/tatebonham/goal-digger'  className={styles.link} >Github</a> | <a href='https://helpful-dusk-923e50.netlify.app/' className={styles.link}>Live</a></p>
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
