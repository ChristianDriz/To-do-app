import { useState } from "react"

function Layout () {

    let view = localStorage.getItem('layout') === 'true';

    const [layout, setLayout] = useState(false);
    const changeLayout = () => {
        setLayout(!layout);
        view = !view;

        localStorage.setItem('layout', view);
    }

    return { layout, changeLayout, view };
}
 
export default Layout;
