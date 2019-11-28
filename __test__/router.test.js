const request = require("supertest");
const app = require("../app");

var shouldReturn400 = [
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
    maxCount: "400"
  },
  {
    startDate: "2015-12-12",
    endDate: "2016-02-02",
    minCount: 300,
    maxCount: 400,
    unexpected: 89
  }
];

describe("Post Endpoint", () => {
  shouldReturn400.forEach(data => {
    it("should response 400", async () => {
      const res = await request(app)
        .post("/api/records")
        .send(data);
      expect(res.statusCode).toEqual(400);
    });
  });
  test("should return 404", async () => {
    const res = await request(app)
      .post("/api/records")
      .send({
        startDate: "2015-12-12",
        endDate: "2016-02-02",
        minCount: 300,
        maxCount: 400
      });
    expect(res.statusCode).toEqual(404);
  });
  test("should return 200", async () => {
    const res = await request(app)
      .post("/api/records")
      .send({
        startDate: "2016-12-12",
        endDate: "2018-02-02",
        minCount: 300,
        maxCount: 400
      });
    expect(res.statusCode).toEqual(200);
  });
});
