const mongoose = require("mongoose");

const CodeSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    code: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        // expires: 60 * 60, // 1 hour
        default: Date.now,
    },
});

module.exports = mongoose.model("Code", CodeSchema);
