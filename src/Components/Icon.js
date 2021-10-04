import React from "react"
import * as icons from 'react-icons/wi'

import weatherConditions from '../data/weather_conditions.json'

export const Icon = ({ isDay, conditionCode }) => {
  const weatherCondition = weatherConditions.filter(condition => condition.code === conditionCode);

  let ReactIcon;

  if (isDay === 1) {
    ReactIcon = icons[weatherCondition[0].react_icon_day]
  } else {
    ReactIcon = icons[weatherCondition[0].react_icon_night]
  }

  return <ReactIcon />
}

export default Icon