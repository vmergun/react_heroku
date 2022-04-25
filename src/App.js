import './App.css';
import React from "react";
import Button2 from './typescript/test' 
import FormatDate from './typescript/date' 



function App() {

  const [todos, setTodos] = React.useState([
    { id: 1, text: "Wash dishes", done: false },
    { id: 2, text: "Do laundry", done: false },
    { id: 3, text: "Take shower", done: false }
  ]);

    const deneme  = () => {  setTodos((prevTodos) => {
      // @ts-ignore
      alert(Math.min(prevTodos.map( x=> x.id)));
     return prevTodos.filter((t) => t.id !== 1);
   });
}
const denemezz = () => {

  debugger;
}
  return (
    
    <div className="App">
      <header className="App-header">
        <img  className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <FormatDate  date={new Date()} ></FormatDate>
       <Button2   
// @ts-ignore
       onClick={   ()=> alert('aa') } text='denemeTypescript'></Button2>
        <div onClick={ ()=> alert('aa') }>tetete</div>
        <Test parentname={todos}></Test>
      </header>
    </div>
  );
}


/**
 * @param {any} props
 */
function Test(props) {
return(

<div><Sub childname={ [{trx:"ss"}, {trx :"rr"}]}  {...props}></Sub> </div>

);
}

/**
 * @param {{ parentname: { map: (arg0: (x: any) => void) => boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }; }} props
 */
function Sub(props) {
  debugger;
  return(
<div>
   { props.parentname.map (   x=> console.log(x.text) ) } 
 

      
   
     </div>
    
  
  );
}



export default App;
