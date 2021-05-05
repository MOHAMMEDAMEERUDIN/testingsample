import React from 'react';
import styles from '../Styles.js';
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';
import EditIcon from '@material-ui/icons/Edit';

const ActionButtons = (props) => {
  const { id, setEnabliliy } = props;

  const handleDelete = e => {
    const allUsers = JSON.parse(localStorage.getItem('users'));
    const editedUserEnablility = [];
    allUsers.forEach(function(u){
        if(u.id === id){
            u.enabled = false;
        };
        editedUserEnablility.push(u);
    });
    localStorage.setItem('users', JSON.stringify(editedUserEnablility));
    setEnabliliy(false);
  };

  const handleEdit = e => {
    alert(`edit${id}`);
  };

  return (
    <>
        <div style={styles.iconAlign}>
            <EditIcon onClick={handleEdit}/>                
            <DeleteForeverRoundedIcon onClick={handleDelete}/>
        </div>
    </>
  )
}

export default ActionButtons;