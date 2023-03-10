const express = require("express")
const router = express.Router()

const controller = require("../controllers/userControllers")
router.get("/all", controller.getAll)
router.post("/create", controller.createUser)
router.patch("/update/:id", controller.updateUserById)
router.delete("/delete/:id", controller.deleteUserById)
router.get("/id/:id", controller.getUserByAll)

const authController = require("../controllers/authController.js")
router.post('/login', authController.login)

module.exports = router;