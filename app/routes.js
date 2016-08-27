import React from 'react';
import { Route, IndexRedirect } from 'react-router';
// import App from './components/App';
// import PageWithChat from './components/PageWithChat';

import PageWithChat from './pages/PageWithChat';
import Chat from './pages/Chat';
import Content from './pages/Content';

const Test = () => <div>Test</div>;

export default (
    <Route path="/" component={PageWithChat}>
        <IndexRedirect to="list-page"/>
        <Route path="list-page" components={{
            content: Content,
            chat: Chat
        }}>
            <Route path="/chat" components={{test: Test}}/>
        </Route>
    </Route>
);
