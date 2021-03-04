import React, { useState } from 'react';

const TimelineItem = ({ year, events, color, index }) => {
  const [showEvents, setShowEvents] = useState(false);

  const direction = index % 2 === 0 ? '' : 'right';

  const firstIcon = events[0].icon ? events[0].icon : 'far fa-address-book';

  const handleShowEvent = () => {
    setShowEvents((prev) => !prev);
  };

  const eventsInfo = events.map((event, index) => {
    const date = new Date(event.date);
    const newDate = new Intl.DateTimeFormat('pl').format(date);

    return (
      <div className={`timeline-item--eventsInfo ${direction}`} key={index}>
        <div className={`timeline-item--content ${direction}`}>
          <div className={`timeline-item--event`}>
            <h4>{event.title}</h4>
            <time>{newDate}</time>
            <p>{event.description}</p>
          </div>
          <div
            style={{ backgroundColor: color }}
            className={`timeline-item--shortLine ${direction}`}
          ></div>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className={`timeline-item ${direction}`}>
        <div className={`timeline-item__content ${direction}`}>
          <div
            style={{ backgroundColor: color }}
            className="timeline-item__icon"
            onClick={handleShowEvent}
          >
            <i className={firstIcon}></i>
          </div>
          <div
            style={{ backgroundColor: color }}
            className="timeline-item__shortLine"
          >
            <div className="timeline-item__shortLine__circle"></div>
          </div>
          <time style={{ color: color }} className="timeline-item__time">
            {year}
          </time>
          {events.length > 1 ? (
            <div className="timeline-item__info">{events.length}</div>
          ) : null}
        </div>
      </div>

      {events.length > 0 && showEvents && eventsInfo}
    </>
  );
};

export default TimelineItem;
