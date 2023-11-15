/** @format */

import SectionHeader from "../SectionHeader"
import EventsBox from "./EventsBox"

const getEvents = async () => {
  const res = await fetch("http://localhost:4000/events")
  return res.json()
}

const Events = async () => {
  const events = await getEvents()
  return (
    <section className='section' id='tours'>
      <div className='container mx-auto'>
        <SectionHeader pretitle='World Tour' title='Upcoming Events' />
        <EventsBox events={events} />
      </div>
    </section>
  )
}

export default Events
