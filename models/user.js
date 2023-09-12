const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 6;

const journalEntrySchema = new Schema({
    creationDate: {
      type: Date,
      required: true,
      default: Date.now()
    },
    morningPainLevel: {
      type: Number,
      required: true,
      min: 1,
      max: 10,
    },
    morningStiffnessLevel: {
      type: Number,
      required: true,
      min: 1,
      max: 10,
    },
    morningFatigueLevel: {
      type: Number,
      required: true,
      min: 1,
      max: 10,
    },
    dayPainLevel: {
      type: Number,
      required: true,
      min: 1,
      max: 10,
    },
    dayStiffnessLevel: {
      type: Number,
      required: true,
      min: 1,
      max: 10,
    },
    dayFatigueLevel: {
      type: Number,
      required: true,
      min: 1,
      max: 10,
    },
    qualityOfSleep: {
      type: String,
      required: true,
      enum: ["Poorly", "OK", "Well"]

    },
    hoursOfSleep: {
      type: Number,
      required: true,
      min: 0,
      max: 12,
    },
})

const lifeEventSchema = new Schema ({
    date: {
      type: Date,
      required: true,
      default: Date.now()
    },
    event: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 300,

    } })

const noteSchema = new Schema({
    creationDate: {
      type: Date,
      required: true,
      default: Date.now()
    },
  contents: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 1000,
  }})



const userSchema = new Schema({
  name: {type: String, required: true},
  email: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
notes: [noteSchema],
lifeEvents: [lifeEventSchema],
journalEntries: [journalEntrySchema]


}, {
  timestamps: true,
  toJSON: {
    transform: function(doc, ret) {
      delete ret.password;
      return ret;
    }
  }
});

userSchema.pre('save', async function(next) {
  // 'this' is the user document
  if (!this.isModified('password')) return next();
  // Replace the password with the computed hash
  this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
});

module.exports = mongoose.model('User', userSchema);