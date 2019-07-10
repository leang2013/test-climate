const getYear = (timestamp) => {
  const time = new Date(timestamp);

  return time.getFullYear();
};

const formattedDate = (timestamp) => {
  const time = new Date(timestamp);
  const year = time.getFullYear();
  const month = time.getMonth();
  const day = time.getDate();
  const hour = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  return `${year}-${month}-${day}T${hour}:${minutes}:${seconds}`;
};

const compareDateDesc = (dateA, dateB) => {
  const date1 = new Date(dateA);
  const date2 = new Date(dateB);

  return date2 - date1;
};

const sortByDate = list => list.sort((event1, event2) => compareDateDesc(event1.date, event2.date));

module.exports = {
  getYear,
  formattedDate,
  sortByDate,
};
