import "./Global.scss";

import { RiArrowLeftLine } from 'react-icons/ri';

import { IconContext } from "react-icons";

function Navigation() {
    return (
        <div id="back-link-icon">
            <a href={"/"}>
                <IconContext.Provider value={{ size: "2em", color: "black" }}>

                    <RiArrowLeftLine />

                </IconContext.Provider>
            </a>

        </div>
    );
}

export default Navigation