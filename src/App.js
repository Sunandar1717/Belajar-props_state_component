import logo from './logo.svg';
import './App.css';
import React from 'react';
import Greetings from './Greetings';
import TodoList from './TodoList';
class App extends React.Component{
render(){
 const person ={name: "Sunandar", age:27}
  return(
    <div>
<Greetings person={person} value={0}/>
<TodoList/>

    </div>

  );
}
}



export default App;
