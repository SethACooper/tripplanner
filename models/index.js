var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/tp_101");
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

var daySchema = new Schema({
  dayNum: Number,
  hotels: [ {type: Schema.Types.ObjectId, ref: "Hotel"} ],
  restaurants: [ {type: Schema.Types.ObjectId, ref: "Restaurant"} ],
  thingsToDo: [ {type: Schema.Types.ObjectId, ref: "ThingsToDo"} ],
});


module.exports = {
  Place: mongoose.model('Place',placeSchema),
  Hotel: mongoose.model('Hotel',hotelSchema),
  ThingsToDo: mongoose.model('ThingsToDo',thingsToDoSchema),
  Restaurant: mongoose.model("Restaurant",restaurantSchema),
  Day: mongoose.model('Day',daySchema)
};