const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');
const journalCtrl = require('../../controllers/api/journal')
const notesCtrl = require('../../controllers/api/notes')
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// All paths start with '/api/users'

// POST /api/users (create a user - sign up)
router.post('/', usersCtrl.create);
// POST /api/users/login
router.post('/login', usersCtrl.login);
// GET /api/users/check-token
router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken);

// user related resources
router.get("/:id/journalEntries", ensureLoggedIn,  journalCtrl.getJournalEntriesForUser)
router.post("/:id/journalEntries", ensureLoggedIn, journalCtrl.createJournalEntryForUser)
router.get("/:id/notes",  ensureLoggedIn, notesCtrl.getNotesForUser)
router.post("/:id/notes",  ensureLoggedIn, notesCtrl.createNoteForUser)

module.exports = router;