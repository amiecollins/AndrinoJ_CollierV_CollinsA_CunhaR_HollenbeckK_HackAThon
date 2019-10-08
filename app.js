
  const express = require("express");

  const hbs = require('handlebars/runtime')['default'];
  const helpers = require('helpers-hbs');

  
  hbs.registerHelper('each', require('handlebars-helper-each'));
  

  const path = require("path");
  
  const fs = require('fs');

  const sql = require("./utils/sql");

  const port = process.env.PORT || 2177;

  const app = express();

  var contentData;

  var videoData;

  var locationData;

  app.use(express.static(__dirname + '/public'));

  app.set("view engine", "hbs");
  app.set("views", path.join(__dirname + "/views"));

  app.get("/", (req, res, next) => {
    var page;
      sql.getConnection((err, connection) => {
    
      if (err) {
        console.log(err.message);
        return next();
      }

      let query = "SELECT * FROM video_tbl";

      sql.query(query, (err, video) => {

        if (err) { console.log(err.message); return next(); }
        videoData = video;
      })
    
      query = "SELECT * FROM content_tbl";
    
      sql.query(query, (err, content) => {
    
        if (err) { console.log(err.message); return next(); }
        contentData = content;
      })

      query = "SELECT * FROM locations_tbl";
    
      sql.query(query, (err, location) => {
    
        if (err) { console.log(err.message); return next(); }
        locationData = location;
      })
    })

  if (videoData != null && contentData != null && locationData != null) {
    res.render("home", { video: videoData, content: contentData, locations: locationData });
  }
  
})


app.listen(port, () => {
  console.log(`Server running at ${port}`);
});

  function next() {

  };