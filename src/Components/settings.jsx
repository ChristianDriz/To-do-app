import { Menu, Transition, Switch } from '@headlessui/react'
import { Fragment } from 'react'
import { Icon } from "@iconify/react"
import Darkmode from './Scripts/darkmode'

const Settings = ({ layout, changeLayout }) => {

    const { enabled, toggleDarkmode, mode } = Darkmode();

    return (  
        <Menu as="div" className="relative inline-block text-left text-textlight dark:text-textdark">
            <Menu.Button className="rounded-full bg-white dark:bg-semidark h-12 w-12 flex items-center justify-center ">
                <Icon icon='tabler:adjustments-horizontal' className='text-xl'/>
            </Menu.Button>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 mt-2 w-56 rounded-2xl bg-white dark:bg-semidark shadow-md border dark:border-none p-2">
                    <Menu.Item>
                        <div 
                            className='w-full text-left px-4 py-2 rounded-xl hover:bg-notwhite dark:hover:bg-zinc-700'
                            onClick={changeLayout}
                        >
                            {layout ? 'List view' : 'Grid view'}
                        </div>
                    </Menu.Item>
                    <Menu.Item>
                        <div className='w-full text-left px-4 py-2 rounded-xl hover:bg-notwhite dark:hover:bg-zinc-700 flex items-center justify-between'>
                            Dark Mode
                            <Switch
                                checked={enabled}
                                onChange={toggleDarkmode}
                                className={`${mode ? 'bg-indigo-400' : 'bg-gray-200 dark:bg-dark'} 
                                relative inline-flex h-6 w-11 items-center rounded-full`}
                            >
                            <span 
                                className={`${mode ? 'translate-x-6' : 'translate-x-1'} 
                                inline-block h-4 w-4 transform rounded-full bg-white transition`}
                            />
                            </Switch>
                        </div>
                    </Menu.Item>
                </Menu.Items>
            </Transition>
        </Menu>
    );
}
 
export default Settings;