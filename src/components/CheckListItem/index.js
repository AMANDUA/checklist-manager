import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import { toggleCheckBoxAction } from '../../state/checkLists/actions';
import { SelectCheckBoxSelected } from '../../state/checkLists/selectors';

const CheckListItem = ({id}) => {
    const dispatch = useDispatch();
    const isChecked = useSelector((state) => SelectCheckBoxSelected(state, id));

    const handleToggle = (event) => {
      dispatch(toggleCheckBoxAction(event.target));
    }

    return (
        <>
            <input type="checkbox" id={id} name={id} value={id} onChange={handleToggle} checked={isChecked}/>
            <label htmlFor={id}>{id}</label><br />
        </>
    );
}

export default CheckListItem;