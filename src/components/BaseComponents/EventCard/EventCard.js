import styles from './EventCard.module.scss'

export default function EventCard(props) {
  const { item } = props
   
  return (
    <div className={styles.eventItem}>
      <div className={styles.eventItemImg}>
        <img src={item.image} alt=""></img>
      </div>
      <p className={styles.eventItemTitle}>{item.title}</p>
      <p className={styles.eventItemTime}>{item.time}</p>
    </div>
  )
}