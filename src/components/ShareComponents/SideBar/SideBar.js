import styles from './SideBar.module.scss'
import data from '../../../mockData/data.json'
import SideBarItem from '../../BaseComponents/SideBarItem';

export default function SideBar() {
  const categories = data.categories; 
  
  return (
    <div className={styles.sidebar}>
      <p className={styles.sidebarTitle}>Categories</p>
      { categories.length > 0 && categories.map((item, index) =>  <SideBarItem key={index} item={item}/>)}
    </div>
  )
}