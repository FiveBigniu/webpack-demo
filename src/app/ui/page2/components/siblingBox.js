
import React, { Component } from 'react'
import { Button } from 'antd'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import setCommunication from '../../../../store/action/communication-action'

class TabsModal extends Component {
    state = { visible: false }

    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    handleSend = (e) => {
        // this.setState({
        //     visible: false,
        // })
        this.props.actions.setCommunication()
    }

    handleCancel = (e) => {
        this.setState({
            visible: false,
        })
    }

    render() {
        const { data1, info } = this.props;
        return (
            <div>
                <span>获取父 : {data1}</span><br />
                <span>redux : {info.text}</span><br />

                <Button type="primary" onClick={this.handleSend.bind(this)}>
                    修改redux - (兄弟传值)
                </Button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        info: state.setCommunication
    }
}

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators({
            setCommunication
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TabsModal);