import React, { Component } from 'react';
import { Layout } from 'antd';
import SliderMenu from './sliderMenu';
import { withRouter } from 'react-router-dom';
import routes from '../../../routes/config';

const { Sider } = Layout;

class SiderCustom extends Component {
    constructor(props){
        super(props);
        this.state = {
            collapsed: false,
            mode: 'inline',
            openKey: '',
            selectedKey: '',
            firstHide: true, // 点击收缩菜单，第一次隐藏展开子菜单，openMenu时恢复
        };

        const state = SiderCustom.setMenuOpen(this.props);
        this.state = state;
    }

    static setMenuOpen = props => {
        const { pathname } = props.location;
        return {
            openKey: pathname.substr(0, pathname.lastIndexOf('/')),
            selectedKey: pathname
        };
    };

    menuClick = e => {
        this.setState({
            selectedKey: e.key
        });
    };
    openMenu = v => {
        this.setState({
            openKey: v[v.length - 1],
            firstHide: false,
        })
    };
    render() {
        const style = {
            height:'100%',
            overflow:'hidden'
        }

        return (
            <div style = {style}>
                <div className = 'title'>React Demo</div>
                <Sider
                    trigger={null}
                    breakpoint="lg"
                    collapsed={this.props.collapsed}
                    style={{ overflowY: 'auto' }}
                >
                    <div className="logo" />
                    <SliderMenu
                        menus={routes.menus}
                        onClick={this.menuClick}
                        // defaultSelectedKeys={[this.state.openKey]}
                        defaultOpenKeys={[this.state.openKey]}
                        mode="inline"
                        theme="dark"
                        selectedKeys={[this.state.selectedKey]}
                        onOpenChange={this.openMenu}
                    />
                </Sider>
            </div>

        )
    }
}

export default withRouter(SiderCustom);