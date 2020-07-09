import React, { useState, useEffect, useRef } from "react";
import { Form, Input, Button, Checkbox } from 'antd';
import './loginForm.scss';
import { useHistory } from "react-router-dom";

function LoginForm(props: any) {
    const [form] = Form.useForm();
    const [formLayout] = useState('horizontal');
    const history = useHistory();

    const formItemLayout =
        formLayout === 'horizontal'
            ? {
                labelCol: { span: 4 },
                wrapperCol: { span: 14 },
            }
            : null;

    function onChange(e: any) {
        console.log(`checked = ${e.target.checked}`);
    }

    function signIn(){
        history.push('/first');
    }

    const userNameRef = useRef(null);

    useEffect(() => {
        console.log(userNameRef  )
    }, [])
    return (
        <div className="form">
            <Form
                {...formItemLayout}
                form={form}
                initialValues={{ layout: formLayout }}
            >
                <span className="title">欢迎登录信息资源平台</span>
                <Input placeholder="用户名/手机号/邮箱" className="mr itemInput" ref={userNameRef}/>
                <Input placeholder="请输入8位数密码" className="mr itemInput" />
                <div className="mr bot-but">
                    <Checkbox onChange={onChange}>记住登录名</Checkbox>
                    <div className="right-btn">
                        <span>免费注册</span>
                        <span>忘记密码</span>
                    </div>
                </div>
                <Button type="primary" block  onClick={signIn}>
                    登录
                </Button>
                <div className="split-line">
                    <span></span>
                    <span>其他登录方式</span>
                    <span></span>
                </div>
            </Form>
        </div>
    )
}
export default LoginForm;