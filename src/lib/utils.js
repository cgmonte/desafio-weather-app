import * as icons from 'react-icons/wi';

import { ReactIcon } from "../Components/Icons";

import weatherConditions from '../data/weather_conditions.json';

export function unitConvertKphMs(kph) {
    return Number.parseFloat(kph / 3.6).toFixed(2)
}

export function getIcon({ isDay, conditionCode }) {
    const weatherCondition = weatherConditions.filter(condition => condition.code === conditionCode);

    let icon;

    if (isDay === 1) {
        icon = icons[weatherCondition[0].react_icon_day]
    } else {
        icon = icons[weatherCondition[0].react_icon_night]
    }

    return ReactIcon(icon);
}