function TodoForm({addTodo}){
    
    const [value,setValue] = React.useState('')

    const handleSubmit = e => { 
        e.preventDefault() // prevenimos que se haga refresh de la pagina
        if(!value) return // esto sifnifica que en caso de que el valor no exista, no haga nada o retorne vacio
        addTodo(value)
        setValue('') // limpiamos el form
    }
    
    return (
        <form onSubmit = {handleSubmit}>
           <input type = 'text' className = 'input' value = {value} placeholder = 'Add todo...' onChange = {e => setValue(e.target.value)}/>
           
        </form>
    )
}