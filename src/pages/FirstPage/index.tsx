import React, { useState, useEffect } from "react";
import Header from './components/Header/pageHeader';
import LeftPanel from './components/LeftPanel/leftPanel';
import RightPanel from './components/RightPanel/rightPanel';
import './index.less';
function About() {
    const [collapsed, toggleCollapsed] = useState(false);
    useEffect(() => {


    }, [])
    return (
        <div className="firstPage">
            <Header toggleCollapsed={() => toggleCollapsed(!collapsed)}/>
            <div className="content">
                <LeftPanel collapsed={collapsed}/>
                <RightPanel />
            </div>
        </div>
    )
}
export default About;