import React, { Component } from 'react'
import BreadCrumb from '../../components/breadCrumb/index'
import { Button } from 'antd'
import ChildBox from './components/childBox'
import SiblingBox from './components/siblingBox'
import './page2.less'

class Page2 extends Component {
    state = {
        data1: 'father',
        data2: '',
    }
    getChildValue = (value) => {
        this.setState({
            data2: value
        })
    }
    changeChild = () => {
        this.setState({
            data1: 'change father'
        })
    }
    render() {
        return (
            <div>
                <BreadCrumb first='UI' second='page2' />

                <div className='father'>
                    <h3>father container</h3> <br />
                    <span>获取子 : {this.state.data2}</span><br />
                    <Button type="primary" onClick={this.changeChild}>
                        父传子
                    </Button>
                </div>

                <div className='child'>
                    <h3>child container</h3> <br />
                    <ChildBox data1={this.state.data1} onValue={this.getChildValue.bind(this)}></ChildBox>
                </div>

                <div className='child'>
                    <h3>sibling container</h3> <br />
                    <SiblingBox data1={this.state.data1} />
                </div>
            </div>
        )
    }
}
export default Page2;