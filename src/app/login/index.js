import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Form, Icon, Input, Button, message, } from 'antd';
import { setUserState } from '../../store/action/user-action'
import './login.css'

class NormalLoginForm extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            const { user } = this.props.userinfo;
            if(err) return;

            if (user.username === values.username && user.password === values.password) {
                this.props.actions.setUserState(1);
                this.props.history.push('/app/home');
                return;
            }

            if (user.username1 === values.username && user.password1 === values.password) {
                this.props.actions.setUserState(2);
                this.props.history.push('/app/home');
                return;
            }

            message.error('请检查用户名密码');
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className='login-main'>
                <Form onSubmit={this.handleSubmit} className='login-form'>
                    <h2>LOGIN</h2>
                    <Form.Item>
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: '请输入用户名' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="admin/she" />
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: '请输入密码' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="admin/she" />
                        )}
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

//mapStateToProps 使当前具有state
const mapStateToProps = state => {
    return {
        userinfo: state.setUserState
    }
}


//使当前具有 dispatch, bindActionCreators省略dispatch操作 可直接actions.xxx
const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators({
            setUserState
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WrappedNormalLoginForm);