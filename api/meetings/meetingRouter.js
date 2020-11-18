const express = require('express');

const Meeting = require('./meetingModel.js');
const restricted = require('../../auth/restricted.js');

const router = express.Router();

router.get('/', restricted, (req, res) => {
    Meeting.getAllMeetings()
  .then(sessions => {
    res.json(sessions);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get sessions' });
  });
});

router.get('/:id', restricted, (req, res) => {
  const { id } = req.params;

  Meeting.getMeetingById(id)
  .then(session => {
    if (session) {
      res.json(session);
    } else {
      res.status(404).json({ message: 'Could not find session with given id.' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get session' });
  });
});

router.post('/', restricted, (req, res) => {
  const session = req.body
  Meeting.addMeeting(session)
      .then(session => {
        res.status(201).json({ data: session });
      })
      .catch(error => {
        res.status(500).json({ message: error.message });
      });
})

router.put('/:id', restricted, (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Sessions.getMeetingById(id)
  .then(session => {
    if (session) {
        Meeting.updateMeeting(changes, id)
      .then(updatedSession => {
        res.json(updatedSession);
      });
    } else {
      res.status(404).json({ message: 'Could not find session with given id' });
    }
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to update session' });
  });
});

router.delete('/:id', restricted, (req, res) => {
  const { id } = req.params;

  Meeting.deleteMeeting(id)
  .then(deleted => {
    if (deleted) {
      res.json({ session: "deleted" });
    } else {
      res.status(404).json({ message: 'Could not find session with given id' });
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to delete session' });
  });
});

module.exports = router;