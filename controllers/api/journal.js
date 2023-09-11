const User = require('../../models/user');

module.exports = {
    getEventsForJournalEntry,
    createEventForJournalEntry,
    details,
    update,
    delete: deleteJournalEntry,
    getJournalEntriesForUser,
    createJournalEntryForUser,
}
// Get all journal entries for a specific user
async function getJournalEntriesForUser(req, res) {
    try {
        const user = await User.findById(req.user._id).select('journalEntries');
        res.status(200).json(user.journalEntries);
    } catch (err) {
        res.status(500).json({ message: 'Server error', err });
    }
}

// Create a new journal entry for a user
async function createJournalEntryForUser(req, res) {
    try {
        const user = await User.findById(req.user._id);
        user.journalEntries.push(req.body);  // assuming req.body contains the journal entry
        await user.save();
        res.status(201).json(user.journalEntries);
    } catch (err) {
        res.status(500).json({ message: 'Server error', err });
    }
}

// Get details of a specific journal entry
async function details(req, res) {
    try {
        const user = await User.findById(req.user._id);
        const journalEntry = user.journalEntries.id(req.params.journalEntryId);
        if (!journalEntry) {
            return res.status(404).json({ message: 'Journal entry not found' });
        }
        res.status(200).json(journalEntry);
    } catch (err) {
        res.status(500).json({ message: 'Server error', err });
    }
}

// Update a journal entry
async function update(req, res) {
    try {
        const user = await User.findById(req.user._id);
        const journalEntry = user.journalEntries.id(req.params.journalEntryId);
        if (!journalEntry) {
            return res.status(404).json({ message: 'Journal entry not found' });
        }
        journalEntry.set(req.body); // assuming req.body contains the updated journal entry
        await user.save();
        res.status(200).json(journalEntry);
    } catch (err) {
        res.status(500).json({ message: 'Server error', err });
    }
}

// Delete a journal entry
async function deleteJournalEntry(req, res) {
    try {
        const user = await User.findById(req.user._id);
        const journalEntry = user.journalEntries.id(req.params.journalEntryId);
        if (!journalEntry) {
            return res.status(404).json({ message: 'Journal entry not found' });
        }
        journalEntry.remove();
        await user.save();
        res.status(200).json({ message: 'Journal entry deleted' });
    } catch (err) {
        res.status(500).json({ message: 'Server error', err });
    }
}

async function getEventsForJournalEntry(req, res) {
    try {
        const user = await User.findById(req.user._id);
        const journalEntry = user.journalEntries.id(req.params.journalEntryId);

        if (!journalEntry) {
            return res.status(404).json({ message: 'Journal entry not found' });
        }

        const lifeEventsForJournalEntry = user.lifeEvents.filter(
            event => event.date.toISOString() === journalEntry.creationDate.toISOString()
        );

        res.status(200).json(lifeEventsForJournalEntry);
    } catch (err) {
        res.status(500).json({ message: 'Server error', err });
    }
}

// Create life event for a specific journal entry
async function createEventForJournalEntry(req, res) {
    try {
        const user = await User.findById(req.user._id);
        const journalEntry = user.journalEntries.id(req.params.journalEntryId);

        if (!journalEntry) {
            return res.status(404).json({ message: 'Journal entry not found' });
        }

        const newLifeEvent = {
            date: journalEntry.creationDate,
            ...req.body  
        };

        user.lifeEvents.push(newLifeEvent);
        await user.save();

        res.status(201).json(newLifeEvent);
    } catch (err) {
        res.status(500).json({ message: 'Server error', err });
    }
}