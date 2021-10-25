import './todo.css'


export const TodoList =({list,handleToggle,deletedTodo,flag})=>{
    
    return(
         <div>
        {list.filter((e) => (flag ? true : !e.status))
.map((e)=>(
            <div key={e.id} className="taskShower shadow-lg p-3 mb-5 bg-body rounded">
                {e.title} {e.status ? 
                    <p className="text-success"><del>Done</del></p>
                :<p className="text-danger">Not Done</p>}
            <button type="button" className="btn btn-warning small" onClick={()=>{
            handleToggle(e.id);
            }}>Toggle</button>
            <button type="button" className="btn btn-danger small" onClick={()=>{
            deletedTodo(e.id);
            }}>Delete</button>
            </div>
        ))}
        
       {/* write from here for toggling or clearing */}
    </div>
    )
}