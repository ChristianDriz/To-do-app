import Nav from './Components/navbar';
import Add from './Components/add';
import List from './Components/list';
import Layout from './Components/Scripts/layout';
import Form from './Components/form';
import Crud from './Components/Scripts/crud';
import { useState } from 'react'
import { Icon } from "@iconify/react"

function App() {
    const { layout, changeLayout, view } = Layout();
    const { addTo_do, deleteTo_do, updateTo_do, ToDotoEdit, setToDotoEdit, To_Do  } = Crud();
    const [query, setQuery] = useState("");

    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    }
    
    // handles the search value
    const search = (query) => {
        setQuery(query);
    }

    // checks if the searched value is in the to do list
    const getFilteredItems = (query, items) => {
        if (!query) {
            return items;
        }
        return items.filter((value) => 
            value.To_Do.toLowerCase().includes(query.toLowerCase())
        );
    };

    // stores the filtered list
    const filteredList = getFilteredItems(query, To_Do);

    return (
        <div className='bg-notwhite dark:bg-dark h-[100dvh] w-full flex items-center justify-center sm:p-4'>
            <div className='h-full w-full sm:w-96 relative p-4'>
                <Nav 
                    layout={layout} 
                    changeLayout={changeLayout}
                    search={search}
                />
                {To_Do.length === 0 && filteredList.length === 0 ? (
                <div className="text-center text-textlight dark:text-textdark h-full flex items-center justify-center"> 
                    <div>
                        <div className="flex items-center justify-center p-2">
                            <Icon icon='tabler:mood-empty' className="text-6xl"/>
                        </div>
                        <p>To Do is empty</p>
                    </div>
                </div>
                ) : ( filteredList.length > 0 ? (
                        <List 
                            view={view} 
                            toggleModal={toggleModal}
                            To_Do={filteredList}
                            setToDotoEdit={setToDotoEdit}
                        />
                    ) : ( 
                        <p className="py-10 text-textlight dark:text-textdark text-center">No results found for '{query}'</p>
                    )
                )}
                <Form 
                    isOpen={isOpen} 
                    toggleModal={toggleModal} 
                
                    addTo_do={addTo_do}
                    deleteTo_do={deleteTo_do}
                    updateTo_do={updateTo_do}
                    ToDotoEdit={ToDotoEdit}
                    setToDotoEdit={setToDotoEdit }
                />
                <Add toggleModal={toggleModal} />
            </div>
        </div>
    );
}

export default App;
