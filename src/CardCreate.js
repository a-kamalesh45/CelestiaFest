
const Card = ({events}) => {
    return (
      <section className='schedule'>
          <div className="card-cont">
              {events.map((event) => {
                  return (
                    <div className="card">
                      <h3>{event.name}</h3>
                      <h2>{event.day}</h2>
                      <p>{event.time}</p>
                      <p>{event.venue}</p>
                    </div>
                  )
              })}
          </div>
      </section>
    )
  }
  
  export default Card
  