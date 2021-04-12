import EventCard from "../../components/BaseComponents/EventCard/EventCard";
import Page from "../../components/ShareComponents/Page/Page"
import data from '../../mockData/data.json'
import styles from './Event.module.scss'

export default function Event() {

  const events = data.events; 

  return (
    <Page> 
      <div className={styles.eventList}>
        { events.length > 0 && events.map((item, index) =>  <EventCard key={index} item={item}/>)}
      </div>
    </Page>
  )
}