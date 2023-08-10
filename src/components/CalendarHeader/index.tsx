import { ReactElement, RefObject, useEffect, useMemo, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import moment, { Moment } from 'moment-timezone';
import { Button, Stack } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AdapterMoment from '@mui/lab/AdapterMoment';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import TextField from '@mui/material/TextField';

import styles from './CalendarHeader.module.scss';

export type TCalendarHeader = {
  calendarRef: RefObject<FullCalendar>;
};

export const CalendarHeader = ({
  calendarRef,
}: TCalendarHeader): ReactElement => {
  const [date, setDate] = useState<Moment | null>(
    moment(calendarRef.current?.getApi().getDate()),
  );

  const selectedDate = useMemo(() => {
    return date;
  }, [date]);

  useEffect(() => {
    const calApi = calendarRef.current?.getApi();

    if (calApi) {
      setDate(moment(calApi.getDate()));
    }
  }, [calendarRef]);

  const handleDateChange = (direction: 'prev' | 'today' | 'next'): void => {
    const calApi = calendarRef.current?.getApi();

    if (calApi) {
      if (direction === 'prev') {
        calApi.prev();
      } else if (direction === 'next') {
        calApi.next();
      } else {
        calApi.today();
      }

      setDate(moment(calApi.getDate()));
    }
  };

  const PlusIcon = (): ReactElement => {
    return (
      <svg
        className={styles.plusIcon}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"></path>
      </svg>
    );
  };

  return (
    <header className={styles.calendarHeader}>
      <div>
        <Stack alignItems="center" direction="row" spacing={2}>
          <div>
            <Button
              data-trackid="today-button"
              size="large"
              variant="outlined"
              onClick={(): void => handleDateChange('today')}>
              Today
            </Button>
          </div>
          <Stack alignItems="center" direction="row" spacing={1}>
            <div>
              <Button
                data-trackid="prev-button"
                variant="outlined"
                onClick={(): void => handleDateChange('prev')}>
                <ChevronLeftIcon />
              </Button>
            </div>
            <div>
              <Button
                data-trackid="next-button"
                variant="outlined"
                onClick={(): void => handleDateChange('next')}>
                <ChevronRightIcon />
              </Button>
            </div>
          </Stack>
          <div>
            <LocalizationProvider dateAdapter={AdapterMoment}>
              <DatePicker
                components={{ OpenPickerIcon: ExpandMoreIcon }}
                data-trackid="calendar-date-picker"
                inputFormat="ddd, MMM D, yyyy"
                renderInput={(params): ReactElement => (
                  <TextField {...params} size="small" />
                )}
                value={date}
                onChange={(newValue: Moment | null): void => {
                  setDate(newValue);

                  calendarRef.current?.getApi().gotoDate(newValue?.toDate());
                }}
              />
            </LocalizationProvider>
          </div>
        </Stack>
      </div>
      <div>
        <Stack direction="row" spacing={2}>
          <Button
            data-trackid="new-button"
            size="large"
            startIcon={<PlusIcon />}
            variant="contained">
            Create new
          </Button>
          <Button
            data-trackid="filter-button"
            endIcon={<FilterListIcon />}
            size="large"
            variant="outlined">
            Filter
          </Button>
        </Stack>
      </div>
    </header>
  );
};
