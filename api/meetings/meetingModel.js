const db = require("../../data/connection.js");

module.exports = {
  addMeeting,
  getAllMeetings,
  getMeetingById,
  updateMeeting,
  deleteMeeting,
};

async function addMeeting(meeting) {
  try {
    const [id] = await db("meetings").insert(meeting, "id");
    return getMeetingById(id);
  } catch(error) {
    throw error;
  }
}

function getAllMeetings() {
  return db("meetings");
}

function getMeetingById(id) {
  return db("meetings").where({ id }).first();
}

function updateMeeting(changes, id) {
  return db("meetings")
    .where({ id })
    .update(changes,id)
    .then(() => {
      return getMeetingById(id);
    });
}

function deleteMeeting(id) {
  return db("meetings").where({ id }).del();
}