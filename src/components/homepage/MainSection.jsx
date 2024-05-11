import styles from "@/styles/MainSection.module.css"
import StartButton from "../button/StartButton"

export default function MainSection(){
  return(
    <div className={styles.MainSection}>
      <h1>guia de carreira</h1>
      <h5>Conheça as principais carreiras para atuar na área de tecnologia</h5>
      <StartButton/>
    </div>

  )

}