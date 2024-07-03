"use strict";

const router = require("express").Router();
const { query } = require("express");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");
const { getFiltersByRequest }  = require('../../lib/anunciosUtils');

const mongoose = require("mongoose");
const Anuncio = mongoose.model("Anuncio");

router.get("/", asyncHandler(async function (req, res) {
    const filters = getFiltersByRequest(req);

    const skip = parseInt(req.query.skip) || 0;
    const limit = parseInt(req.query.limit) || 500;
    const sort = req.query.sort || '_id';

    const anuncios = await Anuncio.getAnunciosForApi(filters, skip, limit, sort);
    res.json({ results: anuncios });
  })
);

router.get("/tags", (req, res) => {
  const tags = Anuncio.getAvailableTags();
  res.json({availableTags: tags});
});

module.exports = router;
