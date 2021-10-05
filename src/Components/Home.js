import React, { Fragment } from "react";

import { Link, withRouter } from 'react-router-dom';

import { IoMdGlobe } from 'react-icons/io'

import { IconContext } from "react-icons"

import { firstLetterUppercase } from "../lib/utils";

import "./Global.scss";

const Home = ({ cities }) => (
    <Fragment>
        <div id="outer-home-div">
                <div id="main-home-content-div">
                    <p className="main-title-name">
                        WEATHER
                    </p>

                    <p className="main-subtitle-name">select a city</p>

                    <IconContext.Provider value={{
                        size: "9em",
                        className: "home-icon"
                    }}>

                        <IoMdGlobe />

                    </IconContext.Provider>

                    <div id="home-links-outer-div">
                        {cities.map((city) =>
                            <div key={city} className="city-link-outer-div">
                                <Link to={`/${city}`} className="home-links">
                                    {firstLetterUppercase(city)}
                                </Link>
                            </div>

                        )}
                    </div>
                </div>
        </div>
    </Fragment>
)
export default withRouter(Home);