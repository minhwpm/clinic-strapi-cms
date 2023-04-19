const { global, pages } = require("./en");
const { globalFR, pagesFR } = require("./fr");
const { bookingFormSubmissions } = require("./booking-form-submissions.json");

module.exports = {
  globals: [global, globalFR],
  pages: [...pages, ...pagesFR],
  bookingFormSubmissions,
};
