import { useState } from "react";

function Darkmode () {

    let mode = localStorage.getItem('dark') === 'true';

    if (mode) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark')
    }

    const [enabled, setEnabled] = useState(false);
    const toggleDarkmode = (e) => {
        setEnabled(e);

        mode = !mode;

        if (mode){
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('dark', mode);
    }

    return { enabled, toggleDarkmode, mode };
}

export default Darkmode ;