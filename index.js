// load .env settings
require('dotenv').config()

// Require the express server application and create a new instance
const express = require("express")
const app = express()

// Set up encrypted cookie authentication
app.use(require('cookie-session')({
  name: "session",
  keys: ["2b629d5f6260b2", "445a81b2828228"],
  cookie: {
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }
}))

// Connect to Airtable
const Airtable = require("airtable");
Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: process.env.AIRTABLE_API_KEY
})

// Connect to Postgres
const { Pool } = require("pg")
const pool = new Pool({
  host: "localhost",
  database: "wl-network"
})

// Static assets
app.use(express.static("public"))

// Enable body parsers
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Store references to DB connections and other app components
app.locals = {
    base: Airtable.base(process.env.AIRTABLE_BASE_ID),
    pool,
    models: require("./models"),
    templates: require("./templates"),
    mailers: require("./mailers"),
}

app.use(require("./router"))

const port = 3456
app.listen(port, () => {
  console.log(`app running on ${port}`)
})
