import React from 'react';
import { Table } from 'reactstrap'
import ResultFormItemFood from './ResultFormItemFood'

function ResultFormFood(props) {
  //Nhận lại từ MenuFoodContainer
  let { listMenuFood, onHanldeShowUpdate, onHanldeCloseUpdate,showUpDateForm } = props;
  console.log("listMenuFood in ResultFormFood", listMenuFood);
  return (
    <>
      <br />
      <br />
      <h3>Danh sách Menu </h3>
      <Table hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Image</th>
            <th>Category</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <ResultFormItemFood
            listMenuFood={listMenuFood}
            onHanldeShowUpdate={onHanldeShowUpdate}
          />
        </tbody>
      </Table>
    </>
  );
}

export default ResultFormFood;