import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom';
import AllComponents from './components';
import routesConfig from './config';
import { connect } from 'react-redux'
// import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect'
// import Login from '../app/login/index'

// const userIsAuthenticated = connectedRouterRedirect({
//     redirectPath: '/app/home',
//     authenticatedSelector: () => 1 === 2,
//     wrapperDisplayName: 'UserIsAuthenticated'
// })

class CRouter extends Component {
    // state = {
    //     isLogin: true
    // }
    componentDidMount() {

    }

    requireLogin = (component, userState) => {
        return parseInt(userState) === 0 ? <Redirect to={'/login'} /> : component;
    }

    routerRender = (r) => {
        const { userState } = this.props.userinfo;
        const Component = AllComponents[r.component];
        return (
            <Route
                key={r.route || r.key}
                exact
                path={r.route || r.key}
                // component={Component}
                render={props => {
                    const merge = { ...props };
                    return this.requireLogin(<Component {...merge} />, userState);
                }}
            />
        )
    }
    render() {
        // const { onRouterChange } = this.props;
        return (
            <Switch>
                {
                    Object.keys(routesConfig).map(key =>
                        // key === 'menus'&&
                        routesConfig[key].map(r => {
                            // onRouterChange && onRouterChange(r); // 回传route配置
                            return r.component ? this.routerRender(r) : r.subs.map(r => this.routerRender(r));
                        })
                    )
                }
                <Route render={() => <Redirect to="/404" />} />
            </Switch>
        )
    }
}

const mapStateToProps = state => {
    return {
        userinfo: state.setUserState
    }
}

export default connect(mapStateToProps)(CRouter)