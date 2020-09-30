import React from 'react';
import CheckListItem from '../CheckListItem';


const CheckList = () => {
      return (
        <div className="checkbox-list">
          <div id="Portugal">
            <h1>Portugal</h1>
            <CheckListItem id="Aasiya Jayavant" />
            <CheckListItem id="Luvleen Lawrence" />
            <CheckListItem id="Rey Mibourne" />
            <CheckListItem id="Cayla Brister" />
          </div>
          <div id="Nicarahua">
            <h1>Nicarahua</h1>
            <CheckListItem id="Deveedaas Nandi" />
            <CheckListItem id="Obasey Chidy" />
            <CheckListItem id="Xenie Dolezelova" />
            <CheckListItem id="Ezequiel Dengra" />
          </div>
          <div id="MarshallIsland">
            <h1>Marshall Island</h1>
            <CheckListItem id="Aaron Almaraz" />
            <CheckListItem id="Jelena Denisova" />
          </div>
        </div>
    );
}

export default CheckList;