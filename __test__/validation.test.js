const validator = require("../helpers/validator");

const validate = validator.schema({
  startDate: validator.checkDate,
  endDate: validator.checkDate,
  minCount: validator.checkNumber,
  maxCount: validator.checkNumber
});

var data = [
  {
    startDate: 233,
    endDate: "2016-02-02",
    minCount: 300,
    maxCount: 400
  },
  {
    startDate: "2015-12-12",
    endDate: "16-02-02",
    minCount: 300,
    maxCount: 400
  },
  {
    startDate: "2015-12-12",
    endDate: "2016-02-02",
    minCount: "300",
    maxCount: 400
  },
  {
    startDate: "2015-12-12",
    endDate: "2016-02-02",
    minCount: 300,
    maxCount: 400
  }
];


test("startDate must be string", () => {
  try {
    validate(data[0]);
  } catch (e) {
    expect(e.message).toEqual('"startDate" must be string and yyyy-mm-dd');
  }
});

test("endDate must be yyyy-mm-dd", () => {
  try {
    validate(data[1]);
  } catch (e) {
    expect(e.message).toEqual('"endDate" must be yyyy-mm-dd');
  }
});

test("not number", () => {
  try {
    validate(data[2]);
  } catch (e) {
    expect(e.message).toEqual('"minCount" not number');
  }
});

test("no error", () => {
  expect(validate(data[3])).toEqual(data[3])
});
