import React, { useState } from 'react'
import { formatDate } from '@fullcalendar/core'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction';
import './calender.css'
import { Paper, Stack } from '@mui/material'
import Header from '../../Components/Header'

function renderEventContent(eventInfo) {
    return (
        <>
            <b>{eventInfo.timeText}</b>
            <i>{eventInfo.event.title}</i>
        </>
    )
}
function SidebarEvent({ event }) {
    return (
        <li key={event.id}>
            <b>{formatDate(event.start, { year: 'numeric', month: 'short', day: 'numeric' })}</b>
            <i>{event.title}</i>
        </li>
    )
}

const Calender = () => {
    const [weekendsVisible, setWeekendsVisible] = useState(true)
    const [currentEvents, setCurrentEvents] = useState([])

    function handleWeekendsToggle() {
        setWeekendsVisible(!weekendsVisible)
    }

    let eventGuid = 0;
    function createEventId() {
        return String(eventGuid++);
    }
    function handleDateSelect(selectInfo) {
        let title = prompt('Please enter a new title for your event')
        let calendarApi = selectInfo.view.calendar
        //console.log(calendarApi);

        calendarApi.unselect() // clear date selection

        if (title) {
            calendarApi.addEvent({
                id: createEventId(),
                title,
                start: selectInfo.startStr,
                end: selectInfo.endStr,
                allDay: selectInfo.allDay
            })
        }
    }
    function handleEventClick(clickInfo) {
        if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
            clickInfo.event.remove()
        }
    }
    function handleEvents(events) {
        setCurrentEvents(events)
    }

    return (
        <>
            <Header title={"Calendar"} subtitle={"This Calender Help you To Remember you tasks"}
                conBtn={undefined} />

            <Stack direction={"row"} flexWrap={"wrap"} justifyContent={"center"}>

                <div className='demo-app-sidebar'>
                    <div className='demo-app-sidebar-section'>
                        <h2 style={{ textAlign: "center" }}>All Events ({currentEvents.length})</h2>
                        <ul>
                            {currentEvents.map((event) => (
                                <SidebarEvent key={event.id} event={event} />
                            ))}
                        </ul>
                    </div>
                </div>

                <div className='demo-app-main'>
                    <FullCalendar
                        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                        headerToolbar={{
                            left: 'prev,next today',
                            center: 'title',
                            right: 'dayGridMonth,timeGridWeek,timeGridDay'
                        }}
                        initialView='dayGridMonth'
                        editable={true}
                        selectable={true}
                        selectMirror={true}
                        dayMaxEvents={true}
                        weekends={weekendsVisible}
                        //initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
                        select={handleDateSelect}
                        eventContent={renderEventContent} // custom render function
                        eventClick={handleEventClick}
                        eventsSet={handleEvents} // called after events are initialized/added/changed/removed
                    /* you can update a remote database when these fire:
                    eventAdd={function(){}}
                    eventChange={function(){}}
                    eventRemove={function(){}}
                    */
                    />
                </div>
            </Stack>
        </>
    )
}

export default Calender;