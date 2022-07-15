const moment = require("moment");

const formatDate = (date) => {
  return moment(date).format("DD/MM/YYYY - HH:mm");
};

const isEqualTo = (data, equalToString) => {
  return data === equalToString;
};

module.exports = {
  isEqualTo,
  formatDate,
};
