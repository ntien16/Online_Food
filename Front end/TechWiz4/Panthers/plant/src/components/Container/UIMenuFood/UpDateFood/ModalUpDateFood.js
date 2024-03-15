import React from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import InputUpDate from './InputUpDate';

function ModalUpDateFood(props) {
    let {onHandleUpdateCallBack,onHanldeShowUpdate,onHanldeCloseUpdate,showUpDateForm,listCategory,editItem}=props
    let handleCloseModalUpdate=()=>
    {
        onHanldeCloseUpdate()
    }
    return (
        <Modal isOpen={showUpDateForm}>
            <ModalHeader>
                <h3>
                    UpDate Item Food
                </h3>
            </ModalHeader>
            <ModalBody>
            <InputUpDate 
            onHandleUpdateCallBack={onHandleUpdateCallBack}
            listCategory={listCategory}
            editItem={editItem}
           
            />
            </ModalBody>
            <ModalFooter>
                <Button color='danger' onClick={handleCloseModalUpdate}>Close</Button>
            </ModalFooter>
        </Modal>
    );
}

export default ModalUpDateFood;