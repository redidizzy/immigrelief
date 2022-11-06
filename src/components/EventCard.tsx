type Props = {
  title: string
  day: string
  month: string
  time: string
  image: string
} & React.PropsWithChildren

const EventCard: React.FunctionComponent<Props> = ({ title, children, day, month, time, image }) => {
  return (
    <div className="flex flex-col w-full bg-white rounded shadow-lg sm:w-3/4 md:w-1/2 lg:w-3/5 mb-10">
      <div
        className="w-full h-64 bg-top bg-cover rounded-t"
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>
      <div className="flex flex-col w-full md:flex-row">
        <div className="flex flex-row justify-around p-4 font-bold leading-none text-gray-800 uppercase bg-gray-400 rounded md:flex-col md:items-center md:justify-center md:w-1/4">
          <div className="md:text-3xl">{month}</div>
          <div className="md:text-6xl">{day}</div>
          <div className="md:text-xl">{time}</div>
        </div>
        <div className="p-4 font-normal text-gray-800 md:w-3/4">
          <h1 className="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-800">{title}</h1>
          {children}
        </div>
      </div>
    </div>
  )
}

export default EventCard
