import React, { useEffect } from "react";
import { Table, Space } from 'antd';
import './rightPanel.less';
import Counter from '../../../../components/Counter/counter';
import CsCounter from '../../../../components/Counter/csCounter';

import { QuestionCircleOutlined, DeleteOutlined } from '@ant-design/icons';

function About() {
    const showInfo = (name: string):void => {
       console.log(name);
    }
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Age',
            dataIndex: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
        },
        {
            title: 'Action',
            key: 'action',
            render: (row: any) => (
                <Space size="middle">
                    <QuestionCircleOutlined onClick={() => showInfo(row)}/>
                    <DeleteOutlined />
                </Space>
            ),
        },
    ];
    const data = [];
    for (let i = 0; i < 46; i++) {
        data.push({
            key: i,
            name: `测试${i}`,
            age: 32,
            address: `新安大道${i}`,

        });
    }
    useEffect(() => {


    }, [])
    
    const pagination = (data: any) => {
       return {
        total: data.length,
        showTotal: () => `共${data.length}条`,
        defaultPageSize: 10,
        defaultCurrent: 1,
        showQuickJumper: true
       };
    };

    return (
        <div className="rightPanel">
            <Table rowSelection={{ columnTitle: '' }} columns={columns} dataSource={data} pagination={pagination(data)}/>
            <Counter />
            <CsCounter />
        </div>
    )
}
export default About;