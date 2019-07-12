import React from "react";
import {createStore} from 'redux';
import {Provider} from 'react-redux'

import reducer from './reducers/index'

const store = createStore(reducer)


// alert(store.getState().a)

import Page from './pages/index'

export default class App extends React.Component{
    render(){
        return (
            <Provider store={store}>
                <Page></Page>
            </Provider>
        )
    }
}