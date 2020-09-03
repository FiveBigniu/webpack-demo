import React, { Component } from 'react'
import { Skeleton,Alert } from 'antd'

export default class Box extends Component {
    render() {
        return (
            <div>
                <Alert message="当前是admin权限" type="success" />
                <Skeleton avatar paragraph={{ rows: 4 }} />
            </div>
        )
    }
}
