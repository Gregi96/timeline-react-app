import { data } from '../../data/timelineData.json';
import TimelineItem from './TimelineItem';
import { groupBy } from 'lodash';

const Timeline = () => {
  const colors = ['#845ec2', '#ffc75f', '#f9f871', '#ff5e78'];
  let numberOfColor = 0;

  const dataByYear = groupBy(data, (event) =>
    new Date(event.date).getFullYear()
  );

  const timelineItems = Object.entries(dataByYear).map(
    ([year, events], index) => {
      if (numberOfColor === colors.length) numberOfColor = 0;

      return (
        <TimelineItem
          year={year}
          events={events}
          color={colors[numberOfColor++]}
          index={index}
          key={index}
        />
      );
    }
  );

  return (
    <div className="timeline-container">
      <h1 className="timeline__title">
        Timeline <span className="timeline__dots">...</span>
      </h1>
      {timelineItems}
    </div>
  );
};

export default Timeline;
