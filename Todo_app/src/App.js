import logo from './logo.svg';
import './App.css';
import {Todo} from './components/Todo'
import {Header} from './components/Header'
function App() {
    return (
      <>
      <Header title={"A Todo App"} by={"Sumit Singh"} searchBar={true}/>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <br></br>
        <br></br>
       <Todo/>
      </div>
      </>
    );
  
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //     </header>
  //     <h1>Element is odd</h1>
  //     <h1>Count: {counter}</h1>
  //     <button onClick={()=>{
  //       setCounter(counter +1)
  //     }}>
  //       Click ME
  //     </button>
  //    <Todo/>
  //   </div>
  // );
}

export default App;
