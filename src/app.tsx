import React, { Component, CSSProperties } from 'react';
import './App.css';
import logo from './logos/logo.svg';
import githubLogo from './logos/github_logo_white.png';

const titleStyle: CSSProperties = {
    display: "inline-flex"
}

const logoStyle: CSSProperties = {
    width: '100px',
    height: 'auto'
}

export class App extends Component {
    render() {
        return (
            <div className="App">
                <header>
                    <div style={titleStyle}>
                        <img src={logo} className="App-logo App-rotate" alt="logo" />
                        <div>
                            <h1>REACT TYPESCRIPT BOILERPLATE</h1>
                            <p>Edit something in <code>src/App.ts</code> and save to reload.</p>
                            <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
                            <br />
                            <a className="App-link" href="https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html" target="_blank" rel="noopener noreferrer">Learn TypeScript</a>
                            <p>Thanks for using this stack. If you'll have any questions so create issue on this <a href="https://github.com/chlastyml/react-typescript-boilerplate" target="_blank"><img src={githubLogo} style={logoStyle} alt="github" /></a> project!</p>
                        </div>
                        <img src={logo} className="App-logo App-rotate" alt="logo" />
                    </div>
                </header>
            </div>
        );
    }
}
