
const List = ({ view, toggleModal, To_Do, setToDotoEdit }) => {

    const handleClick = (selectedToDo) => {
        setToDotoEdit(selectedToDo);
        toggleModal();
    };

    return (  
        <div className={`h-[calc(100%-48px)] py-1.5`}>
            <div className={`py-2 ${view ? 'grid grid-flow-row-dense grid-cols-2 gap-2' : ''} `}>   
                {To_Do.map((value) => (
                <div  
                    key={value.id}
                    className={`hover:scale-105 transition cursor-pointer rounded-2xl px-6 py-4 bg-white dark:bg-semidark ${view ? '' : 'mb-2'}`}
                    onClick={() => handleClick(value)}
                >
                    <p className={`text-dark dark:text-notwhite line-clamp-2 ${view ? 'h-[50px]' : ''}`}>{value.To_Do}</p>
                    <span className="text-textlight dark:text-textdark text-xs">{value.date}</span>
                </div>          
                ))}
            </div>
        </div>
    );
}
 
export default List;