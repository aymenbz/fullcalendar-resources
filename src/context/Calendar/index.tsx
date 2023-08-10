import {
  createContext,
  ReactElement,
  ReactNode,
  useContext,
  useReducer,
} from 'react';
import moment, { Moment } from 'moment';

type TCalendarProvider = {
  children: ReactNode;
};

type TStateType = {
  error: string;
  isLoading: boolean;
  events: any[];
  resources: any[];
  selectedDate: Moment;
};

type TActions =
  | { type: 'SET_ERROR'; payload: string }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_EVENT'; payload: any }
  | { type: 'SET_EVENTS'; payload: any[] }
  | { type: 'SET_RESOURCE'; payload: any }
  | { type: 'SET_RESOURCES'; payload: any[] }
  | { type: 'SET_SELECTED_DATE'; payload: Moment };

type TDispatch = (action: TActions) => void;

const initialState: TStateType = {
  error: '',
  isLoading: true,
  events: [],
  resources: [],
  selectedDate: moment().clone().startOf('day'),
};

const CalendarStateContext = createContext<{
  calendarState: TStateType;
  calendarDispatch: TDispatch;
}>({
  calendarState: initialState,
  calendarDispatch: () => null,
});

const calendarReducer = (state: TStateType, action: TActions): TStateType => {
  switch (action.type) {
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
      };
    case 'SET_EVENTS':
      return {
        ...state,
        events: action.payload,
      };
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.payload,
      };
    case 'SET_RESOURCES':
      return {
        ...state,
        resources: action.payload,
      };
    case 'SET_SELECTED_DATE':
      return {
        ...state,
        selectedDate: action.payload.startOf('day'),
      };
    default:
      return state;
  }
};

const CalendarProvider = ({ children }: TCalendarProvider): ReactElement => {
  const [calendarState, calendarDispatch] = useReducer(
    calendarReducer,
    initialState,
  );

  return (
    <CalendarStateContext.Provider value={{ calendarState, calendarDispatch }}>
      {children}
    </CalendarStateContext.Provider>
  );
};

const useCalendar = (): {
  calendarState: TStateType;
  calendarDispatch: TDispatch;
} => {
  const context = useContext(CalendarStateContext);

  if (context === undefined) {
    throw new Error('useCalendar must be used within a ServiceProvider');
  }

  return context;
};

export { CalendarProvider, useCalendar };
