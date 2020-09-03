const thunk = ({ dispatch, getState }) => next => action => {
    if (typeof action === 'function') {
        return action(dispatch, getState)
    }
    return next(action)
}

// const initialState = {};

const create = (initialState) => {
    const mockStore = {
        getState: jest.fn(() => (initialState)),
        dispatch: jest.fn(),
        subscribe: jest.fn(),
    }
    const next = jest.fn()
    const invoke = action => thunk(mockStore)(next)(action)
    return { mockStore, next, invoke }
}

export default create;