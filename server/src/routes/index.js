const { Router } = require("express");
const {
  getAllCountries,
  getCountryId,
} = require("../controllers/index.controllers");

const router = Router();
router.get("/countries", getAllCountries);
router.get("/countries/:id", getCountryId);

module.exports = router;
