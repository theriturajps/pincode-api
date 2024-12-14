const mongoose = require('mongoose')

const url = process.env.DB

const connectDB = async () => {
	try {
		await mongoose.connect(url)
		console.log(`Connected to MongoDB DB`)
	} catch (error) {
		console.log(`ERROR : ${error}`)
		process.exit(1)
	}
}

module.exports = connectDB