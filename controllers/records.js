const db = require("../models");
/**
 * Creates totalCount field that is sum of the counts array.
 * Filters the records by startDate, endDate, minCount and maxCount
 */
exports.filterRecords = async function(req, res, next) {
  try {
    let response = await db.Record.aggregate([
      {
        $project: {
          _id: 0,
          key: 1,
          createdAt: 1,
          totalCount: {
            $sum: "$counts"
          }
        }
      },

      {
        $match: {
          createdAt: {
            $gte: new Date(req.body.startDate),
            $lte: new Date(req.body.endDate)
          },
          totalCount: {
            $gte: req.body.minCount,
            $lte: req.body.maxCount
          }
        }
      }
    ]);
    if (response.length > 0) {
      res.status(200).json({
        code: 0,
        msg: "success",
        records: response
      });
    } else next({ status: 404, message: "no result" });
  } catch (error) {
    return next({ status: 500, message: error.errmsg });
  }
};
