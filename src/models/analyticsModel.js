/**
 * @file analyticsModel.js
 * @author tripletk
 * @version 1.0
 * @createdDate 02/15/2022
 * @copyright Team Galone
 */

const mongoose = require('mongoose');
const { Schema } = mongoose;

const analyticsSchema = new Schema(
  {
    browserName: String,
    broswerLanguage: String,
    browserPlatform: String,
    country: String,
    region: String,
    sessionDuration: Number,
    createdTime: Date,
  },
  {
    timestamps: {
      timeEntered: Date,
      timeExited: Date,
    },
  },
);

module.exports = mongoose.model('analytics', analyticsSchema);
