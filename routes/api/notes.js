const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/notes');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get("/:id", ensureLoggedIn, notesCtrl.detail)
router.put("/:id", ensureLoggedIn, notesCtrl.update)
router.delete("/:id", ensureLoggedIn, notesCtrl.delete)

module.exports = router