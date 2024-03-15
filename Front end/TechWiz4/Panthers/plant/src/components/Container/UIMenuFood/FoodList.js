import React from 'react';
import Food from './Food';

function FoodList(props) {
    let {listMenuFood,selectedCategory,selectedSortOption,searchText}=props
    // ,selectedCategory,selectedSortOption,searchText
    return (
        <>
        <Food listMenuFood={listMenuFood} 
         selectedCategory={selectedCategory}
         selectedSortOption={selectedSortOption}
         searchText={searchText}
                      />
        </>
    );
}

export default FoodList;
