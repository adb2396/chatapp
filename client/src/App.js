import React from 'react';
import { BrowserRouter, Route  } from 'react-router-dom';

import Join from './components/Join';
import Chat from './components/Chat';

const App = () => {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Join} />
            <Route path="/chat" component={Chat} />
        </BrowserRouter>
    );
}

export default App;