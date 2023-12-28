const { Country, Activity } = require("../../db");
const postAcitities = async (req, res, next) => {
  try {
    const { name, difficulty, duration, season, countries } = req.body;
    if (!countries || countries.length === 0) {
      return res.status(415).send("Debe ingresar un pais!!");
    }
    const activitiesTrue = await Activity.findOne({
      where: {
        name,
      },
    });

    if (activitiesTrue) {
      throw new Error("Ya existe esa actividad");
    }
    const createAcitivity = await Activity.create({
      name,
      difficulty,
      duration,
      season,
      countries,
    });

    const realtionTable = await createAcitivity.addCountries(countries);
    res.send(realtionTable);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = postAcitities;
