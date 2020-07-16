import React, {useState}from 'react';
import { InputNumber } from 'antd';
import './index.less';

function Index(){
    const [celsius, changeCel] = useState(12);
    const [fahrenheit, changeFah] = useState(30);

    const changeInput = (type: string, val: any) => {
        if(type === 'cel'){
            changeFah((val * 9 / 5) + 32);
        }else{
            changeCel((val - 32) * 5 / 9);
        }
        
       
    }
    return (
        <div className="stateImp">
            <div><InputNumber placeholder='请输入数据'  value={celsius} onChange={(value) => changeInput('cel', value)} /></div>
            <div><InputNumber placeholder='请输入数据'  value={fahrenheit} onChange={(value) => changeInput('fah', value)} /></div>
        </div>
    )
}

export default Index;