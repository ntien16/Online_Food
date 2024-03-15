import React from 'react';
import MenuDisplayContainer from "../components/Container/MenuDisplayContainer"
function FoodPage(props) {
    let {selectedCategory,selectedSortOption,searchText}=props
    return (
        <>
        <MenuDisplayContainer 
           selectedCategory={selectedCategory}
           selectedSortOption={selectedSortOption}
           searchText={searchText}
                      />
        </>
    );
}

export default FoodPage;