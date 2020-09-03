import React, { Component } from 'react'
import { Alert } from 'antd'
import { connect } from 'react-redux'
import BreadCrumb from '../../components/breadCrumb/index'
import Box from './components/box'

class Page1 extends Component {
    render() {
        const { userState } = this.props.userinfo;
        return (
            <div>
                <BreadCrumb first='UI' second='page1' />
                <div id='page1'>ttttt</div>
                {userState === 2
                    ? <Alert message="当前是路人权限，" type="error" />
                    : <Box></Box>
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        userinfo: state.setUserState
    }
}

export default connect(mapStateToProps)(Page1)