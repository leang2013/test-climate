const data = require('./src/config/data');
const List = require('./src/utils/list');
const { sortByDate } = require('./src/utils/commons');

const plantations = List.getEvents(data, 2019);
const plantationsByDate = sortByDate(plantations);
const growers = List.getGrowers(data);

console.log('-------------- Plantations 2019 -------------');

console.log(plantationsByDate);

console.log('-------------- Growers -------------');

console.log(growers);
