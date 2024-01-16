const getAllCountries = require("./Country/getCountry.controller");
const getCountryId = require("./Country/getCountryId.controllers");
const getAllActivities = require("./Activity/getAllActivity.controllers");
const postActivities = require("./Activity/postActivity.controllers");
const getNameCountry = require("./Country/getCountryName.controller");

module.exports = {
  getAllCountries,
  getCountryId,
  getAllActivities,
  postActivities,
  getNameCountry,
};
