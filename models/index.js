var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/tp-101");
mongoose.connection.on('error',function(err) {
  console.log(err);
});

var Schema = mongoose.Schema;

var placeSchema = new Schema({
  address: String,
  city: String,
  state: String,
  phone: String,
  location: [Number, Number]
});

var hotelSchema = new Schema({
  name: String,
  place: [placeSchema],
  num_stars: Number,
  amenities: String
});

var thingsToDoSchema = new Schema({
  name: String,
  place: [placeSchema],
  age_range: String
});

var restaurantSchema = new Schema({
  name: String,
  place: [placeSchema],
  cuisine: String,
  price: Number
});


module.exports = {
  Place: mongoose.model('Place',placeSchema),
  Hotel: mongoose.model('Hotel',hotelSchema),
  ThingsToDo: mongoose.model('ThingsToDo',thingsToDoSchema),
  Restaurant: mongoose.model("Restaurant",restaurantSchema)
};