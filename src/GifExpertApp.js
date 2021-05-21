import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch']);

  // const handleAdd = () => {
  //   // setCategories( [...categories, 'HunterXHunter' ]);
  //   setCategories((cats) => [...cats, 'HunterXHunter']);
  // };

  return (
    <>
      <h2 className="animate__animated animate__bounce animate__heartBeat">GifExpertApp</h2>
      <AddCategory setCategories={ setCategories } />
      <hr />

      <ol>
        {categories.map(category => (
          <GifGrid 
          key={ category }
          category={ category } />
        ))}
      </ol>
    </>
  );
};
