import React from 'react';
import ZuHe from './components/ZuHe';
import StateImp from './components/StateImp';

// 本页面演示组合和继承---类比vue的slot

function detailPage() {

   
    return (
    <div className="detail">
        <div className="content">
            <ZuHe></ZuHe>
            <StateImp />
        </div>
    </div>
    )
}

export default detailPage;