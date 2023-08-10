import moment from 'moment-timezone';

export const calendarSettingsMock = {
  schedulingInterval: 15,
  hoursOfOperation: [
    {
      startDateTime: `${moment().format('YYYY-MM-DD')}T14:30:00+00:00`,
      endDateTime: `${moment().format('YYYY-MM-DD')}T05:30:00+00:00`,
    },
  ],
};

export const resources = [
  {
    id: '1',
    title: 'John C',
    businessHours: [
      {
        endTime: '18:00:00',
        startTime: '9:00:00',
        daysOfWeek: [1, 2, 3, 4, 5],
      },
    ],
  },
  {
    id: '2',
    title: 'Eddie R',
    businessHours: [
      {
        endTime: '16:00:00',
        startTime: '10:00:00',
        daysOfWeek: [4],
      },
      {
        endTime: '',
        startTime: '',
        daysOfWeek: [],
      },
    ],
  },
  {
    id: '3',
    title: 'Jay W',
    businessHours: [
      {
        endTime: '16:00:00',
        startTime: '8:00:00',
        daysOfWeek: [1, 2, 3, 4, 5],
      },
    ],
  },
  {
    id: '4',
    title: 'Bill G',
    businessHours: [
      {
        endTime: '18:00:00',
        startTime: '9:00:00',
        daysOfWeek: [1, 2, 3, 4, 5],
      },
    ],
  },
  {
    id: '5',
    title: 'Amanda G',
  },
  {
    id: '6',
    title: 'Reggier M',
  },
  {
    id: '7',
    title: 'Reggier M',
  },
  {
    id: '8',
    title: 'Reggier M',
  },
  {
    id: '9',
    title: 'Reggier M',
  },
  {
    id: '10',
    title: 'Reggier M',
  },
];

export const events = [
  {
    id: '1',
    title: '90 Minute Massage',
    end: moment.utc().add('90', 'minutes').toISOString(),
    start: moment.utc().toISOString(),
    resourceId: '1',
    editable: true,
    groupId: 'zzTop',
    backgroundColor: '#ff0000',
    borderColor: '#ff0000',
    durationEditable: true,
    resourceEditable: true,
    startEditable: true,
  },
  {
    id: '2',
    title: 'Haircut',
    end: moment.utc().hour(23).minute(0).add('10', 'minutes').toISOString(),
    start: moment.utc().hour(23).minute(0).toISOString(),
    resourceId: '3',
    editable: true,
    durationEditable: true,
    resourceEditable: true,
    startEditable: true,
  },
  {
    id: '3',
    title: 'Pedicure',
    end: moment.utc().add('60', 'minutes').toISOString(),
    start: moment.utc().toISOString(),
    resourceId: '3',
    editable: true,
    groupId: 'zzTop',
    backgroundColor: '#ff0000',
    borderColor: '#ff0000',
    durationEditable: true,
    resourceEditable: true,
    startEditable: true,
  },
  {
    id: '4',
    title: 'Bread Trim',
    end: moment.utc().hour(23).minute(0).add('15', 'minutes').toISOString(),
    start: moment.utc().hour(23).minute(0).toISOString(),
    resourceId: '1',
    editable: true,
    backgroundColor: 'teal',
    borderColor: 'teal',
    constraint: 'sample1',
    durationEditable: true,
    resourceEditable: true,
    startEditable: true,
  },
  {
    id: '5',
    title: 'Shampoo',
    end: moment.utc().hour(23).minute(0).add('10', 'minutes').toISOString(),
    start: moment.utc().hour(23).minute(0).toISOString(),
    resourceId: '4',
    editable: true,
    backgroundColor: 'orange',
    borderColor: 'orange',
    textColor: '#000',
    durationEditable: true,
    resourceEditable: true,
    startEditable: true,
  },
];

export const eventConstraints = [
  {
    id: 'sample1',
    groupId: 'sample1',
    start: `${moment().format('YYYY-MM-DD')}T09:00:00-0700`,
    end: `${moment().format('YYYY-MM-DD')}T18:00:00-0700`,
    resourceId: '1',
    display: 'background',
  },
  {
    id: 'sample2',
    groupId: 'sample2',
    start: `${moment().format('YYYY-MM-DD')}T08:00:00-0700`,
    end: `${moment().format('YYYY-MM-DD')}T17:00:00-0700`,
    resourceId: '3',
    display: 'background',
  },
];
