import logo from './logo.svg';
import './App.css';
import React from 'react';
import NewComponent from './NewComponent'; // 新しいコンポーネントをインポート

function App() {
    return ( <
        div className = "App" >
        <
        NewComponent / > // ここで新しいコンポーネントを使用
        <
        header className = "App-header" >
        <
        img src = { logo }
        className = "App-logo"
        alt = "logo" / >
        <
        p >
        Edit < code > src / App.js < /code> and save to reload. <
        /p> <
        a className = "App-link"
        href = "https://reactjs.org"
        target = "_blank"
        rel = "noopener noreferrer" >
        Learn React <
        /a> <
        /header> <
        /div>
    );
}

export default App;