var foods = require('../controllers/food.js');
let path = require('path');
module.exports = function(app) {
  app.get('/', foods.index);
  app.get('/yelp/restaurants/location/:locValue/radius/:radius/price/:price', foods.getRestaurants);
  app.get('/yelp/restaurants/reviews/:id', foods.getReviews);
  app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./food/dist/index.html"))
});
}
