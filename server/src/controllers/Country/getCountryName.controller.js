const { Country } = require("../../db");
const { Op } = require("sequelize");

const getNameCountry = async (req, res, next) => {
  try {
    // Destructurar lo que recibo por query
    const { name } = req.query;
    if (!name) {
      return res
        .status(400)
        .json({ message: "El parámetro de búsqueda es obligatorio." });
    }
    const countries = await Country.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
    });

    countries.length === 0
      ? res.status(404).json({ message: "No se encontro nada con ese nombre" })
      : res.status(200).json(countries);
  } catch (error) {
    next(error);
  }
};

module.exports = getNameCountry;
