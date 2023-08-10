import { createRef, ReactElement } from 'react';
import FullCalendar, {
  NowIndicatorContentArg,
  DatesSetArg,
} from '@fullcalendar/react';
import interactionPlugin from '@fullcalendar/interaction';
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid';
import scrollGridPlugin from '@fullcalendar/scrollgrid';
import momentTimezonePlugin from '@fullcalendar/moment-timezone';
import moment from 'moment-timezone';

import styles from './Calendar.module.scss';
import { useCalendar } from '../../context/Calendar';
import { CalendarHeader } from '../CalendarHeader';

export const Calendar = ({
  calendarSettings,
  fetchData,
}: any): ReactElement => {
  const calendarRef = createRef<FullCalendar>();
  const { calendarState } = useCalendar();

  return (
    <div className={`calendar ${styles.container}`}>
      <CalendarHeader calendarRef={calendarRef} />
      <FullCalendar
        ref={calendarRef}
        allDaySlot={false}
        datesSet={(date: DatesSetArg): void => {
          fetchData(moment(date.start));
        }}
        dayMinWidth={240}
        events={calendarState.events}
        expandRows={true}
        headerToolbar={false}
        height="100%"
        initialView="resourceTimeGridDay"
        nowIndicator={true}
        plugins={[
          interactionPlugin,
          momentTimezonePlugin,
          scrollGridPlugin,
          resourceTimeGridPlugin,
        ]}
        resources={calendarState.resources ? calendarState.resources : []}
        scrollTime={moment().subtract('70', 'minutes').format('HH:mm:ss')}
        selectable={true}
        selectConstraint="businessHours"
        slotDuration={{
          minute: 15,
        }}
        slotEventOverlap={false}
        slotLabelInterval={{
          hour: 1,
        }}
      />
    </div>
  );
};
