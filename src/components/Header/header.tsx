import React from 'react';
import "./header.less";

interface Props {
    text: string,
    name?: string,
    left: any
}
const Header: React.FC<Props> = (props) => {
    const { text, name, left } = props;
        return (
        <div className="header">
            <span className="title">{text}</span>
            <span>{name}</span>
             {left}
             <div className="right">{props.children ? props.children : ''}</div>
        </div>
        )
}
export default Header;
