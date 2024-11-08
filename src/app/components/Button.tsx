import Link from "next/link"
import styles from "../styles/botton.module.css"

export default function Button(){
    return(
        <div>
            <button className={styles.btn}><Link className={styles.link} href="/projects">Projects</Link> </button>
        </div>
    )
} 