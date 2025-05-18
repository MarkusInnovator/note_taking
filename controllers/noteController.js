const Note = require('../models/Note');

exports.getAllNotes = async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
};

exports.createNote = async (req, res) => {
  const { title, content } = req.body;
  const newNote = new Note({ title, content });
  await newNote.save();
  res.status(201).json(newNote);
};

// Die anderen Methoden wären ähnlich: getNoteById, updateNote, deleteNote
exports.getNoteById = async (req, res) => {
  const note = await Note.findById(req.params.id);
  if (!note) {
    return res.status(404).json({ message: 'Note not found' });
  }
  res.json(note);
};
exports.updateNote = async (req, res) => {
  const { title, content } = req.body;
  const note = await Note.findByIdAndUpdate(req.params.id, { title, content }, { new: true });
  if (!note) {
    return res.status(404).json({ message: 'Note not found' });
  }
    res.json(note);
}
exports.deleteNote = async (req, res) => {
  const note = await Note.findByIdAndDelete(req.params.id);
  if (!note) {
    return res.status(404).json({ message: 'Note not found' });
  }
  res.status(204).send();
}

