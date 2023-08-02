const { Puzzle,PuzzleCategory } = require('../models');
  ////const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../middleware/auth');

const resolvers = {
  Query: {
   
    puzzlecategory: async (parent, {puzzlecategoryId})=>{
      console.log("run puzzlecategory: "+puzzlecategoryId);
      return await PuzzleCategory.findOne({_id:puzzlecategoryId});
    },

    puzzlecategorys: async () => {
      console.log("run puzzlecategorys");
      return await PuzzleCategory.find();
    },




    puzzles: async (parent, {puzzlecategoryId})=>{
      const params = {};

      if (puzzlecategoryId){
       params.puzzlecategory=puzzlecategoryId;
      };
      console.log("run puzzles: "+puzzlecategoryId);
     // return await Puzzle.find();
      return await Puzzle.find(params).populate('puzzlecategory');
    },

    puzzle: async (parent, {puzzleId})=>{
      const params = {};
      
      if (puzzleId){
       params._id=puzzleId;
      };
      console.log("run puzzle: "+puzzleId);

      return await Puzzle.findOne({_id:puzzleId}); 
    }

}


};

module.exports = resolvers;

