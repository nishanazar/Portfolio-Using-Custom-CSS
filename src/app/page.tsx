import Button from "./components/Button"
import Image from "next/image"
import logo from "@/public/picc.jpg"
import styles from "./styles/home.module.css"

export default function Home(){
  return(
    <section className={styles.section}>
      <div>
        <Image className={styles.img} src={logo} alt="profile pic"/>
      </div>
      <div className={styles.div3}>
        <h1 className={styles.h1}>front-end developer</h1>
        <h2 className= {styles.h2}>Hi, I&apos;m <span style={{color: 'red'}}>Nisha Nazar</span></h2>
        <p className={styles.p}>I am a passionate Front-End Developer with expertise in creating visually appealing, responsive, and user-friendly web applications using HTML, CSS, and JavaScript. I strive to build seamless user experiences and continuously learn new technologies to improve my skills.</p>
       <Button/>
        
      </div>
    </section>
  )
}