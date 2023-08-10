import { ReactElement, useEffect, useState } from 'react';

import './styles.css';
import { calendarSettingsMock, events, resources } from './data';
import { useCalendar } from './context/Calendar';
import { Calendar } from './components/Calendar';
import moment, { Moment } from 'moment';

export default function App(): ReactElement {
  const { calendarState, calendarDispatch } = useCalendar();

  const fetchData = async (date: Moment): Promise<void> => {
    console.log('Fetching Data......');

    calendarDispatch({ type: 'SET_LOADING', payload: true });

    const resourceResponse = resources;
    const eventsResponse = events;

    calendarDispatch({ type: 'SET_RESOURCES', payload: resourceResponse });
    calendarDispatch({ type: 'SET_EVENTS', payload: eventsResponse });

    calendarDispatch({ type: 'SET_LOADING', payload: false });
  };

  useEffect(() => {
    fetchData(moment().clone());
  }, []);

  return (
    <Calendar calendarSettings={calendarSettingsMock} fetchData={fetchData} />
  );
}
