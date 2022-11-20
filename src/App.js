import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Main from './components/Main';
import data from './data.js';
import Card from "./components/Card";

function App() {
    let cards = data.map(item => {
        return (
            <Card
                key={item.id}
                {...item}
            />
        )
    })
    return (
        <div className="App">
            <Navbar/>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React!
                </a>
            </header>
            <Main/>
            <div>
                {cards}
            </div>
        </div>
    );
}

export default App;
