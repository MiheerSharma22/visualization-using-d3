const Data = require("../models/Data");
exports.getData = async (req, res) => {
  try {
    // get all data
    const data = await Data.find({});

    // if no data is present
    if (!data) {
      res.status(404).json({
        success: false,
        message: "Data not found",
      });
    }

    // return successful response
    res.status(200).json({
      success: true,
      message: "Data retreived successfully",
      data: data,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error in fetching the data",
    });
  }
};
