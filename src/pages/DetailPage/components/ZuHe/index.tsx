import React from 'react';
import Header from '../../../../components/Header/header';

// 本页面演示组合和继承---类比vue的slot
function Contacts(){
    return <span>2222</span>
}

function detailPage() {

   
    return (
    <div className="detail">
        <div className="content">
            <Header text="详情" left={<Contacts />}><span>111</span></Header>
        </div>
    </div>
    )
}

export default detailPage;