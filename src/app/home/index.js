import React, { Component } from 'react'
// import {Row, Col} from 'antd'
import BreadCrumb from '../components/breadCrumb/index'

export default class Home extends Component {
    render() {
        return (
            <div>
                <BreadCrumb />
                <div>
                    Hello,
                </div>
            </div>
        )
    }
}
