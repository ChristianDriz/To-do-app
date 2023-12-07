import { Icon } from "@iconify/react";

const Add = ({ toggleModal }) => {

    return (  
        <div className="absolute bottom-4 right-2">
            <button 
                className="bg-amber-500 h-12 w-12 rounded-full flex items-center justify-center shadow-lg"
                onClick={toggleModal}
            >
                <Icon icon='tabler:plus' className="text-white text-2xl"/>
            </button>
        </div>
    );
}
 
export default Add;