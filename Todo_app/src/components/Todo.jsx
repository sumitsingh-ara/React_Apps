import { Todoinput } from "./Todoinput";
import { useState } from "react";
import { TodoList } from "./TodoList";
export const Todo = () => {
  const [flag, setFlag] = useState(true);
  let initTodo = [];
  let deta =localStorage.getItem("todos")
  if (deta === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const [todoList, setTodoList] = useState(initTodo);
  const handleAddTodo = (todo) => {
    let x = todo.title.trim();
    if(x){
      setTodoList([...todoList, todo]);
    }
  };
  localStorage.setItem("todos", JSON.stringify(todoList));

  //for toggling the status
  const handleToggle = (id) => {
    const updateList = todoList.map((todo) => {
      if (todo.id === id) {
        todo.status = !todo.status;
      }
      return todo;
      //alternatively we can write it like this what we have written above in single line
      // return (todo.id === id ?{...todo,status:!todo.status} :todo)
    });
    setTodoList(updateList);
  };

  //for deleting
  const deletedTodo = (id) => {
    let d = JSON.parse(localStorage.getItem("todos"))
    let naya
    const updater = todoList.filter((todo) => {
      let flag = false;
      let flag2 = false;
      if (todo.id === id) {
        if (todo.status === true) {
           naya = todoList.filter((e) => {
             flag2 = true;
            if (e.id !== id ) {
              flag = true;
              return e
            }
          });
        }
        if(flag === true) {
        
          setTodoList(naya)
        }else{
          if(d.length ===1 && flag2 === true) {
           
            let up =[]
            setTodoList(up)
          }
        }
       
      }
    });
    
  };
  return (
    <>
      <div className="container">
        <Todoinput
          handleAddTodo={handleAddTodo}
          setFlag={setFlag}
          flag={flag}
          todoList={todoList}
          setTodoList={setTodoList}
        />
        <TodoList
          handleToggle={handleToggle}
          deletedTodo={deletedTodo}
          flag={flag}
          list={todoList}
        ></TodoList>
      </div>
    </>
  );
};
