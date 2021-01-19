const db = require("../../data/db-config");

module.exports = {
  getAll() {
    return db("cars");
  },
  create(car) {
    return db("cars")
      .insert(car)
      .then(([car_id]) => {
        return db("cars")
          .where("car_id", car_id)
          .first();
      });
  }
};
