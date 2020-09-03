import React, { Component } from 'react';
import Routes from '../routes/index'
import { Layout } from 'antd';
import DocumentTitle from 'react-document-title';
import HeaderCustom from './components/header/index';
import SiderCustom from './components/slider/sliderCustom';
const { Content } = Layout;

class App extends Component {
    state = {
        collapsed: false,
        title: '',
        key: '',
    };
    setTitle = ({ title, key }) => {
        // if (this.state.title === title) return;
        // this.setState({ title, key });

    };
    componentDidMount() {
        // console.log(JSON.stringify(this.props.history) + 'histoty')
    }
    render() {
        const height = { height: '100%' };
        const { title } = this.state;
        return (
            <DocumentTitle title={title} style={height}>
                <Layout style={height}>
                    <SiderCustom collapsed={this.state.collapsed} titleKey={this.state.key} />
                    <Layout>
                        <Layout>
                            <HeaderCustom></HeaderCustom>
                            <Content className='main-layout'>
                                <Routes onRouterChange={this.setTitle}></Routes>
                            </Content>
                        </Layout>
                    </Layout>
                </Layout>
            </DocumentTitle>
        );
    }
}

export default App;
