const pincodeDB = require('../model/pincode.js')

const createPincode = async (req, res) => {
	try {
		if (req.body.role === 'user') {
			const newPincode = new pincodeDB(req.body);
			await newPincode.save();
			res.status(201).json(newPincode);
		} else {
			res.status(500).json({ error: 'you are not authorized' })
		}
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
}

module.exports = { createPincode }