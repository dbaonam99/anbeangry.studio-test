import styles from './App.module.scss' 
import SideBar from './components/ShareComponents/SideBar';
import Header from './components/ShareComponents/Header';
import Event from './pages/event/Event'; 

function App() {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <Header/>
      </div>
      <div className={styles.body}>
        <div className={styles.left}>
          <SideBar/>
        </div>
        <div className={styles.right}> 
          <Event/>
        </div>
      </div>
    </div>
  );
}

export default App;
