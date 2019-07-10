const { expect } = require('chai');
const List = require('../../../utils/list');
const { sortByDate } = require('../../../utils/commons');

const mockedGrower = {
  growers: [
    {
      id: '155',
      name: 'grower1',
      farms: [
        {
          id: '12',
          name: 'farm1',
          events: [['2018-11-15T10:57:21.000-03:00', 'corn']],
        },
        {
          id: '13',
          name: 'farm2',
          events: [['2019-10-15T10:57:21.000-03:00', 'corn']],
        },
        {
          id: '14',
          name: 'farm3',
          events: [['2019-09-15T10:57:21.000-03:00', 'corn'], ['2019-05-15T10:57:21.000-03:00', 'soybeans']],
        },
      ],
    },
  ],
};

const mockedWithoutEvent = {
  growers: [
    {
      id: '155',
      name: 'grower1',
      farms: [
        {
          id: '12',
          name: 'farm1',
          events: [],
        },
        {
          id: '13',
          name: 'farm2',
          events: [],
        },
        {
          id: '14',
          name: 'farm3',
          events: [],
        },
      ],
    },
  ],
};

describe('List', () => {
  describe('getEvents()', () => {
    const listEvents2019 = List.getEvents(mockedGrower, 2019);
    const listEvents2018 = List.getEvents(mockedGrower, 2018);
    const listWihtoutEvents = List.getEvents(mockedWithoutEvent, 2019);
    const listEventsOrderByDate = sortByDate(List.getEvents(mockedGrower, 2019));

    it('Should list events is array type', () => {
      expect(listEvents2019).to.be.an('array');
    });

    it('Should get 3 events in current year', () => {
      expect(listEvents2019).to.have.lengthOf(3);
    });

    it('Should get 1 events in another year', () => {
      expect(listEvents2018).to.have.lengthOf(1);
    });

    it('Should get 0 events', () => {
      expect(listWihtoutEvents).to.have.lengthOf(0);
    });

    it('Should the first event include this event', () => {
      const firstEvent = listEventsOrderByDate[0];
      expect(firstEvent).to.deep.include({
        grower: 'grower1',
        farm: 'farm2',
        date: '2019-9-15 10:57:21',
        cropType: 'corn',
      });
    });
  });

  describe('getGrowers()', () => {
    const listGrowers = List.getGrowers(mockedGrower);

    it('Should list growers is array type', () => {
      expect(listGrowers).to.be.an('array');
    });

    it('Should list 1 grower in current year', () => {
      expect(listGrowers).to.have.lengthOf(1);
    });
  });
});
