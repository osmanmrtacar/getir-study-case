const { ErrorHandler } = require("./error");

function validateThat(predicate, message) {
  return function(value) {
    if (predicate(value)) return value;
    throw new ErrorHandler(message);
  };
}

exports.checkString = validateThat(function(value) {
  return typeof value == "string";
}, "not string");

exports.checkNumber = validateThat(function(value) {
  return typeof value == "number";
}, "not number");

exports.checkDate = validateThat(function(value) {
  try {
    return value.match(/^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/);
  } catch (error) {
    throw new ErrorHandler("must be string and yyyy-mm-dd");
  }
}, "must be yyyy-mm-dd");

exports.schema = function(propertyValidators) {
  return function(object) {
    var result = {};

    if (!object || typeof object !== "object") {
      throw new ErrorHandler("not an Object");
    }

    // Validate all properties.
    for (key in propertyValidators) {
      var validator = propertyValidators[key];
      try {
        var valid = validator(object[key]);
      } catch (error) {
        if (key in object) {
          throw new ErrorHandler('"' + key + '" ' + error.message);
        } else {
          throw new ErrorHandler('missing property "' + key + '"');
        }
      }
      if (valid !== undefined) {
        result[key] = valid;
      }
    }

    // Check for unexpected properties.
    for (var key in object) {
      if (!propertyValidators[key]) {
        throw new ErrorHandler('unexpected property "' + key + '"');
      }
    }

    return result;
  };
};
