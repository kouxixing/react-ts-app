import React, { useState, useEffect } from "react";
import { Menu, Button } from 'antd';
import {
    AppstoreOutlined,
    ContainerOutlined,
    MailOutlined,
} from '@ant-design/icons';
import './leftPanel.less';

interface Props {
    collapsed:boolean
}

function About(props: Props) {
    const { SubMenu } = Menu;
    const { collapsed } = props;

    useEffect(() => {


    }, [])
    return (
        <div className="leftPanel">
            <div>
                {/* <Button type="primary" onClick={() => toggleCollapsed(!collapsed)} style={{ marginBottom: 16 }}>
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
                </Button> */}
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    inlineCollapsed={collapsed}
                >
                    <Menu.Item key="1" icon={<ContainerOutlined />}>Option 3</Menu.Item>
                    <Menu.Item key="2" icon={<ContainerOutlined />}>Option 3</Menu.Item>
                    <Menu.Item key="3" icon={<ContainerOutlined />}>Option 3</Menu.Item>
                    <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
                        <Menu.Item key="15">Option 5</Menu.Item>
                        <Menu.Item key="16">Option 6</Menu.Item>
                        <Menu.Item key="17">Option 7</Menu.Item>
                        <Menu.Item key="18">Option 8</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<MailOutlined />} title="Navigation One">
                        <Menu.Item key="25">Option 5</Menu.Item>
                        <Menu.Item key="26">Option 6</Menu.Item>
                        <Menu.Item key="27">Option 7</Menu.Item>
                        <Menu.Item key="28">Option 8</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub3" icon={<MailOutlined />} title="Navigation One">
                        <Menu.Item key="35">Option 5</Menu.Item>
                        <Menu.Item key="36">Option 6</Menu.Item>
                        <Menu.Item key="37">Option 7</Menu.Item>
                        <Menu.Item key="38">Option 8</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub4" icon={<AppstoreOutlined />} title="Navigation Two">
                        <Menu.Item key="49">Option 9</Menu.Item>
                        <Menu.Item key="40">Option 10</Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        </div>
    )
}
export default About;