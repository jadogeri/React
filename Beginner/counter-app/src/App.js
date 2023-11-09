import logo from './logo.svg';
import './App.css';
import Button from './components/Button/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
     
      </header>
      <body>
        <Button color={'red'}/>
        <Button color={'blue'}/>
        <Button color={'green'}/>



      </body>
    </div>
  );
}

export default App;
