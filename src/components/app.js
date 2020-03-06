import React from 'react';
// import moment from 'moment';
import Header from './header';
import Main from './main';
import Footer from './footer';
import '../styles/app.css';

function App() {
    return (
        <div className="App">
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

export default App;