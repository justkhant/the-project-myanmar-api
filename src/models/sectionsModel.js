/**
 * @file sectionsModel.js
 * @author Harry Htet
 * @version 1.0
 * @createdDate 03/29/2021
 * @copyright Team Galone
 */

const mongoose = require('mongoose');
const { Schema } = mongoose;

const dialSchema = new Schema(
  {
    topic: String,
    content: String,
    images: String,
  },
  {
    _id: 0,
  },
);

const sectionsSchema = new Schema(
  {
    title: String,
    containsDial: Boolean,
    dial: [dialSchema],
  },
  {
    timestamps: {
      createdAt: 'createdDate',
      updatedAt: 'updatedDate',
    },
  },
);

module.exports = mongoose.model('sections', sectionsSchema);
