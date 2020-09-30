import React from 'react';
import { useSelector} from 'react-redux';
import { SelectPortugalCheckList, SelectNicarahuaCheckList, SelectMarshallIslandCheckList } from '../../state/checkLists/selectors';
import CheckedItem from '../CheckedItem';

const CheckedValues = () => {
    const PortugalList = useSelector((state) => SelectPortugalCheckList(state));
    const NicarahuaList = useSelector((state) => SelectNicarahuaCheckList(state));
    const MarshallIslandList = useSelector((state) => SelectMarshallIslandCheckList(state));

    if (PortugalList || NicarahuaList || MarshallIslandList) {
        return (
        <div className="checkedList-section">
            {PortugalList && <div className="Portugal">
                <h1>Portugal</h1>
                {PortugalList.map((item) => <CheckedItem key={item} id={item} />)}
                </div>}
            {NicarahuaList && <div className="Nicarahua">
                <h1>Nicarahua</h1>
                {NicarahuaList.map((item) => <CheckedItem key={item} id={item} />)}</div>}
            {MarshallIslandList && <div className="MarshallIslandList">
                <h1>Marshall Island</h1>
                {MarshallIslandList.map((item) => <CheckedItem key={item} id={item} />)}</div>}
        </div>
        );
    }

    return (
        <div className="default-section">
            <span>No Value Selected</span>
        </div>
    );
}

export default CheckedValues