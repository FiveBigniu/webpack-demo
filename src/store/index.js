import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers/index'
import thunk from 'redux-thunk';

//谷歌中间件redux的配置 配置后才能使用google redux插件
export default function configureStore(initialState) {
    // Specify here name, actionsBlacklist, actionsCreators and other options
    const composeEnhancers = process.env.NODE_ENV !== 'production'
        && typeof window === 'object'
        && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        }) : compose;
    const enhancer = composeEnhancers(
        applyMiddleware(thunk),
        // other store enhancers if any
    )
    return createStore(rootReducer, initialState, enhancer);
};