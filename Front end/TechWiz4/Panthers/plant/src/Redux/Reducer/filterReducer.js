let initialState = {
    categoryFilter: '',
    sortOption: '',
    searchQuery: ''
};

let filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CATEGORY_FILTER':
            return {
                ...state,
                categoryFilter: action.payload
            };
        case 'SET_SORT_OPTION':
            return {
                ...state,
                sortOption: action.payload
            };
        case 'SET_SEARCH_QUERY':
            return {
                ...state,
                searchQuery: action.payload
            };
        default:
            return state;
    }
};

export default filterReducer;
