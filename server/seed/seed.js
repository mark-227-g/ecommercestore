const db = require("../config/connection");
const {Puzzle,PuzzleCategory} = require("../models");

/************************************** */
// Seed PuzzleCategory
/************************************** */
db.once("open", async () => {
    await PuzzleCategory.deleteMany();
    const puzzlecategory = await PuzzleCategory.insertMany([
        {
            name: "Cars",
            image:"Cars"
        },    
        {
            name: "Dinosaurs",
            image:"Dinosaurs"
        },
        {
            name: "Flowers",
            image:"Flowers"
        },
        {
            name: "Anime",
            image:"Anime"
        },
        {
            name: "Constellations",
            image:"Constellations"
        },
        {
            name:"Boats",
            image:"Boats"
        },
        {
            name:"Buildings",
            image:"Buildings"
        },
        {
            name:"Animals",
            image:"Animals"
        },
        {
            name:"Nature",
            image:"Nature"
        },
        {
            name:"People",
            image:"People"
        }
    ])

console.log("PuzzleCategory seeded");

/************************************** */
// Seed Puzzle
/************************************** */

await Puzzle.deleteMany();

const puzzle = await Puzzle.insertMany([
    {
        name: "Cars1",
        image:"Cars1",
        description:"A 1000 piece puzzle.",
        puzzlecategory:puzzlecategory[0]._id
    },    
    {
        name: "Dinosaurs1",
        image:"Dinosaurs1",
        description:"A 1000 piece puzzle.",
        puzzlecategory:puzzlecategory[1]._id
    },
    {
        name: "Flowers1",
        image:"Flowers1",
        description:"A 1000 piece puzzle.",
        puzzlecategory:puzzlecategory[2]._id
    },
    {
        name: "Anime1",
        image:"Anime1",
        description:"A 1000 piece puzzle.",
        puzzlecategory:puzzlecategory[3]._id
    },
    {
        name: "Constellations1",
        image:"Constellations1",
        description:"A 1000 piece puzzle.",
        puzzlecategory:puzzlecategory[4]._id
    },
    {
        name:"Boats1",
        image:"Boats1",
        description:"A 1000 piece puzzle.",
        puzzlecategory:puzzlecategory[5]._id
    },
    {
        name:"Buildings1",
        image:"Buildings1",
        description:"A 1000 piece puzzle.",
        puzzlecategory:puzzlecategory[6]._id
    },
    {
        name:"Animals1",
        image:"Animals1",
        description:"A 1000 piece puzzle.",
        puzzlecategory:puzzlecategory[7]._id
    },
    {
        name:"Nature1",
        image:"Nature1",
        description:"A 1000 piece puzzle.",
        puzzlecategory:puzzlecategory[8]._id
    },
    {
        name:"People1",
        image:"People1",
        description:"A 1000 piece puzzle.",
        puzzlecategory:puzzlecategory[9]._id
    }
])
console.log("Puzzle seeded")
process.exit();
});