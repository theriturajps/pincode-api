const pincodeDB = require('../model/pincode.js')

const createPincode = async (req, res) => {
	try {
		const newPincode = new pincodeDB(req.body);
		await newPincode.save();
		res.status(201).json(newPincode);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
}

module.exports = { createPincode }