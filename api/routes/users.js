const express = require('express');

const router = express.Router();

const { successResponse, errorResponse } = require('../utils/helper');
const service = require('../services/user.service');

/* GET users listing. */
router.get('/', async (req, res, next) => {
  const OFFSET = req.query.offset || 0;
  const LIMIT = req.query.limit || 10;

  try {
    const data = await service.getUsers(OFFSET, LIMIT);
    successResponse(req, res, data);
  } catch (error) {
    errorResponse(req, res, error.message);
  }

  // service.createDummyFriends();
});

// get user by id
router.get('/:id', async (req, res, next) => {
  const ID = req.params.id;

  try {
    const data = await service.getUserById(ID);
    successResponse(req, res, data[0]);
  } catch (error) {
    errorResponse(req, res, error.message);
  }

  // service.createDummyUsers();
});

// get user friends
router.get('/:id/friends', async (req, res, next) => {
  const OFFSET = req.query.offset || 0;
  const LIMIT = req.query.limit || 10;
  const ID = req.params.id;

  try {
    const data = await service.getUserFriends(ID, OFFSET, LIMIT);
    successResponse(req, res, data);
  } catch (error) {
    errorResponse(req, res, error.message);
  }

  // service.createDummyUsers();
});

module.exports = router;
