const User = require('../../models/user');

module.exports = {
    detail,
    update,
    delete: deleteNote,
    getNotesForUser,
    createNoteForUser,

}

// Get all notes for a user
async function getNotesForUser(req, res) {
    try {
        const user = await User.findById(req.user._id);
        res.status(200).json(user.notes);
    } catch (err) {
        res.status(500).json({ message: 'Server error', err });
    }
}

// Create a note for a user
async function createNoteForUser(req, res) {
    try {
        const user = await User.findById(req.user._id);
        const newNote = {
            creationDate: new Date(),
            ...req.body  // assuming req.body contains the 'contents' of the note
        };

        user.notes.push(newNote);
        await user.save();

        res.status(201).json(newNote);
    } catch (err) {
        res.status(500).json({ message: 'Server error', err });
    }
}

// Get details of a specific note
async function detail(req, res) {
    try {
        const user = await User.findById(req.user._id);
        const note = user.notes.id(req.params.noteId);

        if (!note) {
            return res.status(404).json({ message: 'Note not found' });
        }

        res.status(200).json(note);
    } catch (err) {
        res.status(500).json({ message: 'Server error', err });
    }
}

// Update details of a specific note
async function update(req, res) {
    // ... (Implementation goes here)
}

// Delete a specific note
async function deleteNote(req, res) {
    // ... (Implementation goes here)
}