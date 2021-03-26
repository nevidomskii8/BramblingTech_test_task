const router = require('express').Router();
const stateController = require('../../controllers/stateController');

router.get('/getState', stateController.getState);


module.exports = router;