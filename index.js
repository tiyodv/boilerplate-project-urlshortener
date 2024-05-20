require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
require("./db");
const Url = require("./urlshcema")
const URLShortener = require("./URLShorterner");
const { find } = require("./urlshcema");


// Basic Configuration
const port = process.env.PORT || 3000;

app.use(cors());

app.use("/public", express.static(`${process.cwd()}/public`));
app.use(express.urlencoded())

app.get("/", function (req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});

// Your first API endpoint
app.get("/api/hello", function (req, res) {
  res.json({ greeting: "hello API" });
});

app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});



// API :input endpoint...
    let bodyUrl = new URLShortener.URLShortener()
app.post(
  "/api/shorturl", async(req, res)=>{
    bodyUrl.shorten(req.body.url)
    const newUrl = new Url({
      original_url: req.body.url,
      short_url: bodyUrl.urlMap.code
    })
    await newUrl.save()
    res.json({"original_url": req.body.url, "short_url": bodyUrl.urlMap.code});
});

app.get('/api/shorturl/:input', async(req, res)=>{
   const findUrl =   await Url.find({
        short_url: req.params.input
      })
  res.redirect(findUrl[0].original_url)
})