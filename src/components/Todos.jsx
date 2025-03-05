import { useState } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from 'uuid';

export default function Todos() {
  const [todos,setTodos] = useState([
    {
      id:uuidv4() ,
      title: "Start java script course",
      status: true,
    },
    {
      id:uuidv4() ,
      title: "go to gym at 5:00",
      status: false,
    },
    
  ]);

  function deleteTodoHandler(todo){
    // console.log("delete todo",todo)
    let newTodos = todos.filter((todoItem)=>
      {
      return todo.id!=todoItem.id;
    })

    setTodos(newTodos)
  }


  function toggleTodoStatusHandler(todo){

    let newTodos=todos.map((todoItem) =>{
      if(todo.id ==todoItem.id){
        todoItem.status=   !todoItem.status
      }
      return todoItem

    })

    // console.log(newTodos)

    setTodos(newTodos)
  }



  function editTodoTitleHandler(todo,newTitleValue){

    let newTodos=todos.map((todoItem) =>{
      if(todo.id ==todoItem.id){
        todoItem.title =  newTitleValue
      }
      return todoItem

    })

    // console.log(newTodos)

    setTodos(newTodos)
  }




  const [newTodoTitle,setNewTodoTitle] = useState("")


  function onInputNewTodoChangeHandler(event){
    setNewTodoTitle(event.target.value)
  }

  function addNewTodoHandler(event){
   

    if(event.key=="Enter" && newTodoTitle!=""){
      console.log("add new todo")
      setTodos([
        {
          id:uuidv4() ,
          title:newTodoTitle ,
          status:false ,
        },
        ...todos,
      ])

      setNewTodoTitle("")
    }

  }
  

  return (
    <div className="bg-gray-100">
      <div className="flex items-center justify-center h-screen">
        <div className="w-full px-4 py-8 mx-auto shadow lg:w-1/3  bg-white">
          <div className="flex items-center mb-6">
            <h1 className="mr-6 text-4xl font-bold text-purple-600">
              {" "}
              TO DO APP
            </h1>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="What needs to be done today?"
              className="w-full px-2 py-3 border rounded outline-none border-grey-600"
              onChange={onInputNewTodoChangeHandler}
              onKeyDown={addNewTodoHandler}
            />
          </div>


          
          <TodoList todos={todos} deleteTodo={deleteTodoHandler} toggleTodoStatus={toggleTodoStatusHandler}   editTodoTitle={editTodoTitleHandler} />
        </div>
      </div>
    </div>
  );
}
