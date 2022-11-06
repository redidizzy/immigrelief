import EventCard from '../components/EventCard'

const Events = () => {
  return (
    <div>
      <EventCard
        title="2020 National Championship"
        month="jan"
        day="13"
        time="7 pm"
        image="https://www.si.com/.image/t_share/MTY4MTkyMjczODM4OTc0ODQ5/cfp-trophy-deitschjpg.jpg"
      >
        <p className="leading-normal">
          The College Football Playoff (CFP) determines the national champion of the top division of college football.
          The format fits within the academic calendar and preserves the sport’s unique and compelling regular season.
        </p>
        <div className="flex flex-row items-center mt-4 text-gray-700">
          <div className="w-1/2">Mercedes-Benz Superdome</div>
          <div className="w-1/2 flex justify-end">
            <img src="https://collegefootballplayoff.com/images/section_logo.png" alt="" className="w-8" />
          </div>
        </div>
      </EventCard>
      <EventCard
        title="Dream theater concert"
        month="mar"
        day="24"
        time="2 pm"
        image="https://images4.alphacoders.com/195/195474.jpg"
      >
        <p className="leading-normal">
          Some very interesting concert about a very interesting band called dream theater, they recently released a new
          album called "A view from the top of the world" and they're having a european tour. Don't miss it !
        </p>
        <div className="flex flex-row items-center mt-4 text-gray-700">
          <div className="w-1/2">Rome, Italy</div>
          <div className="w-1/2 flex justify-end">
            <img src="https://collegefootballplayoff.com/images/section_logo.png" alt="" className="w-8" />
          </div>
        </div>
      </EventCard>
    </div>
  )
}

export default Events
