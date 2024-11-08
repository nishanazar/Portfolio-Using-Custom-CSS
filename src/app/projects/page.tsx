
import Link from "next/link"
import Image from "next/image"
import timer from "@/public/timer.jpg"
import html from "@/public/html,css.jpg"
import resume1 from "@/public/resume1.jpg"
import login from "@/public/login page.jpg"
import final from "@/public/final-html.jpg"
import responsive from "@/public/responsiv.jpg"
import figma from "@/public/figma.jpg"
import instaram from "@/public/instagram ui.jpg"
import fashion from "@/public/fashion-website.jpg"
import styles from "../styles/project.module.css"


export default function Projects(){
    return(
      <>
       <div className={styles.div1}>

       <h1 className={styles.h1}>
        Project portfolio highlights
        </h1>
        <p className={styles.p}>
        This section showcases the highlights of my project portfolio, featuring successfully designed projects along with deployment links
        </p>
        <div className={styles.div2}>I have been working on website design for the past two months</div>
         </div>
         <div className={styles.grid}>
      
          {/* 1 pic */}
          <div className={styles.pic1}>
          <Image className={styles.img} src={timer} alt="pic" width={300} height={150}></Image>
          <h3><Link className={styles.h3} href={"https://countdown-timer-app-zeta.vercel.app/"}>Countdown Timer</Link></h3>
          <p className={styles.description}>I created a countdown timer using Next.js and Tailwind CSS.</p>
          </div>

          {/* resume pic */}
          <div className={styles.pic1}>
          <Image className={styles.img} src={resume1} alt="pic" width={250} height={150}></Image>
          <h2><Link className={styles.h3} href={"https://milestone-04-woad.vercel.app/"}>Resume Builder</Link></h2>
          <p className={styles.description}>I created a Resume builder using HTML CSS TypeScript .</p>
          </div>

          {/* 3 pic */}
          <div className={styles.pic1}>
          <Image className={styles.img}  src={login} alt="pic" width={300} height={150}></Image>
          <h2><Link className={styles.h3} href={"https://login-page-design-three.vercel.app/"}>Login page desgin</Link></h2>
          <p className={styles.description}>I created it using HTML and CSS.</p>
          </div>
   

          {/* 4 pic */}
 
          <div className={styles.pic1}>
          <Image className={styles.img} src={final} alt="pic" width={300} height={150}></Image>
          <h2><Link className={styles.h3}href={"https://final-assignment-of-html-and-css.vercel.app/"}>Panacloud website</Link></h2>
          <p className={styles.description}>I created panacloud website using HTML and CSS.</p>
          </div>

         {/* 5 pic */}
         <div className={styles.pic1}>
         <Image className={styles.img} src={responsive} alt="pic" width={300} height={150}></Image>
         <h2><Link className={styles.h3} href={"https://responsive-website-project-using-html-css.vercel.app/"}>Responsive website</Link></h2>
         <p className={styles.description}>A responsive website has been created using HTML and CSS.</p>
         </div>

         {/* 6 pic */}
         <div className={styles.pic1}>
         <Image className={styles.img} src={figma} alt="pic" width={300} height={150}></Image>
         <h2><Link className={styles.h3} href={"https://assignment02-next-js-two.vercel.app/"}>Figma Desgin</Link></h2>
         <p className={styles.description}>A pixel-perfect design has been created using Figma.</p>
         </div>
         {/* 7 pic */}
    
        <div className={styles.pic1}>
        <Image className={styles.img} src={instaram} alt="pic" width={300} height={150}></Image>
        <h2><Link className={styles.h3} href={"https://assignment02-next-js-two.vercel.app/"}>Instagram</Link></h2>
        <p className={styles.description}>Instagram UI using HTML and CSS. </p>
        </div>
        {/* 8 pic */}
        <div className={styles.pic1}>
        <Image className={styles.img} src={fashion} alt="pic" width={300} height={150}></Image>
        <h2><Link className={styles.h3} href={"https://simple-fashion-website.vercel.app/"}>Fashion Website</Link></h2>
        <p className={styles.description}>I created a website using Next.js and Tailwind CSS.. </p>
        </div>

        {/* 9 pic */}
        <div className={styles.pic1}>
        <Image className={styles.img} src={html} alt="pic" width={300} height={150}></Image>
        <h2><Link className={styles.h3} href={"https://website-html-and-css-rho.vercel.app/"}>Simple Website</Link></h2>
        <p className={styles.description}>I created it using HTML and CSS.</p>
       </div>
       </div>

   </>
    )
  }
  