const express = require("express");
const app = express();
const cors = require("cors"); //library
const pool = require("./db");

app.use(cors());
app.use(express.json());

//CREATE a user
app.post("/form", async (req, res) => {
  try {
    const { email, first_name, last_name, mobile, age, gender, batch, fees } =
      req.body;

    const submitform = await pool.query(
      "INSERT INTO createuser (email,first_name, last_name, mobile,age,gender,batch,fees) VALUES($1,$2,$3,$4,$5,$6,$7,$8)",
      [email, first_name, last_name, mobile, age, gender, batch, fees]
    );
    res.json(submitform);
  } catch (err) {
    console.error(err.message);
  }
});

//GET all details
app.get("/userdetails", async (req, res) => {
  try {
    const alldetails = await pool.query("SELECT * FROM createuser");
    res.json(alldetails.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//GET a user details
app.get("/userdetails/:email", async (req, res) => {
  try {
    const { email } = req.params;
    const userdata = await pool.query(
      "SELECT * FROM createuser WHERE email = $1",
      [email]
    );
    res.json(userdata.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//UPDATE some details

// update payment
app.put("/userdetails/:email/pay", async (req, res) => {
  try {
    const { email } = req.params;
    const updatefees = await pool.query(
      "UPDATE createuser SET fees = $1 WHERE email = $2",
      [true, email]
    );
    res.json("Fess Updated !!");
  } catch (err) {
    console.error(err.message);
  }
});

//upate user details
app.put("/userdetails/:emailid/edit", async (req, res) => {
  try {
    const { emailid } = req.params;
    const { email, first_name, last_name, mobile, age, gender, batch } =
      req.body;
    const updatefees = await pool.query(
      "UPDATE createuser SET email = $1, first_name = $2,last_name = $3, mobile=$4, age = $5, gender = $6, batch = $7 WHERE email = $8",
      [email, first_name, last_name, mobile, age, gender, batch, emailid]
    );
    //   console.log(emailid)
    //   console.log(req.body)
    res.json("Updated !!");
  } catch (err) {
    console.error(err.message);
  }
});

//DELETE a user
app.delete("/userdetails/:email", async (req, res) => {
  try {
    const { email } = req.params;
    const deletedata = await pool.query(
      "DELETE FROM createuser WHERE email = $1",
      [email]
    );
    res.json("Info deleted!!");
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(5000, () => {
  console.log("Server has started on port 5000");
});
