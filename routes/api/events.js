const express = require('express');
const router = express.Router();
const eventsCtrl = require('../../controllers/api/events');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get("/:id", ensureLoggedIn, eventsCtrl.detail)
router.put("/:id", ensureLoggedIn, eventsCtrl.update)
router.delete("/:id", ensureLoggedIn, eventsCtrl.delete)

module.exports = router