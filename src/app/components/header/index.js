import React, { Component } from 'react';
import { Menu, Layout } from 'antd';
import { withRouter } from 'react-router';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setUserState } from '../../../store/action/user-action'
import './header.css'
import avater from '../../../resource/image/logo.svg';

const { Header } = Layout;
const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class HeaderCustom extends Component {
    state = {
        username: 'Sheila'
    }
    menuClick = e => {
        e.key === 'logout' && this.logout();
    };

    logout = () => {
        // console.log(this.props.userinfo)
        this.props.actions.setUserState(0);
        this.props.history.push('/login');
    };

    render() {
        return (
            <Header>
                <Menu
                    mode="horizontal"
                    style={{ lineHeight: '64px', float: 'right' }}
                    onClick={this.menuClick}
                >
                    <SubMenu title={<span className="header-avatar"><img src={avater} alt="头像" /></span>}>
                        <MenuItemGroup>
                            <MenuItem key="text">你好 - {this.state.username}</MenuItem>
                            <MenuItem key="logout"><span>退出登录</span></MenuItem>
                        </MenuItemGroup>
                    </SubMenu>
                </Menu>
            </Header>
        )
    }
}
const mapStateToProps = state => {
    return {
        userinfo: state.setUserState
    }
}
const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators({
            setUserState
        }, dispatch)
    }
}
const withRouterConstom = withRouter(HeaderCustom);
export default connect(mapStateToProps, mapDispatchToProps)(withRouterConstom);