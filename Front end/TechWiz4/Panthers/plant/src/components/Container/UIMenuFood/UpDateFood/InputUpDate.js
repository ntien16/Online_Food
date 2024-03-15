import React, { useEffect, useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";


function InputUpDate(props) {
    let { onHandleUpdateCallBack, listCategory, editItem } = props
    let [menuName, setMenuName] = useState("");
    let [price, setPrice] = useState("");
    let [image, setImage] = useState("");
    let [category, setCategory] = useState("");

    useEffect(() => {
        if (editItem) {
            setMenuName(editItem.menuname);
            setPrice(editItem.price);
            setImage(editItem.image);
            const category = listCategory.find(item => item.categoryname === editItem.categoryName)
            setCategory(category.categoryid);

        }
    }, [editItem]);

    let handleUpdate = () => {
        onHandleUpdateCallBack({
            menuName: menuName,
            price: price,
            image: image,
            categoryID: category,
            menuid: editItem.menuid
        });
    }
    //Hiển thị category
    let CategoryItems = listCategory.map((category, index) => {
        return (
            <option value={category.categoryid} key={index}>{category.categoryname}</option>
        );
    });
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
                        value={menuName}
                        onChange={(event) => {
                            setMenuName(event.target.value);
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
            <Button color="primary" onClick={handleUpdate}>
                Update
            </Button>
            <Button color="danger">Reset</Button>
        </>
    );
}

export default InputUpDate;