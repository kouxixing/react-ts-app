import React, { Component } from 'react';
import Header from "../../components/Header/header";
import classnames from "classnames";
interface Props {
    text: string
}
interface State {
    list: number[]
}
class About extends Component<Props, State>{
    constructor(props: any) {
        super(props);
        this.state ={
            list: []
        }
    }
    render() {
        return (
        <div className={classnames("aaaaa", "nnnnnn")}>
            <Header text="考核页面"></Header>
            
        </div>
        )
    }
}
export default About;