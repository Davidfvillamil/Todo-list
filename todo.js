function Todo({todo,index,remove}){

    function handleRemove(){
        remove(index)
    }
    return (
        <div className = 'todo'  onClick = {handleRemove}>{todo.text} (-) </div>
    )
}