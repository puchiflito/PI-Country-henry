const { Country, Activity } = require("../../db");

const getCountryId = async (req, res, next) => {
  try {
    const { id } = req.params;
    const idUperCase = id.toUpperCase();
    const country = await Country.findOne({
      where: { id: idUperCase },
      include: Activity,
    });
    res.send(country);
  } catch (error) {
    next(error);
  }
};

module.exports = getCountryId;
