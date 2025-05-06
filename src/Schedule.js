import React from 'react'
import { useState } from 'react'
// import useFetch from './useFetch'
import './Schedule.css'
import cal from './assets/cal.png'

const Schedule = () => {

  const events = [
    {
      name: "Stellar Showdown",
      type: "Technical",
      prize: "₹10,000",
      participants: 80,
      venue: "Auditorium A",
      day: "13 Jan",
      startTime: "10:00",
      endTime: "12:00",
      meridiem: "AM",
      key: 1
    },
    {
      name: "CosmoQuiz",
      type: "Technical",
      prize: "₹5,000",
      participants: 40,
      venue: "Seminar Hall 2",
      day: "13 Jan",
      startTime: "1:00",
      endTime: "2:30",
      meridiem: "PM",
      key: 2
    },
    {
      name: "Celestial Canvas",
      type: "Cultural",
      prize: "₹6,000",
      participants: 25,
      venue: "Art Studio",
      day: "13 Jan",
      startTime: "3:30",
      endTime: "5:00",
      meridiem: "PM",
      key: 3
    },
    {
      name: "Intergalactic Groove",
      type: "Cultural",
      prize: "₹8,000",
      participants: 50,
      venue: "Main Stage",
      day: "13 Jan",
      startTime: "6:00",
      endTime: "9:00",
      meridiem: "PM",
      key: 4
    },
    {
      name: "Rocket Rush",
      type: "Technical",
      prize: "₹12,000",
      participants: 100,
      venue: "Mechanical Workshop Ground",
      day: "14 Jan",
      startTime: "10:00",
      endTime: "1:00",
      meridiem: "AM",
      key: 1 
    },
    {
      name: "Alien Auction",
      type: "Informal",
      prize: "Goodies worth ₹2,000",
      participants: 60,
      venue: "Informal Zone",
      day: "14 Jan",
      startTime: "12:00",
      endTime: "1:00",
      meridiem: "PM",
      key: 2
    },
    {
      name: "Zero-G Fashion",
      type: "Cultural",
      prize: "₹7,000 + goodies",
      participants: 30,
      venue: "Open Air Theater",
      day: "14 Jan",
      startTime: "7:00",
      endTime: "9:00",
      meridiem: "PM",
      key: 3
    },
    {
      name: "Quantum Jam",
      type: "Technical",
      prize: "₹9,000",
      participants: 55,
      venue: "Lab 3",
      day: "15 Jan",
      startTime: "11:00",
      endTime: "12:30",
      meridiem: "AM",
      key: 1
    },
    {
      name: "Astro Hunt",
      type: "Informal",
      prize: "₹3,000 + goodies",
      participants: 120,
      venue: "Campus-wide",
      day: "15 Jan",
      startTime: "2:00",
      endTime: "4:00",
      meridiem: "PM",
      key: 2
    },
    {
      name: "Nebula Nights",
      type: "Cultural",
      prize: "₹15,000",
      participants: 200,
      venue: "Main Stage",
      day: "15 Jan",
      startTime: "8:00",
      endTime: "11:00",
      meridiem: "PM",
      key: 3
    }
  ];

  const days = [
    { title: 'FIRST DAY', date: 'JAN 13, 2026', key: '13 Jan' },
    { title: 'SECOND DAY', date: 'JAN 14, 2026', key: '14 Jan'},
    { title: 'THIRD DAY', date: 'JAN 15, 2026', key: '15 Jan' },
  ];
  
  const [activeIndex, setActiveIndex] = useState(0); 
  const [isClicked, setIsClicked] = useState(null);

  const selectedDayKey = activeIndex !== null ? days[activeIndex].key : 1;
  // const selectedEventIndex = isClicked !== null ? days[isClicked].key : null;
  
  return (
    <section className='schedule'>
      <div className="schedule-box">
      <div className="days">
        <ul>
          {days.map((day, index) => (
            <li
            key={index}
            onClick={() => {
              setActiveIndex(activeIndex === index ? 1 : index);
              setIsClicked(null);
            }}
            className={activeIndex === index ? 'days-click' : ''}
            >
              <h1>{day.title}</h1>
              <p>{day.date}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="card-cont">
        {events
          .filter(event => event.day === selectedDayKey)
          .map((event, index) => (
            <div className={isClicked === index ? 'card2' : 'card'} key={index} onClick={() => setIsClicked(index === isClicked ? null : index)}>
              <div className="cal">
                <img src={cal} alt="cal" />
              </div>
              <div className="event-info">
                <div className="imp-info">
                  <p className="event-time">
                    <span className='stTime'>{event.startTime}</span>
                    <span className='meridiem'>{event.meridiem}</span>
                    <span> - </span>
                    <span className='endTime'>{event.endTime}</span>
                    <span className='meridiem'>{event.meridiem}</span>
                  </p>
                  <h2 className='event-title'>{event.name}</h2>
                </div>
                <div className={isClicked === index ? '' : 'display-none'}>
                  <h3 className='event-venue'>Location: {event.venue}</h3>
                  <h3 className='event-type'>{event.type} Event</h3>
                  <h3 className='event-prize'>Prize: {event.prize}</h3>
                  <h3 className="event-participants">Participants till now: {event.participants}</h3>
                </div>
              </div>
            </div>
        ))}
        </div>
      </div>
    </section>
  );
}

export default Schedule
