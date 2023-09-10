require('dotenv').config();
require('./config/database');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('./models/user'); // Assuming your model file is named user.js

const SALT_ROUNDS = 6;

function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

async function seedDatabase() {
  try {
    // Drop the existing User collection
    await mongoose.connection.dropCollection('users');

    // Initialize empty arrays to hold 30 days worth of data for each user
    const journalEntries = [];
    const lifeEvents = [];
    const notes = [];

    // Generate 30 days worth of data
    for (let i = 0; i < 30; i++) {
      const date = new Date();
      date.setDate(date.getDate() - i);

      journalEntries.push({
        creationDate: date,
        painLevel: randomBetween(1, 10),
        stiffnessLevel: randomBetween(1, 10),
        fatigueLevel: randomBetween(1, 10),
      });

      lifeEvents.push({
        date: date,
        event: `Event for day ${i + 1}`,
      });

      notes.push({
        creationDate: date,
        contents: `Note for day ${i + 1}`,
      });
    }

    // Create sample users
    const users = [
      {
        name: "John Doe",
        email: "john@example.com",
        password: "a",
        journalEntries,
        lifeEvents,
        notes,
      },
      {
        name: "Jane Doe",
        email: "jane@example.com",
        password: "b",
        journalEntries,
        lifeEvents,
        notes,
      },
    ];

    // Seed the users including their embedded journal entries, life events, and notes
    await User.create(users);

    console.log('Database seeding complete with 30 days of data for each user!');
  } catch (error) {
    console.log('An error occurred:', error);
  } finally {
    // Disconnect the database
    mongoose.connection.close();
  }
}

seedDatabase();
