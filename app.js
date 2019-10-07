const express = require("express");
// must log in console "npm i -s express" to install package
const hbs = require("hbs"); // aka "handlebars"
// console command "npm i -s hbs"
const path = require("path");
// const sql = require("./utils/sql");
const fs = require('fs');
const partials = ["content", "contact", "jak", "burgermenu", "video"];

const port = process.env.PORT || 3000;

const app = express();

app.use(express.static(__dirname + '/public'));

app.set("view engine", "hbs");
app.set("views", path.join(__dirname + "/views"));

app.get("/", (req, res) => {
  res.render("home", { homemessage: "hey there!", bio: "just anything" });
})

/*app.get("/users", (req, res) => {

  sql.getConnection((err, connection) => {
    if (err) {
      return console.log(err.message);
    }
    let query = "SELECT * FROM tbl_card";

    sql.query(query, (err, rows) => {
      // we're done with our DB connection
      connection.release();
      // if something broke, quit and show error message
      if (err) { return console.log(err.message); }
      // show me the data!
      console.log(rows);

      res.render("user", rows[0]);
    })
  })
});*/

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
var filePath = null;
for (i = 0; i < partials.length; i++) { 
    filePath = hbs.compile(fs.readFileSync(__dirname + `/views/${partials[i]}.hbs`).toString("utf-8"));
    hbs.registerPartial(partials[i], filePath);
};
