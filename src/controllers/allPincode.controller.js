const pincodeDB = require('../model/pincode.js')

const getAllPincode = async (req, res) => {
  try {
    const allData = await pincodeDB.find();
    res.status(200).json(allData);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = { getAllPincode }