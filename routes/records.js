const router = require("express").Router();
const { filterRecords } = require("../controllers/records");
const { recordsValidation } = require("../middlewares/validate");

router.post("/", recordsValidation, filterRecords);

module.exports = router;
