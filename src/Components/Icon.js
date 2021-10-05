import React from "react"

import * as icons from 'react-icons/wi'

import { IconContext } from "react-icons"

import weatherConditions from '../data/weather_conditions.json'

export const Icon = ({ small, isDay, conditionCode }) => {

  const { react_icon_day, react_icon_night } = weatherConditions.find(condition => condition.code === conditionCode)

  const WiIcon = icons[isDay === 1 ? react_icon_day : react_icon_night]

  return (
    <IconContext.Provider value={{
      size: small ? "3.5em" : "10em",
      className: small ? "small-icon" : "big-icon"
    }}>
      <WiIcon />
    </IconContext.Provider>
  )
}

export default Icon