export const SelectPortugalCheckList = (state) => Object.keys(state.checkLists.checkList.Portugal).length >= 1 && Object.keys(state.checkLists.checkList.Portugal);
export const SelectNicarahuaCheckList = (state) => Object.keys(state.checkLists.checkList.Nicarahua).length >= 1 && Object.keys(state.checkLists.checkList.Nicarahua);
export const SelectMarshallIslandCheckList = (state) => Object.keys(state.checkLists.checkList.MarshallIsland).length >= 1 && Object.keys(state.checkLists.checkList.MarshallIsland);

export const SelectCheckBoxSelected = (state, id) => !!state.checkLists.checkedItems[id];