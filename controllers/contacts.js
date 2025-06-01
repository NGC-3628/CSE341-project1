const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

// GET - get all contacts 
const getAll = async (req, res) => {
    const db = mongodb.getDatabase();
    const result = await db.collection('contacts').find();
    result.toArray().then((contacts) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(contacts);
    });
};

//GET - get specific contacts through an ID
const getSingle = async (req, res) => {
    const userId = new ObjectId(req.params.id);
    const db = mongodb.getDatabase();
    const result = await db.collection('contacts').find({ _id: userId });
    result.toArray().then((contacts) => {
        res.setHeader('Content-Type', 'application/json'); 
        res.status(200).json(contacts[0]);
    });
};

// POST - Add new contact
const addContact = async (req, res) => {
    const db = mongodb.getDatabase();
    const contact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    };

    try {
        const result = await db.collection('contacts').insertOne(contact);
        res.status(201).json(result);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

//PUT -updates a contact
const updateContact = async (req, res) => {
    const db = mongodb.getDatabase();
    const userId = new ObjectId(req.params.id);
    const updatedContact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    };

    try {
        const result = await db.collection('contacts').updateOne(
            { _id: userId },
            { $set: req.body }
        );
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// DELETE - Remove contact
const deleteContact = async (req, res) => {
    const db = mongodb.getDatabase();
    const userId = new ObjectId(req.params.id);

    try {
        const result = await db.collection('contacts').deleteOne({ _id: userId });
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};




module.exports = {
    getAll,
    getSingle,
    addContact,
    updateContact,
    deleteContact
};

