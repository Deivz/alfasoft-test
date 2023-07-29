import styles from './MenuButton.module.css';


export default function MenuButton({ active, event }) {
  return (
    <div className={styles.buttonContainer}>
      <div className={active ? `${styles.change}` : ``} onClick={event}>
        <div className={styles.bar1}></div>
        <div className={styles.bar2}></div>
        <div className= {styles.bar3}></div>
      </div>
    </div>
  )
}