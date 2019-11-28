const { checkDate, checkNumber, schema } = require("../helpers/validator");

/**
 * Calls the error middleware if validator throws a error.
 */
exports.recordsValidation = function(req, res, next) {
  try {
    const validate = schema({
      startDate: checkDate,
      endDate: checkDate,
      minCount: checkNumber,
      maxCount: checkNumber
    });
    validate(req.body);
    next();
  } catch (error) {
    return next({ status: 400, message: error.message });
  }
};
