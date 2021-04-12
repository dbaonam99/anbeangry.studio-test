import styles from './SideBarItem.module.scss'

export default function SideBarItem(props) {
  const { item } = props
   
  return (
    <div className={styles.sidebarItem}>
      <p>{item.name}</p>
      <div className={styles.sidebarSubItems}>
        {item.sub.length > 0 && item.sub.map ((item, index) => {
          return (
            <p key={index} className={styles.sidebarSubItem}>{item.name}</p>
          )
        })}
      </div>
    </div>
  )
}