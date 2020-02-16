/*
* Author: gabrielhruiz
* */
const express = require('express');

const queryProcess = require('../processes/query');

const errorSystem = require('../Error');

const router = express.Router();

router.get('/:model', (req, res) => {
  const conditions = req.query;
  const { model } = req.params;
  const query = { conditions };
  return queryProcess.getQuery(query, model, 'getDocumentList')
    .then(user => res.status(200).json(user))
    .catch(error => errorSystem.manageError({ error, req, res }));
});

router.get('/:model/:id', (req, res) => {
  const id = req.params.id;
  const { model } = req.params;
  const query = { conditions: { _id: id } };
  return queryProcess.getQuery(query, model, 'getDocument')
    .then(user => res.status(200).json(user))
    .catch(error => errorSystem.manageError({ error, req, res }));
});

router.post('/:model', (req, res) => {
  const data = req.body;
  const { model } = req.params;
  return queryProcess.getQuery(data, model, 'createDocument')
    .then(user => res.status(200).json(user))
    .catch(error => errorSystem.manageError({ error, req, res }));
});

router.put('/:model/:id', (req, res) => {
  const data = req.body;
  const { model, id } = req.params;
  const query = { conditions: { _id: id }, update: data };
  return queryProcess.getQuery(query, model, 'updateDocument')
    .then(user => res.status(200).json(user))
    .catch(error => errorSystem.manageError({ error, req, res }));
});

router.delete('/:model/:id', (req, res) => {
  const { model, id } = req.params;
  const query = { conditions: { _id: id } };
  return queryProcess.getQuery(query, model, 'deleteDocument')
    .then(user => res.status(200).json(user))
    .catch(error => errorSystem.manageError({ error, req, res }));
});

module.exports = router;
