import {produce} from 'immer';
import { TOGGLE_CHECK, UNCHECK } from './constants';

const initialState = {
    checkList: {
        Portugal: {},
        Nicarahua: {},
        MarshallIsland: {},
    },
    checkedItems: {}
};

const toggleCheck = (draft, checkbox, checkList) => {
    if (checkbox.checked) {
        draft.checkList[checkList.id][checkbox.id] = checkbox.id;
        draft.checkedItems[checkbox.id] = checkbox.id;
    } else {
        delete draft.checkList[checkList.id][checkbox.id];
        delete draft.checkedItems[checkbox.id];
    }
};

const unCheck = (draft, checkboxId, checkList) => {
    delete draft.checkList[checkList.className][checkboxId];
    delete draft.checkList[checkboxId];
};

export default produce((draft, action) => {
    switch (action.type) {
      case TOGGLE_CHECK:
           toggleCheck(draft, action.payload.checkbox, action.payload.checkList);
        break;
      case UNCHECK: 
        unCheck(draft, action.payload.checkboxId, action.payload.checkList);
        break;
        default:
        break;
      }
  }, initialState);
  