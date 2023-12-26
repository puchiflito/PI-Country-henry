const { Country } = require("../../db");
const getAllCountries = async (req, res, next) => {
  try {
    const dataDb = await Country.findAll();
    res.send(dataDb);
  } catch (error) {
    next(error);
  }
};
module.exports = getAllCountries;
