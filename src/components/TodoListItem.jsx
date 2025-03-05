import { useState } from "react";
import DeleteIcon from "./Icons/DeleteIcon";
import EditIcon from "./Icons/EditICon";


export default function TodoListItem({todo , deleteTodo,toggleTodoStatus,editTodoTitle}) {
  console.log(todo)

  const [editMode,setEditMode] = useState(false)



  function editTodoHandler(event){
    if(event.key=='Enter'){
      console.log(event.target.value)
      editTodoTitle(todo,event.target.value)
      setEditMode(false)
    }

  }


  return (
    <li className="relative flex items-center justify-between px-2 py-6 border-b">
     
      

        {
          editMode
          ?   <div className="w-full flex items-center">
              <input type="text" defaultValue={todo?.title}  onChange={() =>{}} onKeyDown={editTodoHandler} className="w-full px-4 py-2 border border-gray-300 rounded" ></input>
               <DeleteIcon className="ml-2" onClick = {()=> {setEditMode(false)} } />
               </div>
  
          :


        <div className="flex items-center">
            <div >
              <input type="checkbox" className=""  checked={todo?.status} onChange={() =>{toggleTodoStatus(todo)}}  />
              
              
              <p className={`inline-block mt-1 ml-2 text-gray-600 ${todo?.status? 'line-through' : ''}`}>
                {todo?.title}  
              </p>
            </div>
            <button
              type="button"
              className="absolute right-0 flex items-center space-x-1"
            >
              <EditIcon onClick={() =>setEditMode(true)} />
              <DeleteIcon onClick = {()=> deleteTodo(todo) } />
            </button>
          
        </div>

        }



    </li>
  );
}
