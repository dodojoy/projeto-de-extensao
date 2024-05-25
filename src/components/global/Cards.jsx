import styles from "@/styles/Cards.module.css"

export default function Cards ({image, alternative, carrer}){
    return (
        <div className={styles.container} >
            <img className={styles.logos} src={image} alt={alternative} />
            <p className={styles.carrerstitle}>{carrer}</p>
        </div>
    )
}