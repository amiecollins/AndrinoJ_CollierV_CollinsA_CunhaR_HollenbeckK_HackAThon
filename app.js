
  const express = require("express");

  const hbs = require("hbs");
  
  const helpers = require("hbs-helpers");

  const path = require("path");
  
  const fs = require('fs');

  const sql = require("./utils/sql");

  const port = process.env.PORT || 2000;

  const app = express();

  var contentData;

  var videoData;

  var locationData;

  // register helper function taken from https://handlebarsjs.com/block_helpers.html

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
    })

  if (contentData != null) {
    console.log(contentData);
    res.render("content", contentData);
  }
  
})


app.listen(port, () => {
  console.log(`Server running at ${port}`);
});

  function next() {

  };
 
  
  hbs.registerHelper('each', function(context, options) {
    var ret = "";
  
    for(var i=0, j=context.length; i<j; i++) {
      ret = ret + options.fn(context[i]);
    }
  
    return ret;
  });