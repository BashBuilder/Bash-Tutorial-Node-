const { Router } = require("express");
const userAuthController = require("../controllers/userAuthController");


const router  = Router();

router.post('/signup', userAuthController.signup);
router.post('/login', userAuthController.login);

module.exports = router



