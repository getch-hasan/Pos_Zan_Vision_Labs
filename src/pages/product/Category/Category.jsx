import React from 'react';
import AddButton from '../../../components/button/AddButton';
import ImportButton from '../../../components/button/ImportButton';
import CategoryButtons from './CategoryButtons';

const Category = () => {
  return (
    <>
      <div className='md:px-1'>
        <div className='flex gap-4'>
          <AddButton buttonName="Add Sale" ></AddButton>
          <ImportButton buttonName="Import Category"></ImportButton>
        </div>
        <div className='mt-5'>
          <CategoryButtons></CategoryButtons>
        </div>
      </div>
    </>

  );
};

export default Category;