import { render } from 'react-dom';

import App from './App';
import { CalendarProvider } from './context/Calendar';

const rootElement = document.getElementById('root');
render(
  <CalendarProvider>
    <App />
  </CalendarProvider>,
  rootElement,
);
