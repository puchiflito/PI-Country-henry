const { Router } = require("express");
const postActivities = require("../controllers/Activity/postActivity.controllers");
const getAllActivities = require("../controllers/Activity/getAllActivity.controllers");
const getAllCountries = require("../controllers/Country/getCountry.controller");
const getNameCountry = require("../controllers/Country/getCountryName.controller");
const getCountryId = require("../controllers/Country/getCountryId.controllers");

const router = Router();
router.get("/countries/name", getNameCountry);
router.get("/countries", getAllCountries);
router.get("/countries/:id", getCountryId);
router.get("/activities", getAllActivities);
router.post("/activities", postActivities);

module.exports = router;

// const {
//   getAllCountries,
//   getCountryId,
//   getAllActivities,
//   postAcitities,
//   getNameCountry,
// } = require("../controllers/index.controllers");
