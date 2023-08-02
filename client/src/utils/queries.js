import { gql } from '@apollo/client';

export const QUERY_PUZZLECATEGORYS = gql`
query Puzzlecategorys {
  puzzlecategorys {
    _id
    name
    image
  }
}
`;

export const QUERY_PUZZLE = gql`
query Puzzle($puzzleId: ID) {
  puzzle(puzzleId: $puzzleId) {
    name
    description
    _id
    image
    puzzlecategory {
      _id
      name
      image
    }
  }
}
`;

export const QUERY_PUZZLES_BY_CATEGORY = gql`
query Puzzles($puzzlecategoryId: ID) {
  puzzles(puzzlecategoryId: $puzzlecategoryId) {
    _id
    name
    description
    image
    puzzlecategory {
      _id
      name
      image
    }
  }
}
`;
