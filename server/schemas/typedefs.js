const { gql } = require('apollo-server-express');

const typeDefs = gql`
type PuzzleCategory {
    _id: ID
    name:String
    image:String    
  }
  type Puzzle {
    _id: ID
    name:String
    description:String
    image:String
    puzzlecategory:PuzzleCategory
  }
  type Query {
    puzzle(puzzleId:ID):Puzzle
    puzzles(puzzlecategoryId:ID):[Puzzle]
    puzzlecategory(puzzlecategoryId:ID):PuzzleCategory
    puzzlecategorys:[PuzzleCategory]
  }

  `;

module.exports = typeDefs;