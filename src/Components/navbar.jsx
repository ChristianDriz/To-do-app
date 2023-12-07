import Searchbar from "./searchbar";
import Settings from "./settings";

const Nav = ({ search, layout, changeLayout }) => {
    return (  
        <div className="flex items-center ">
            <Searchbar search={search}/>
            <Settings layout={layout} changeLayout={changeLayout}/>
        </div>
    );
}
 
export default Nav;