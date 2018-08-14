import React, { Component } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import ItemView from './components/ItemView';
import NotFound from './components/NotFound';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {hot} from 'react-hot-loader';
// inport redux
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
const store = configureStore();

export class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div className="App">
                        <header>
                            <Header />
                        </header>
                        <main>
                        <Switch>
                            <Route exact path='/' component={Home} />
                            <Route exact path='/item/:id' component={ItemView} />
                            <Route exact path='/about' component={About} />
                            <Route path="*" component={NotFound} />
                        </Switch>
                        </main>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}


export default hot ? hot(module)(App) : App;