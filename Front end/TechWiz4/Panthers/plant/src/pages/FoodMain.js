import React, { useState } from 'react';
import Commonsection from '../components/Container/UIMenuFood/Commonsection';
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col } from 'reactstrap';
// import FoodList from '../components/Container/UIMenuFood/FoodList';
import "../styles/foodmain.css";
import { useDispatch, useSelector } from 'react-redux';
// import { setCategoryFilter, setSortOption, setSearchQuery } from '../Redux/FoodRedux/filterActions';
// import MenuDisplayContainerContext from "../components/Container/MenuDisplayContainer"
import Foodpage from "../pages/FoodPage"

function FoodMain(props) {
   
    let dispatch = useDispatch();
    // let { categoryFilter, sortOption, searchQuery } = useSelector(state => state.filter);
    let [selectedCategory, setSelectedCategory] = useState("");
    let [selectedSortOption, setSelectedSortOption] = useState("");
    let [searchText, setSearchText] = useState("");

   
    let handleCategoryFilter = (e) => {
        let selectedValue = e.target.value;
        setSelectedCategory(selectedValue);
    };

    let handleSortOption = (e) => {
        let selectedValue = e.target.value;
        setSelectedSortOption(selectedValue);
    };

    let handleSearchQuery = (e) => {
        let searchValue = e.target.value;
        setSearchText(searchValue);
    };
    return (
        <Helmet title="Foods">
            <Commonsection title="Foods List" />
            <section>
                <Container>
                    <Row>
                        <Col lg="3" md="3">
                            <div className='filter_widget' >
                                <select onChange={handleCategoryFilter} value={selectedCategory}>
                                    <option value="All">Filter By Category</option>
                                    <option value="BREAKFAST">Breakfast</option>
                                    <option value="LUNCH">Lunch</option>
                                    <option value="DINNER">Dinner</option>
                                    <option value="DRINK">Drink</option>
                                </select>
                            </div>
                        </Col>
                        <Col lg="3" md="3" className='text-end' >
                            <div className='filter_widget'> 
                            <select onChange={handleSortOption} value={selectedSortOption}>
                                <option>Sort By</option>
                                <option value="ascending">Ascending</option>
                                <option value="descending">Descending</option>
                            </select>
                            </div>

                           
                        </Col>
                        <Col lg="6" md="12">
                            <div className='search_box'>
                                <input type='text' placeholder='Search...........'
                                    onChange={handleSearchQuery}
                                    value={searchText} />
                                <span>
                                    <i class="ri-search-line"></i>
                                </span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                    <Row>
                        {
                            <Foodpage
                                selectedCategory={selectedCategory}
                                selectedSortOption={selectedSortOption}
                                searchText={searchText}
                            />
                        }
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
}

export default FoodMain;