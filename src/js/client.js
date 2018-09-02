import React from "react";
import ReactDOM from "react-dom";
// import { Router, IndexRoute, hashHistory } from "react-router";

import {  } from 'react-router-dom';

import {
    Router,
    HashRouter,
    Route, BrowserRouter, Switch
} from 'react-router-dom';

import Layout from "./pages/Layout";
import Settings from "./pages/Settings";
import Featured from "./pages/Featured"; 
import Archives from "./pages/Archieve";
import RouterExample from "./pages/RouterExample";
import BasicExample from "./pages/BasicExample";

// const app = document.getElementById('app');
// import React from 'react'
import { render } from 'react-dom';
// import App from './components/App';
import Game from './pages/Game';

render((
    <BrowserRouter>
        {/* <App > */}
            {/* <BasicExample /> */}
        <Game/>
        {/* </App> */}
    </BrowserRouter>

), document.getElementById('app'));

// ReactDOM.render(
//     <BrowserRouter>
//         <Switch>
//             <Route path="/" render={() => <Layout />} />
//             <Route exact path="/layout" component={Layout} />
//             <Route exact path="/settings" component={Settings} />
//             <Route exact path="/archives" component={Archives} />
//             {/* <Route exact path="/archives" render={() => (<div>logout</div>)} /> */}
//             {/* <Route component={NoMatch} /> */}
//         </Switch>
//     </BrowserRouter>
//     <BasicExample />

// , app);
