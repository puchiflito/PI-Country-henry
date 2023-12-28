const { Activity } = require("../../db");
const getAllActivities = async (req, res, next) => {
  try {
    const activities = await Activity.findAll();
    res.status(200).json(activities);
  } catch (error) {
    next(error);
  }
};
module.exports = getAllActivities;
