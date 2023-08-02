import React from 'react';
import PuzzleCategoryList from '../components/PuzzleCategoryList';
import { useQuery } from '@apollo/client';
import { QUERY_PUZZLECATEGORYS } from '../utils/queries';
const PuzzleCategoryPage = () => {
  const { loading, data } = useQuery(QUERY_PUZZLECATEGORYS);
  const puzzlecategorys = data?.puzzlecategorys || [];

  return (
    <main>
      <h2>cat</h2>
      <div className="container-fluid w-100">
        
          {loading ? (
            <div>Loading...</div>
          ) : (
            <PuzzleCategoryList
              puzzlecategorys={puzzlecategorys}
              title="Puzzle Category"
            />
          )}
      </div>
    </main>
  );
};

export default PuzzleCategoryPage;
