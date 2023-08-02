import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import PuzzleList from '../components/PuzleList';

import { QUERY_PUZZLES_BY_CATEGORY } from '../utils/queries';
const PuzzleListPage = () => {
  const {puzzlecategoryId}=useParams();
  console.log("cat: "+puzzlecategoryId)
  
  const { loading, data } = useQuery(QUERY_PUZZLES_BY_CATEGORY, {
    variables:{puzzlecategoryId},
  });
  
   return (
    <main>
      <h2>puz</h2>
      <div className="">   
          {loading ? (
            <div>Loading...</div>
          ) : (
          <PuzzleList
              puzzles={data?.puzzles}
              name="Puzzles"
              puzzlecategoryId={puzzlecategoryId}
            />

            )}
            </div>
        </main>
      );
};

export default PuzzleListPage;