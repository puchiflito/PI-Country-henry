const getAllCountries = require("./Country/getCountry.controller");
const getCountryId = require("./Country/getCountryId.controllers");
const getAllActivities = require("./Activity/getAllActivity.controllers");
const postAcitities = require("./Activity/postActivity.controllers");

module.exports = {
  getAllCountries,
  getCountryId,
  getAllActivities,
  postAcitities,
};
