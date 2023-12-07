import { useState, useEffect } from "react";

const Crud = () => {
    const storedTo_Do = localStorage.getItem('To_Do');
    const initialTo_Do = storedTo_Do ? JSON.parse(storedTo_Do) : [];

    const [To_Do, setTo_Do] = useState(initialTo_Do);
    const [ToDotoEdit, setToDotoEdit] = useState(null);

    // useEffect to update local storage whenever To_Do changes
    useEffect(() => {
        localStorage.setItem('To_Do', JSON.stringify(To_Do));
    }, [To_Do]);

    //to add new to do in the list
    const addTo_do = (newToDo) => {
        //create a formatted date (December 1, 2023)
        const timestamp = Date.now();
        const date = new Date(timestamp);
    
        const options = { month: 'long', day: 'numeric', year: 'numeric'};
        const formattedDate = date.toLocaleDateString(undefined, options);

        const updatedTo_Do = [...To_Do, { id: timestamp, ...newToDo, date: formattedDate }];
    
        // Sort the array in descending order based on the todo.id
        updatedTo_Do.sort((a, b) => b.id - a.id);
        setTo_Do(updatedTo_Do);
    }

    //to update the to do
    const updateTo_do = (updateToDo) => {
        const updatedToDos = (To_Do.map((existingToDo) => {
            return existingToDo.id === updateToDo.id ? { ...existingToDo, ...updateToDo } : existingToDo;
        }));
        setTo_Do(updatedToDos);
        setToDotoEdit(null);
    }

    //to delete the to do
    const deleteTo_do = (ToDo_to_delete) => {
        const updatedToDos = To_Do.filter((ToDoItem) => ToDoItem.id !== ToDo_to_delete.id);
        setTo_Do(updatedToDos);
    }

    return { addTo_do, deleteTo_do, updateTo_do, ToDotoEdit, setToDotoEdit, To_Do };
}
 
export default Crud;