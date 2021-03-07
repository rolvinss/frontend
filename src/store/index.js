import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import auth from './auth/reducer';
import { ActionTypes } from './auth/action';

const appReducer = combineReducers({
    auth,
});

const rootReducer = (state, action) => {
    if (action.type === ActionTypes.LOGOUT_SUCCESS) {
        state = undefined;
    }
    return appReducer(state, action);
};

function configureStore(preloadedState) {    
    const middlewares = [];
    return createStore(
        rootReducer,
        preloadedState,
        composeWithDevTools(applyMiddleware(...middlewares, thunkMiddleware)),
    );
}

export default configureStore();
