exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("cars").insert([
        {
          name: "Cassandra",
          vin_number: "5vin556857",
          make: "Toyota",
          model: "Yaris",
          milage: "100,000",
          clean: false
        },
        {
          name: "Christina",
          vin_number: "vin39847n",
          make: "Telsa",
          model: "Model X",
          milage: "20,987"
        },
        {
          name: "Andrew",
          vin_number: "09384nel33",
          make: "Land Rover",
          model: "Ranger Rover",
          milage: "12,365"
        }
      ]);
    });
};
