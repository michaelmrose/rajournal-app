const User = require('../../models/user');

module.exports = {
    detail,
    update,
    delete: deleteEvent

}
async function detail(req, res) {
    try {
        const user = await User.findById(req.user._id);
        const event = user.lifeEvents.id(req.params.eventId);
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }
        res.status(200).json(event);
    } catch (err) {
        res.status(500).json({ message: 'Server error', err });
    }
}

// Update details of a specific event
async function update(req, res) {
    try {
        const user = await User.findById(req.user._id);
        const event = user.lifeEvents.id(req.params.eventId);
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }
        event.set(req.body);  
        await user.save();
        res.status(200).json(event);
    } catch (err) {
        res.status(500).json({ message: 'Server error', err });
    }
}

// Delete a particular event
async function deleteEvent(req, res) {
    try {
        const user = await User.findById(req.user._id);
        const event = user.lifeEvents.id(req.params.eventId);
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }
        event.remove();
        await user.save();
        res.status(200).json({ message: 'Event deleted' });
    } catch (err) {
        res.status(500).json({ message: 'Server error', err });
    }
}