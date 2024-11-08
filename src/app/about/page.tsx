import Image from "next/image"
import logo from "@/public/picc.jpg"
import styles from "../styles/about.module.css"

export default function About(){
  return(
    <section className={styles.section}>
    
      <div className={styles.div}>
        <h1 className={styles.h1}>About</h1>
        <h2 className={styles.h2}>Get to know me! </h2>
        <p className={styles.p}>I am a passionate front-end developer with a strong background in web development.</p>
        <p className={styles.p2}>My journey began in February 2024, and since then, I have had the privilege to work on a diverse range of projects, allowing me to refine my skills and approach to problem-solving</p>
        <p className={styles.p2}> My goal is to continuously improve my coding techniques and deliver high-quality projects that enhance user experience.</p>
        </div>
        <div className={styles.div1}>
        <Image className={styles.img} src={logo} alt="profile pic"/>
    </div>
    </section>
  )
}
   