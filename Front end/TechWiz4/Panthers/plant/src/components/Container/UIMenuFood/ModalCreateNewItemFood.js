import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import InputFormFood from './InputFormFood'
function ModalCreateNewItemFood(props) {
    let {showModal, onHandleCloseModal,onHandleCreateNewItemFoodCallBack, listCategory,listMenuCategory}=props
    let handleCloseModal=()=>
    {
        onHandleCloseModal();
    }
    return (
        <Modal isOpen={showModal}>
            <ModalHeader>
                <h3>Create New Item</h3>
            </ModalHeader>
            <ModalBody>
            <InputFormFood 
            onHandleCreateNewItemFoodCallback={onHandleCreateNewItemFoodCallBack} 
             listCategory={listCategory}
             listMenuCategory={listMenuCategory}
                />
            </ModalBody>
            <ModalFooter>
                <Button color='danger' onClick={handleCloseModal}>
                Close
                </Button>
            </ModalFooter>
        </Modal>
    );
}

export default ModalCreateNewItemFood;