const { Router } = require("express");
const {
  getAllCountries,
  getCountryId,
  getAllActivities,
  postAcitities,
  getNameCountry,
} = require("../controllers/index.controllers");

const router = Router();
router.get("/countries/name", getNameCountry);
router.get("/countries", getAllCountries);
router.get("/countries/:id", getCountryId);
router.get("/activities", getAllActivities);
router.post("/activities", postAcitities);

module.exports = router;
