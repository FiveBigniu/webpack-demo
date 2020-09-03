import React, { Component } from 'react'
import { Table, Button, Popconfirm } from 'antd';
import { Link } from 'react-router-dom'
import BreadCrumb from '../../components/breadCrumb'



export default class NomalTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedRowKeys: [],
            loading: false,
            sourceData: [{
                key: '0',
                name: 'Edward King 0',
                age: '32',
                address: 'London, Park Lane no. 0',
            }, {
                key: '1',
                name: 'Edward King 1',
                age: '32',
                address: 'London, Park Lane no. 1',
            }],
            count: 2,
        };
        this.columns = [{
            title: 'Name',
            dataIndex: 'name',
            render: (text, record) => <Link to={`/app/table/detail/${record.key}`}>{text}</Link>,
        }, {
            title: 'Age',
            dataIndex: 'age',
        }, {
            title: 'Address',
            dataIndex: 'address',
        }, {
            title: 'operation',
            dataIndex: 'operation',
            render: (text, record) => (
                this.state.sourceData.length >= 1
                    ? (
                        <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
                            <div style={{color:'blue',cursor:'pointer'}}>Delete</div>
                        </Popconfirm>
                    ) : null
            ),
        }]
    }

    start = () => {
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({
                selectedRowKeys: [],
                loading: false,
            });
        }, 1000);
    }

    onSelectChange = (selectedRowKeys) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
    }
    handleDelete = (key) => {
        const sourceData = [...this.state.sourceData];
        this.setState({ sourceData: sourceData.filter(item => item.key !== key) });
    }
    handleAdd = () => {
        const { count, sourceData } = this.state;
        const newData = {
            key: count,
            name: `Edward King ${count}`,
            age: 32,
            address: `London, Park Lane no. ${count}`,
        };
        this.setState({
            sourceData: [...sourceData, newData],
            count: count + 1,
        });
    }

    render() {
        const { loading, selectedRowKeys, sourceData } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        const hasSelected = selectedRowKeys.length > 0;
        return (
            <div>
                <BreadCrumb first='Table' second='NomalTable'></BreadCrumb>
                <div style={{ marginBottom: 16 }}>
                    <Button
                        type="primary"
                        onClick={this.start}
                        disabled={!hasSelected}
                        loading={loading}
                    >
                        Reload
                    </Button>
                    <span style={{ marginLeft: 8 }}>
                        {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
                    </span>
                    <Button onClick={this.handleAdd} type="primary" style={{ marginBottom: 16 }}>
                        Add a row
                    </Button>
                </div>
                <Table rowSelection={rowSelection} bordered columns={this.columns} dataSource={sourceData} />
            </div>
        );
    }
}
