
import Link from "next/link"
import Image from "next/image"
import logo from "@/public/logo.jpeg"
import styles from "../styles/navbar.module.css"

export default function Navbar(){


    return(
    
        <header className={styles.head}>
            <div className={styles.div1}>
                <Image className={styles.img} src={logo} alt="logo"/>
            </div>
       
                <div className={styles.div2}>
                <Link  className={styles.li} href="/">Home</Link>
                <Link className={styles.li} href="/about">About</Link>
                <Link className={styles.li} href="/projects">Projects</Link>
                </div>
         
    
          

  
        </header>
    )
  }