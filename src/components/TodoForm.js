import React , {useState , useContext} from 'react';
import {
    FormGroup , 
    Input , 
    Button , 
    InputGroup ,
    Form , 
    InputGroupAddon,
} from "reactstrap"

import {v4} from "uuid";
import {TodoContext} from "../context/TodoContext";
import {ADD_TODO} from "../context/action.types";

const TodoForm = () =>
{
    const [TodoString , setTodoString] = useState("");
    const {dispatch} = useContext(TodoContext);

    const handleSubmit = e => {
        e.preventDefault();
        if(TodoString === "")
        {
            alert('Please enter a todo');
        }

        const todo = {
            TodoString , 
            id : v4() , 
        }
        dispatch({
            type: ADD_TODO , 
            payload: todo
        })

        setTodoString("")
    }
    return(
        <Form onSubmit = {handleSubmit}>
            <FormGroup>
                <InputGroup>
                <Input 
                type = "text"
                name = "todo"
                id = "todo"  
                placeholder = "Your Next Todo"
                value = {TodoString}
                onChange = {e=> setTodoString(e.target.value)}
                />
                <InputGroupAddon addonType = "prepend">
                    <Button 
                    color = "warning"
                    // TODO: onClick
                    > Add
                    </Button>
                </InputGroupAddon>
                </InputGroup>
                
            </FormGroup>
        </Form>
    )
}

export default TodoForm;