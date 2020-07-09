import React, { useState, useEffect } from "react";
import './pageHeader.less';
import { Menu, Dropdown, Button } from 'antd';
import { FundTwoTone, PieChartOutlined, RadarChartOutlined, BulbOutlined, CloudSyncOutlined, DownOutlined,MenuUnfoldOutlined } from '@ant-design/icons';

interface Prop{
    toggleCollapsed: () => void;
}

function Header(props: Prop) {
    const menu = (
        <Menu>
            <Menu.Item>
                <span>退出登录</span>
            </Menu.Item>
        </Menu>
    );
    const {toggleCollapsed} = props;
    useEffect(() => {


    }, [])
    return (
        <div className="Header">
            <div className="left">
                <MenuUnfoldOutlined className="iconStyle" onClick={toggleCollapsed}/>
                <FundTwoTone className="iconStyle" />
                <span className="title">CityWork OS</span>
            </div>
            <div className="right">
                <PieChartOutlined className="iconStyle" />
                <RadarChartOutlined className="iconStyle" />
                <BulbOutlined className="iconStyle" />
                <CloudSyncOutlined className="iconStyle" />
                <Dropdown overlay={menu}>
                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                        admin <DownOutlined />
                    </a>
                </Dropdown>
            </div>
        </div>
    )
}
export default Header;