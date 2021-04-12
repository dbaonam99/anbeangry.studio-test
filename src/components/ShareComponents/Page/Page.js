import styles from './Page.module.scss'

export default function Page(props) {
  return (
    <div className={styles.page}>  
        {props.children} 
  </div>
  )
}