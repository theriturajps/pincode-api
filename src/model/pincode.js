const { mongoose } = require('mongoose');

const pincodeSchema = new mongoose.Schema({
  CircleName: {
		type: String,
		required: true,
		trim: true
	},
  RegionName: {
		type: String,
		required: true,
		trim: true
	},
  DivisionName: {
		type: String,
		required: true,
		trim: true
	},
  OfficeName: {
		type: String,
		required: true,
		trim: true
	},
  Pincode: {
		type: Number,
		required: true,
		trim: true
	},
  OfficeType: {
		type: String,
		required: true,
		trim: true
	},
  Delivery: {
		type: String,
		required: true,
		trim: true
	},
  District: {
		type: String,
		required: true,
		trim: true
	},
  StateName: {
		type: String,
		required: true,
		trim: true
	},
  Latitude: {
		type: Number,
		required: true
	},
  Longitude: {
		type: Number,
		required: true
	}
})

const Pincode = mongoose.model('Pincode', pincodeSchema)

module.exports = Pincode