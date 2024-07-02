"use strict";

const mongoose = require("mongoose");

const anuncioSchema = mongoose.Schema({
  nombre: { type: String, index: true },
  venta: { type: Boolean, index: true },
  precio: { type: Number, min: 0, index: true },
  foto: String,
  tags: {
    type: [String],
    enum: ["work", "lifestyle", "motor", "mobile"],
    index: true,
  },
});

const Anuncio = mongoose.model("Anuncio", anuncioSchema);

module.exports = Anuncio;
