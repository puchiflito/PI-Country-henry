const { Country, Activity } = require("../../db");
const postActivities = async (req, res) => {
  const { name, difficulty, duration, season, countries } = req.body;
  if (!countries || !name || !difficulty || !duration || !season) {
    return res.status(415).send("Debe ingresar un pais!!");
  }
  try {
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

module.exports = postActivities;

// const { name, difficulty, duration, season, countries } = req.body;
// if (!countries || !name || !difficulty || !duration || !season) {
//   return res.status(415).send("Debe ingresar un pais!!");
// }
// let [activitiesTrue, createAcitivity] = await Activity.findOrCreate({
//   where: { name },
//   defaults: { name, difficulty, duration, season, countries },
// });
// if (!createAcitivity) {
//   return res.status(409).json({ message: "No se creo" });
// }
// const buscarPais = await Country.findAll({
//   where: { name: countries },
// });
// await activitiesTrue.setCountries(buscarPais);
// res.status(200).json(activitiesTrue);
