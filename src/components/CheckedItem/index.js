import React from 'react';
import {useDispatch} from 'react-redux';
import { unCheckAction } from '../../state/checkLists/actions';

const CheckedItem = ({id}) => {
    const dispatch = useDispatch();

    const syncCheckList = (id) => {
        document.getElementById(id).checked = false;
    };

    const onClick = (event) => {
        dispatch(unCheckAction(id, event.target));
        syncCheckList(id);
    };
    
    return (
        <div className='selected-item'>
            {id}
            <button onClick={onClick}>x</button>
        </div>
    );
}

export default CheckedItem;