import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Icon } from "@iconify/react"

const Confirmation = ({ isOpen, toggleConfirmationModal, onConfirm, title, message }) => {

    const cancelButtonRef = useRef(null)

    return (
        <Transition.Root show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-20" initialFocus={cancelButtonRef} onClose={toggleConfirmationModal}>
            <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
            <div className="fixed inset-0 bg-dark bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                    <Dialog.Panel className="relative bg-white dark:bg-semidark transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-96">
                        <div className="px-4 pb-4 pt-5 sm:p-6 sm:pb-4 ">
                            <div className="sm:flex sm:items-start">
                                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                    <Icon icon='tabler:exclamation-circle' className="h-6 w-6 text-red-600" aria-hidden="true" />
                                </div>
                                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-dark dark:text-notwhite">
                                    {title}
                                </Dialog.Title>
                                <div className="mt-2">
                                    <p className="text-sm text-textlight dark:text-textdark">
                                        {message}
                                    </p>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                        <button
                            type="button"
                            className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                            onClick={onConfirm}
                        >
                            Delete
                        </button>
                        <button
                            type="button"
                            className="mt-3 inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-textlight dark:text-textdark 
                            shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:hover:bg-semidark sm:mt-0 sm:w-auto"
                            onClick={toggleConfirmationModal}
                            ref={cancelButtonRef}
                        >
                            Cancel
                        </button>
                        </div>
                    </Dialog.Panel>
                    </Transition.Child>
                </div>
            </div>
        </Dialog>
        </Transition.Root>
    )
}

export default Confirmation;