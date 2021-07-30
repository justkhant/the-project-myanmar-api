/**
 * @file sectionsModel.js
 * @author Harry Htet
 * @version 1.0
 * @createdDate 03/29/2021
 * @copyright Team Galone
 */

const mongoose = require('mongoose');
const { Schema } = mongoose;

const sectionsSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    data: Object,
  },
  {
    timestamps: {
      createdAt: 'createdDate',
      updatedAt: 'updatedDate',
    },
  },
);

module.exports = mongoose.model('sections', sectionsSchema);
