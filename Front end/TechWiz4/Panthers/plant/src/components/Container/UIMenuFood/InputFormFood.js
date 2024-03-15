import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, FormFeedback, FormText } from "reactstrap";

function InputFormFood(props) {
  let { onHandleCreateNewItemFoodCallback, listCategory, listMenuCategory } = props
  let [menuname, setMenuname] = useState("");
  let [price, setPrice] = useState("");
  let [image, setImage] = useState("");
  let [category, setCategory] = useState("");

  let handleCreate = () => {

    
    let itemNew = {
      menuname: menuname,
      price: price,
      image: image,
      categoryID: category,
    };
    // console.log("itemNew", itemNew);

    if(10<parseFloat(price)||parseFloat(price)<20)
    {
      console.log("error: giá phải nhỏ hơn 20 và lớn hơn 10");
    }else{
      onHandleCreateNewItemFoodCallback(itemNew);
    }
    
  }
  //Hiển thị category
  let CategoryItems=listCategory.map((category,index)=>{
    return(
      <option value={category.categoryid} key={index}>{category.categoryname}</option>
    );
  });
  console.log("category_list trong category_list",CategoryItems);
  
  return (
    <>
      <Form >
        <FormGroup>
          <Label for="NameFood">Name</Label>
          <Input
            id="NameFood"
            name="NameFood"
            placeholder="Input name"
            type="text"
            value={menuname}
            onChange={(event) => {
              setMenuname(event.target.value);
              console.log("menuname:", event.target.value);
            }}
          />

        </FormGroup>

        <FormGroup>
          <Label for="price">Price</Label>
          <Input id="price" name="price" placeholder="Input price"
            type="text"
            value={price}
            onChange={(event) => {
              setPrice(event.target.value);
            }}
          />
        </FormGroup>

        <FormGroup>
          <Label for="image">Hình Ảnh</Label>
          <Input id="image" name="price" placeholder="Input image"
            type="text"
            value={image}
            onChange={(event) => {
              setImage(event.target.value);
            }}
          />
        </FormGroup>

        <FormGroup>
          <Label for="category">Select a category</Label>
          <Input id="category" name="category"
            type="select"
            value={category}
            onChange={(event) => {
              setCategory(event.target.value);
            }}
          >
            {/* {listCategory.map((category, index) => (
              <option key={category.index} value={category.id}>
                {category.categoryname}
              </option>
            ))} */}
            {CategoryItems}
          </Input>
        </FormGroup>

      </Form>
      <Button color="primary" onClick={handleCreate}>
        Create
      </Button>
      <Button color="danger">Reset</Button>
    </>

  );
}

export default InputFormFood;