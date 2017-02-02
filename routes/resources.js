"use strict";

const db = require('../db/queries.js');

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/", (req, res) => {
    // What does get /resources do?
  })

  router.get("/search", (req, res) => {
    // Takes search term, filters resources. Does not leave page.
    // knex select query here
    // ajax request for new resources
  })

  router.post("/new", (req, res) => {
    const user_id = req.session_id;
    const title = req.body.title;
    const description = req.body.description;
    const url = req.body.url;
    const resource = {user_id:      user_id,
                      url:          url,
                      title:        title,
                      description:  description,
                    }
    db.saveResource(resource, function(){
      console.log(resource.id);
    });
    res.redirect("/");
  })

  router.get("/:resource_id", (req, res) => {
    // shows the resource's page

  });

  router.get("/:resource_id/likes", (req, res) => {
    // returns number of likes for that resource
  })

  router.get("/:resource_id/comments", (req, res) => {
    // returns number and content of comments for that resource
  })

  router.get("/:resource_id/ratings", (req, res) => {
    // returns ratings and average rating for that resource
  })

  return router;
}
