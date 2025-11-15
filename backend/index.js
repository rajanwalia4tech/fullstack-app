const express = require("express");
const Redis = require("redis");
const db = require("./db");

const app = express();
app.use(express.json());

// Fix the CORS issue
app.use(  (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

// Redis Client
const redis = Redis.createClient({
  url: "redis://redis:6379"
});

redis.connect(
  (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Backend Connected to Redis");
    }
  }
);

app.get("/health",(req,res)=>{
  res.status(200).json({status: "OK"});
})


// Test route
app.get("/api/hello", async (req, res) => {
  // Redis Counter
  let count = await redis.incr("visits");

  // MySQL Insert
  await db.query("INSERT INTO messages (message) VALUES (?)", [
    "Hello stored in MySQL!"
  ]);

  res.json({
    msg: "Hello from Backend!",
    redis_visits: count
  });
});

app.listen(5000, () => console.log("Backend running on port 5000"));
