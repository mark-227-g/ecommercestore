const mongoose = require("mongoose");

const {Schema} = mongoose;

const puzzlecategorySchema = new Schema ({
    name: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String,
        required: true,
        trim: true
    }
});

const PuzzleCategory = mongoose.model("PuzzleCategory",puzzlecategorySchema)

module.exports = PuzzleCategory;