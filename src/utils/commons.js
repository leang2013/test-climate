/**
 * Return the year from a date.
 * @param {string} timestamp
 * @returns {number}
 */
const getYear = (timestamp) => {
  const time = new Date(timestamp);

  return time.getFullYear();
};
/**
 * Return a formatted date.
 * @param {string} timestamp
 * @returns {string}
 */
const formattedDate = (timestamp) => {
  const time = new Date(timestamp);
  const year = time.getFullYear();
  const month = time.getMonth();
  const day = time.getDate();
  const hour = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  return `${year}-${month}-${day} ${hour}:${minutes}:${seconds}`;
};
/**
 * Return the result of subtraction between two dates.
 * @param {string} dateA
 * @param {string} dateB
 * @returns {number}
 */
const compareDateDesc = (dateA, dateB) => {
  const date1 = new Date(dateA);
  const date2 = new Date(dateB);

  return date2 - date1;
};
/**
 * Return a sorted list by date.
 * @param {array} list
 * @returns {array}
 */
const sortByDate = list => list.sort((event1, event2) => compareDateDesc(event1.date, event2.date));

module.exports = {
  getYear,
  formattedDate,
  sortByDate,
};
