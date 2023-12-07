import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { Icon } from "@iconify/react"
import { useState, useEffect } from 'react'
import Confirmation from './confirmation'

const Form = ({ isOpen, toggleModal, addTo_do, deleteTo_do, updateTo_do, ToDotoEdit, setToDotoEdit }) => {
    const [isConfirmationOpen, setConfirmationOpen] = useState(false);

    const [text, setText] = useState(ToDotoEdit ? ToDotoEdit.To_Do : '');
    const [originalText, setOriginalText] = useState(ToDotoEdit ? ToDotoEdit.To_Do : ''); // stores the original text

    useEffect(() => {
        setText(ToDotoEdit ? ToDotoEdit.To_Do : '');  // Update text when ToDotoEdit changes
        setOriginalText(ToDotoEdit ? ToDotoEdit.To_Do : ''); 
        
    }, [ToDotoEdit]);

    const toggleConfirmationModal = () => {
        setConfirmationOpen(!isConfirmationOpen);
    }

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const formSubmit = (e) => {
        e.preventDefault();

        // Check if form is empty
        if (text.trim() === '') {
            alert('Cannot be empty');
            return;
        }

        // If ToDotoEdit is not null, update the to-do
        if (ToDotoEdit) {
            // Only update if the text has changed
            if (text !== ToDotoEdit.To_Do) {
                updateTo_do({ id: ToDotoEdit.id, To_Do: text });
            }
            setToDotoEdit(null);
        } else {
            // Add a new to-do
            addTo_do({ To_Do: text });
        }

        // Clear form and close modal after submit
        setText('');
        toggleModal();

    }

    //will show the confimration if the delete is clicked
    const handleDelete = () => {
        toggleConfirmationModal();
    }

    //delete the to do if clicked
    const handleConfirm = () => {
        // Handle confirmation logic
        deleteTo_do(ToDotoEdit);
        setToDotoEdit(null);
        toggleModal();
        toggleConfirmationModal();
    };

    // back button
    const handleBack = () => {
        // Reset the text to the original text when the back button is clicked
        setText(originalText);
        setToDotoEdit(null); // clear the forms when adding new to do 
        toggleModal();
    }

    return (  
        <Transition appear show={isOpen} as={Fragment} >
            <Dialog as="div" className="relative z-10" onClose={toggleModal} static>
                <div className="fixed inset-0 overflow-y-auto text-textlight dark:text-notwhite">
                    <div className="flex h-full items-center justify-center sm:p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full sm:w-96 h-full bg-notwhite dark:bg-dark text-left  ">
                                <form onSubmit={formSubmit} className='h-full'>
                                    <div className='flex items-center justify-between p-4'>
                                        <Icon 
                                            icon='tabler:arrow-left' 
                                            className='text-3xl cursor-pointer' 
                                            onClick={handleBack} 
                                        />
                                        <div className='flex justify-between align-center gap-2'>
                                            <Icon 
                                                icon={ToDotoEdit ? 'tabler:trash' : ''}
                                                className='text-2xl cursor-pointer'
                                                onClick={handleDelete}
                                            />
                                            <Confirmation
                                                isOpen={isConfirmationOpen}
                                                toggleConfirmationModal={toggleConfirmationModal}
                                                onConfirm={handleConfirm}
                                                title="Delete To Do"
                                                message="Are you sure you want to delete this?"
                                            />
                                            <button type='submit'>
                                                <Icon 
                                                    icon={text !== originalText ? 'tabler:check' : ''} 
                                                    className='text-2xl cursor-pointer'
                                                />
                                            </button> 
                                        </div>
                                    </div>
                                    <div className="h-[calc(100%-62px)] py-2 ">
                                        <textarea 
                                            name="" 
                                            id="" 
                                            placeholder='Start typing...'
                                            value={text}
                                            onChange={handleChange}
                                            className='px-6 w-full h-full outline-none bg-inherit resize-none text-base text-dark dark:text-notwhite'
                                        ></textarea>
                                    </div>
                                </form>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}
 
export default Form;