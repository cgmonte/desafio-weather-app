import "./Global.scss";

import { RiArrowLeftLine } from 'react-icons/ri';

import { IconContext } from "react-icons";

import { Link } from "react-router-dom";

function Navigation(props) {
    return <div id="back-link-icon">
        <Link to='/'>
            <IconContext.Provider value={{ size: "2em", color: props.color }}>

                <RiArrowLeftLine />

            </IconContext.Provider>


        </Link>
    </div>
}

export default Navigation