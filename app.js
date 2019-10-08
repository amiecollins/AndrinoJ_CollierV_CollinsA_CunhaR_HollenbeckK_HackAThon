
  const express = require("express");
  // must log in console "npm i -s express" to install package
  const hbs = require("hbs"); // aka "handlebars"
  // console command "npm i -s hbs"
  const path = require("path");
  // const sql = require("./utils/sql");
  const fs = require('fs');

  const sql = require("./utils/sql");

  const port = process.env.PORT || 3336;

  const app = express();

  var contentData = null;

  var videoData = null;

  var locationData = null;



  app.use(express.static(__dirname + '/public'));

  app.set("view engine", "hbs");
  app.set("views", path.join(__dirname + "/views"));

  for (i = 0; i < 10 ; i++) {
  app.get("/", (req, res) => {
    
      sql.getConnection((err, connection) => {
    
      if (err) {
        return console.log(err.message);
      }

      let query = "SELECT * FROM video_tbl";

      sql.query(query, (err, video) => {

        if (err) { return console.log(err.message); }
        videoData = video;
        console.log(videoData);
      })

      query = "SELECT * FROM content_tbl";

      sql.query(query, (err, content) => {

        if (err) { return console.log(err.message); }
        contentData = content;
        console.log(contentData);
      })

      query = "SELECT * FROM locations_tbl";

      sql.query(query, (err, location) => {
        connection.release();
        if (err) { return console.log(err.message); }
        locationData = location;
        console.log(locationData);
      })
    })
  
  
   res.render("home", { URL: videoData[0].URL });
  })
}
  app.listen(port, () => {
    console.log(`Server running at ${port}`);
  });

 