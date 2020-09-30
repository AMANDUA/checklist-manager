import React from 'react';

import GlobalHeader from '../GlobalHeader'
import CheckList from '../CheckList'
import CheckedValues from '../CheckedValues'

const HomePage = () => {
    return (
        <>
            <GlobalHeader />
            <div className="app-body">
                <div className="check-list-wrapper">
                 <CheckList />
                </div>
                <div className="checked-values-wrapper">
                <CheckedValues />
                </div>
            </div>
        </>
    );
}

export default HomePage;