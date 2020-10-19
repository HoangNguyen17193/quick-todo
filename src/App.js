import React, {Component} from 'react';

import MainLayout from './components/Common/MainLayout/MainLayout';
import Home from './containers/Home/Home';

class App extends Component {
    render() {
        return (
            <MainLayout>
                <Home />
            </MainLayout>
        )
    }
}

export default App;
