import { useState } from "react";
import { Icon } from "@iconify/react";

const Searchbar = ({ search }) => {

    const [searchText, setSearchText] = useState('');

    const handleInputChange = (e) => {
        setSearchText(e.target.value);
        search(e.target.value);
    }

    return (  
        <div className="w-full flex relative text-textlight dark:text-textdark">
            <Icon icon='tabler:search' className="absolute top-4 left-4 "/>
            <input 
                type="text" 
                value={searchText}
                onChange={handleInputChange}
                placeholder="Search here"
                className="rounded-full outline-none bg-white dark:bg-semidark w-full px-10 h-12 mr-2 text-dark dark:text-notwhite"
            />
        </div>
    );
}
 
export default Searchbar;