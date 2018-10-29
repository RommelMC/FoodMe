var yelp = require('yelp-fusion');
key = "1RYjgVkBwm8Xb0FFyVt_JwiI0IDTM64FXPuTOikJY948VqQFoa0EKFR9ClpbHgT_PgcgyWHqCiqqzxvkHNBvfyyCS0tCmS6LiX1CTSTKnxEBIoOfnU84hzBtlGrVW3Yx";
client = yelp.client(key);
const apiRequestPrefix =  "https://api.yelp.com/v3/businesses/";
const fetch = require("node-fetch");

var fetchYelpData = function(url, res){
  fetch(url , {
    method: "GET",
    mode: "no-cors",
    headers: {
      "Authorization": "Bearer "+key
      }
    }).then(
      response => {
        return response.json();
      }
    ).then(
      result => {
        // console.log('**************Result content:', result);
        res.header('Access-Control-Allow-Origin', '*');
        res.json(result);
      }
    ).catch(
      err => console.log('Error meesage', err)
  );
};

module.exports = {
    index: function(req, res) {
      res.render('index');
    },
    
    getRestaurants: function(req, res){
      var start = "search?categories="
      var apiRequestSuffix = "&location="+req.params.locValue+"&limit=50&radius="+req.params.radius+"&price=";
      for(var i = 1; i < req.params.price; i++){
        apiRequestSuffix+=i+','
      }
      apiRequestSuffix+=i;
      console.log(apiRequestSuffix);
      var categories = "restaurant";
      var url = apiRequestPrefix + start + categories + apiRequestSuffix;
    
      fetchYelpData(url, res);
    },
    
    getReviews: function(req,res){
      var id = req.params.id;
      var url = apiRequestPrefix+id+"/reviews"
      fetchYelpData(url, res);
    }
  }
  