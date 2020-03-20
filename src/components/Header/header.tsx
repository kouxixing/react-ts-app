import * as React from 'react';

export default class User extends React.Component<any>{
    render() {
        return <div>
            <p>我是User组件</p>
            <p>我的名字是{this.props.name}</p>
        </div>
    };
}
