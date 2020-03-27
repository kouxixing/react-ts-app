import React, { Component } from 'react';
import "./header.scss";
import { Button, Radio } from 'antd';
import 'antd/dist/antd.css';
interface Props {
    text: string
}
interface State {
    list: number[]
}
class Header extends Component<Props, State>{
    constructor(props: any) {
        super(props)
    }
    render() {
        return (
        <div className="header">
            <span className="title">{this.props.text}</span>
            <Button type="primary">Button</Button>
        </div>
        )
    }
}
export default Header;
