const date = new Date();

const day = date.getDate().toString().padStart(2, '0'); // Get the day and pad with leading zero if necessary
const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Get the month (add 1 as it's zero-based) and pad with leading zero if necessary
const year = date.getFullYear(); // Get the full year

exports.currentDate = `${day}/${month}/${year}`;