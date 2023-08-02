const mongoose = require("mongoose");

const {Schema} = mongoose;

const puzzleSchema = new Schema ({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String,
        required: true,
        trim: true
    },
    puzzlecategory: {
        type: Schema.Types.ObjectId,
        ref: "PuzzleCategory"
    }
})

const Puzzle = mongoose.model("Puzzle",puzzleSchema)

module.exports = Puzzle;