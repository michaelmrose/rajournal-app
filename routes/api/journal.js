const express = require('express');
const router = express.Router();
const journalCtrl = require('../../controllers/api/journal');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// id = id of journalEntry
router.get("/:id/lifeEvents", ensureLoggedIn, journalCtrl.getEventsForJournalEntry )
router.post("/:id/lifeEvents", ensureLoggedIn, journalCtrl.createEventForJournalEntry)

router.get("/:id", ensureLoggedIn, journalCtrl.details)
router.put("/:id", ensureLoggedIn, journalCtrl.update)
router.delete("/:id", ensureLoggedIn, journalCtrl.delete)

module.exports = router