export let setCategoryFilter = (category) => {
    return {
        type: 'SET_CATEGORY_FILTER',
        payload: category
    };
};

export let setSortOption = (option) => {
    return {
        type: 'SET_SORT_OPTION',
        payload: option
    };
};

export let setSearchQuery = (query) => {
    return {
        type: 'SET_SEARCH_QUERY',
        payload: query
    };
};
