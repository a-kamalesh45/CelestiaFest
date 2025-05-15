"use client";
import React, { useState, useEffect } from 'react';
import './Schedule.css';
import Navbar from '../Navbar/Navbar';
import dynamic from 'next/dynamic';

// Dynamically import StarCanvas to avoid SSR hydration mismatch
const StarCanvas = dynamic(() => import('../StarCanvas'), { ssr: false });

const Schedule = () => {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

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
            img: "/assets/pt1.png"
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
            img: "/assets/pt3.png"
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
            img: "/assets/pt2.png"
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
            img: "/assets/pt4.png"
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
            img: "/assets/pt3.png"
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
            img: "/assets/pt4.png"
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
            img: "/assets/pt2.png"
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
            img: "/assets/pt4.png"
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
            img: "/assets/pt2.png"
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
            img: "/assets/pt1.png"
        }
    ];

    const days = [
        { title: 'FIRST DAY', date: 'JAN 13, 2026', key: '13 Jan' },
        { title: 'SECOND DAY', date: 'JAN 14, 2026', key: '14 Jan' },
        { title: 'THIRD DAY', date: 'JAN 15, 2026', key: '15 Jan' },
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const [clickedEventName, setClickedEventName] = useState(null);

    const selectedDayKey = days[activeIndex].key;

    return (
        <div>
            {hasMounted && (
                <>
                    <StarCanvas />
                    <Navbar />
                    <section className='schedule'>
                        <div className="schedule-box">
                            <div className="schedule-days">
                                <ul>
                                    {days.map((day, index) => (
                                        <li
                                            key={index}
                                            onClick={() => {
                                                setActiveIndex(index);
                                                setClickedEventName(null);
                                            }}
                                            className={activeIndex === index ? 'schedule-days-click' : ''}
                                        >
                                            <h1>{day.title}</h1>
                                            <p>{day.date}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="schedule-card-cont">
                                {events
                                    .filter(event => event.day === selectedDayKey)
                                    .map((event) => (
                                        <div
                                            className={clickedEventName === event.name ? 'schedule-card2' : 'schedule-card'}
                                            key={event.name}
                                            onClick={() =>
                                                setClickedEventName(clickedEventName === event.name ? null : event.name)
                                            }
                                        >
                                            <div className="schedule-cal">
                                                <img src={event.img} alt="cal" />
                                            </div>
                                            <div className="schedule-event-info">
                                                <div className="schedule-imp-info">
                                                    <p className="schedule-event-time">
                                                        <span className='schedule-stTime'>{event.startTime}</span>
                                                        <span className='schedule-meridiem'>{event.meridiem}</span>
                                                        <span> - </span>
                                                        <span className='schedule-endTime'>{event.endTime}</span>
                                                        <span className='schedule-meridiem'>{event.meridiem}</span>
                                                    </p>
                                                    <h2 className='schedule-event-title'>{event.name}</h2>
                                                </div>
                                                <div className={clickedEventName === event.name ? '' : 'schedule-display-none'}>
                                                    <h3 className='schedule-event-venue'>Location: {event.venue}</h3>
                                                    <h3 className='schedule-event-type'>{event.type} Event</h3>
                                                    <h3 className='schedule-event-prize'>Prize: {event.prize}</h3>
                                                    <h3 className="schedule-event-participants">Participants till now: {event.participants}</h3>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </section>
                </>
            )}
        </div>
    );
};

export default Schedule;
