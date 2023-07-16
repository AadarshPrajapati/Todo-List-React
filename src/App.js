import './App.css';
import Header from './MyComponents/Header';
import {Footer} from './MyComponents/Footer';
import {Todos} from './MyComponents/Todos';
import { AddTodo } from './MyComponents/AddTodo'
import { BrowserRouter, Route, Routes} from "react-router-dom";
import React, { useState,useEffect } from 'react';
import { About } from './MyComponents/About';

function App() {

  let initTodos;
  if(localStorage.getItem("todos")===null) initTodos=[];
  else initTodos=JSON.parse(localStorage.getItem("todos"));

  const onDelete=(todo)=>{
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
  }

  const addTodo = (title,desc)=>{
    let sno;
    if(todos.length===0) sno=0;
    else sno=todos.length+1;

    const myTodo={
      sno:sno,
      title:title,
      desc:desc
    }
    console.log(myTodo)
    setTodos([...todos,myTodo]);
  }

  const SearchTodo=(searchTodo)=>{
    console.log(searchTodo)
  }

  const [todos, setTodos] = useState(initTodos);
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
  }, [todos])
  

  return (
    <BrowserRouter>
     <Header title="Todos List" SearchTodo={SearchTodo} />
    <Routes>
      <Route path="/" element={
          <>
          <AddTodo addTodo={addTodo} />
          <Todos todos={todos} onDelete={onDelete} />
          </>
      }/>
      <Route exact path='/about' element={
        <>
        <About></About>
        </>
      } />
    </Routes>
    <Footer/>
  </BrowserRouter>
  );
}

export default App;
