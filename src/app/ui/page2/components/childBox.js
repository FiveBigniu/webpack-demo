import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Button } from 'antd';

class Child extends Component {
    // state = { childData: 'child' }

    componentDidMount() {
        this.props.onValue('child');
    }

    handleSend = (data) => {
        console.log(data)
        this.props.onValue('change child');
    }

    render() {
        const { data1, info } = this.props;
        return (
            <div>
                <span>获取父 : {data1}</span><br />
                <span>redux : {info.text}</span><br />

                <Button type="primary" onClick={this.handleSend.bind(this)}>
                    子传父
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
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Child);