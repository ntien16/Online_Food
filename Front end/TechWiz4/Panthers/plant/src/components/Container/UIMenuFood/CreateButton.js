import React from 'react';
import {Button} from 'reactstrap'
function CreateButton(props) {
    let {onHandleCreateNewItemFood}=props;
    let handleCreateNewItemFood=()=>{
        onHandleCreateNewItemFood();
    }
    return (
       <>
       <br/>
       <Button onClick={handleCreateNewItemFood}size='sm' color='success'>
        Create New Item Food
       </Button>
       <Button onClick={handleCreateNewItemFood}size='sm' color='success'>
        Hien Thi So Le
       </Button>
       </>
    );
}

export default CreateButton;