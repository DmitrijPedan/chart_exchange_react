import React from 'react';
import Header from './header';
import Main from './main';
import Footer from './footer';

const App = () => {
    
    document.title = "Exchange rates NBU";
    
    return (
        <div className="App">
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

export default App;