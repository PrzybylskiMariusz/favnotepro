import styled from 'styled-components';
import logo from './logo.svg';
import './App.css';

const MyButton = styled.button`
  padding: 30px;
  border: 2px solid blue;
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyButton>My Button</MyButton>
        <p>
          Edit <code>src/App.js</code> and save to reload2.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
