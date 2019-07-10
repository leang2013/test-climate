const Event = require('./../entities/Event');
const Grower = require('./../entities/Grower');
const { getYear, formattedDate } = require('./commons');

const List = {
  getEvents: (data, year) => {
    const result = [];
    if (data) {
      const { growers } = data;
      Object.keys(growers).forEach((keyGrower) => {
        const { farms } = growers[keyGrower];
        Object.keys(farms).forEach((keyFarm) => {
          const { events } = farms[keyFarm];
          events.forEach((growerEvent) => {
            if (getYear(growerEvent[0]) === year) {
              const event = new Event(growers[keyGrower].name,
                farms[keyFarm].name,
                formattedDate(growerEvent[0]),
                growerEvent[1]);
              result.push(event);
            }
          });
        });
      });
    }
    return result;
  },
  getGrowers: (data) => {
    const result = [];
    if (data) {
      const { growers } = data;
      Object.keys(growers).forEach((keyGrower) => {
        const grower = new Grower(growers[keyGrower].name,
          growers[keyGrower].farms.length);
        result.push(grower);
      });
    }
    return result;
  },
};

module.exports = List;
