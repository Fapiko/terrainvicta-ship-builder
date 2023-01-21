import hullsJson from '../data/TIShipHullTemplate.json';

export const playerHulls = hullsJson.filter(hull => !hull.alien);
