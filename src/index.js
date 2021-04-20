import React from 'react';
import ReactDOM from 'react-dom';
import './assets/stylesheets/tailwind.css';
import './assets/stylesheets/styles.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Footer from './components/Footer'

const Ft = ()=> {
    return (
        <div className="flex flex-col w-full border-l mt-5">
            <Footer/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(<Ft />, document.getElementById('footer'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
