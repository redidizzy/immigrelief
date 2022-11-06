import EventCard from '../components/EventCard'
import { DUMMY_EVENTS } from '../dummy_events'

const Events = () => {
  return (
    <div>
      {DUMMY_EVENTS.map((event) => (
        <EventCard title={event.title} month={event.month} day={event.day} time={event.time} image={event.image}>
          {event.content}
        </EventCard>
      ))}
    </div>
  )
}

export default Events
